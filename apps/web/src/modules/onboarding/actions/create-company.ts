'use server'

import { redirect } from 'next/navigation'

import { updateUser } from '@agendall/supabase/mutations/user'
import { createCompany } from '@agendall/supabase/mutations/company'

import { authActionClient } from '@/modules/shared/lib/safe-action'
import { ActionError } from '@/modules/shared/errors/action-error'
import { routes } from '@/modules/shared/config/routes'
import { sanitize } from '@/modules/shared/utils/formatters'

import { createCompanySchema } from '../schemas/create-company'

export const createCompanyAction = authActionClient
  .schema(createCompanySchema)
  .action(async ({ parsedInput, ctx: { supabase, user } }) => {
    if (user.company_id) {
      throw new ActionError('Você já possui uma empresa cadastrada')
    }

    const { data: company, error: companyCreateError } = await createCompany(
      supabase,
      {
        ...parsedInput,
        zipcode: sanitize(parsedInput.zipcode),
      },
    )

    if (companyCreateError || !company) {
      throw new ActionError(
        'Não foi possível criar a empresa, tente novamente mais tarde',
      )
    }

    try {
      const { error: userUpdateError } = await updateUser(supabase, user.id, {
        company_id: company.id,
      })

      if (userUpdateError) {
        throw new ActionError('Erro ao vincular a empresa ao usuário.')
      }

      await supabase.auth.updateUser({
        data: { has_passed_onboarding: true },
      })
    } catch (error) {
      await supabase.from('companies').delete().eq('id', company.id)

      if (error instanceof ActionError) {
        throw error
      }

      throw new ActionError('Erro inesperado ao criar a empresa.')
    }

    redirect(routes.dashboard)
  })
