import { cache } from 'react'

import { createClient } from '../../client/server'
import { getUserQuery } from '../../queries/user'

import { getSession } from './session'

export const getUser = cache(async () => {
  const {
    data: { session },
  } = await getSession()

  const userId = session?.user?.id

  if (!userId) {
    return null
  }

  const supabase = createClient()

  return getUserQuery(supabase, userId)
})
