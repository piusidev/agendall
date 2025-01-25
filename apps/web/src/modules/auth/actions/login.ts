'use server'

import { createClient } from '@repo/supabase/server'

import { actionClient } from '@/modules/shared/lib/safe-action'
import { loginFormSchema } from '../schemas/login'
import { redirect } from 'next/navigation'

export const loginAction = actionClient
  .schema(loginFormSchema)
  .action(async ({ parsedInput }) => {
    const supabase = createClient()

    const { error } = await supabase.auth.signInWithPassword(parsedInput)

    if (error) {
      throw new Error(error.message)
    }

    return redirect('/onboarding')
  })
