'use server'

import { authActionClient } from '@/modules/shared/lib/safe-action'

import { createCompanySchema } from '../schemas/create-company'
import { sanitize } from '@/modules/shared/utils/formatters'
import { BaseError } from '@/modules/shared/errors/base-error'

export const loginAction = authActionClient
  .schema(createCompanySchema)
  .action(async ({ parsedInput, ctx }) => {
    const { supabase } = ctx

    const sanitizedDocument = sanitize(parsedInput.document)

    const { data: company } = await supabase
      .from('companies')
      .select()
      .eq('document', sanitizedDocument)
      .single()

    if (company) {
      throw new BaseError('Empresa já cadastrada')
    }
  })
