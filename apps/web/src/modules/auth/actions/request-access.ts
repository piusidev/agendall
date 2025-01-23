'use server'

import { createClient } from '@repo/supabase/server'

import { actionClient } from '@/modules/shared/lib/safe-action'
import { requestAcessSchema } from '../schemas/request-access'
import { sanitize } from '@/modules/shared/utils/formatters'

export const requestAccessAction = actionClient
  .schema(requestAcessSchema)
  .action(async ({ parsedInput }) => {
    const supabase = createClient()

    await supabase.from('access_requests').insert({
      ...parsedInput,
      company_document: sanitize(parsedInput.company_document),
      responsible_phone: sanitize(parsedInput.responsible_phone),
    })
  })
