import { createSafeActionClient } from 'next-safe-action'

import { DEFAULT_SERVER_ERROR_MESSAGE } from '../utils/constants'
import { BaseError } from '../errors/base-error'
import { createClient } from '@repo/supabase/server'

export const actionClient = createSafeActionClient({
  handleServerError(e) {
    if (e instanceof BaseError) {
      return e.message
    }

    return DEFAULT_SERVER_ERROR_MESSAGE
  },
})

export const authActionClient = actionClient.use(async ({ next }) => {
  const supabase = createClient()
  const user = await supabase.auth.getUser()

  if (!user.data) {
    throw new BaseError('Usuário não autenticado')
  }

  return next({
    ctx: { supabase, user: user.data },
  })
})
