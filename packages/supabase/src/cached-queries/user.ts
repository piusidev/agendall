import { cache } from 'react'
import { getSession } from './session'
import { createClient } from '../client/server'
import { getUserQuery } from '../queries/user'

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
