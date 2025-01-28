'use server'

import { authActionClient } from '@/modules/shared/lib/safe-action'

import { createCompanySchema } from '../schemas/create-company'

export const loginAction = authActionClient
  .schema(createCompanySchema)
  .action(async ({ parsedInput, ctx }) => {
    const { supabase } = ctx
  })
