'use server'

import { redirect } from 'next/navigation'

import { createClient } from '@agendall/supabase/server'

import { actionClient } from '@/modules/shared/lib/safe-action'
import { BaseError } from '@/modules/shared/errors/base-error'

import { loginFormSchema } from '../schemas/login'

export const loginAction = actionClient
  .schema(loginFormSchema)
  .action(async ({ parsedInput }) => {
    const supabase = createClient()

    const { error } = await supabase.auth.signInWithPassword(parsedInput)

    if (error?.code === 'invalid_credentials') {
      throw new BaseError('Credenciais inválidas')
    }

    return redirect('/onboarding')
  })
