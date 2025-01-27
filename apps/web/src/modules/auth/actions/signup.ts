'use server'

import { createClient } from '@agendall/supabase/server'

import { actionClient } from '@/modules/shared/lib/safe-action'
import { signUpSchema } from '../schemas/signup'

export const signUpAction = actionClient
  .schema(signUpSchema)
  .action(async ({ parsedInput }) => {
    const supabase = createClient()

    await supabase.auth.signUp({
      email: parsedInput.email,
      password: parsedInput.password,
      options: {
        data: {
          first_name: parsedInput.first_name,
          last_name: parsedInput.last_name,
        },
      },
    })
  })
