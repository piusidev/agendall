'use server'

import { redirect } from 'next/navigation'

import { authActionClient } from '@/modules/shared/lib/safe-action'
import { BaseError } from '@/modules/shared/errors/base-error'
import { routes } from '@/modules/shared/config/routes'
import { sanitize } from '@/modules/shared/utils/formatters'

import { createCompanySchema } from '../schemas/create-company'

export const createCompanyAction = authActionClient
  .schema(createCompanySchema)
  .action(async ({ parsedInput, ctx }) => {
    const { supabase, user } = ctx

    if (user.company_id) {
      throw new BaseError('Você já possui uma empresa cadastrada')
    }

    const { zipcode, ...companyData } = parsedInput

    const { data: company, error: companyInsertError } = await supabase
      .from('companies')
      .insert({ ...companyData, zipcode: sanitize(zipcode) })
      .select()
      .single()

    if (companyInsertError || !company) {
      throw new BaseError(
        'Não foi possível criar a empresa, tente novamente mais tarde',
      )
    }

    try {
      const { error: userUpdateError } = await supabase
        .from('users')
        .update({ company_id: company.id })
        .eq('id', user.id)

      if (userUpdateError) {
        throw new BaseError('Erro ao vincular a empresa ao usuário.')
      }

      await supabase.auth.updateUser({
        data: { has_passed_onboarding: true },
      })
    } catch (error) {
      await supabase.from('companies').delete().eq('id', company.id)

      if (error instanceof BaseError) {
        throw error
      }

      throw new BaseError('Erro inesperado ao criar a empresa.')
    }

    redirect(routes.dashboard)
  })
