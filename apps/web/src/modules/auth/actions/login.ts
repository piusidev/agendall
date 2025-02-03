'use server'

import { redirect } from 'next/navigation'

import { createClient } from '@agendall/supabase/server'

import { actionClient } from '@/modules/shared/lib/safe-action'
import { ActionError } from '@/modules/shared/errors/action-error'

import { loginFormSchema } from '../schemas/login'

export const loginAction = actionClient
  .schema(loginFormSchema)
  .action(async ({ parsedInput }) => {
    const supabase = createClient()

    const { error } = await supabase.auth.signInWithPassword(parsedInput)

    if (error?.code === 'invalid_credentials') {
      throw new ActionError('Credenciais inválidas')
    }

    if (error?.code === 'email_not_confirmed') {
      throw new ActionError('Confirme seu e-mail para continuar')
    }

    if (error) {
      throw new ActionError(
        'Erro ao fazer login, tente novamente em alguns minutos',
      )
    }

    redirect('/onboarding')
  })
