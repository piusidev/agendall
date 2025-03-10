import { createSafeActionClient } from 'next-safe-action'

import { createClient } from '@agendall/supabase/server'
import { getUser } from '@agendall/supabase/queries/cached/user'

import { DEFAULT_SERVER_ERROR_MESSAGE } from '../utils/constants'
import { ActionError } from '../errors/action-error'

export const actionClient = createSafeActionClient({
  handleServerError(e) {
    if (e instanceof ActionError) {
      return e.message
    }

    return DEFAULT_SERVER_ERROR_MESSAGE
  },
})

export const authActionClient = actionClient.use(async ({ next }) => {
  const user = await getUser()
  const supabase = createClient()

  if (!user?.data) {
    throw new ActionError('Usuário não autenticado')
  }

  return next({
    ctx: { supabase, user: user.data },
  })
})
