'use server'

import { redirect } from 'next/navigation'

import { createClient } from '@repo/supabase/server'

import { actionClient } from '@/modules/shared/lib/safe-action'
import { BaseError } from '@/modules/shared/errors/base-error'

import { loginFormSchema } from '../schemas/login'

export const loginAction = actionClient
  .schema(loginFormSchema)
  .action(async ({ parsedInput }) => {
    const supabase = createClient()

    const { error } = await supabase.auth.signInWithPassword(parsedInput)

    if (error) {
      throw new BaseError(error.message)
    }

    return redirect('/onboarding')
  })
