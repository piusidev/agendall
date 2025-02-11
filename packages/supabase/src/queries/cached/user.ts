import { cache } from 'react'

import { createClient } from '../../client/server'
import {
  getUserQuery,
  getInvitedUserByEmailQuery,
  getInvitedUsersQuery,
} from '../../queries/user'

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

export const getInvitedUserByEmail = cache(async (email: string) => {
  const user = await getUser()
  const companyId = user?.data.company_id

  if (!companyId) {
    return null
  }

  const supabase = createClient()

  return getInvitedUserByEmailQuery(supabase, email, companyId)
})

export const getInvitedUsers = cache(async () => {
  const user = await getUser()
  const companyId = user?.data.company_id

  if (!companyId) {
    return null
  }

  const supabase = createClient()

  return getInvitedUsersQuery(supabase, companyId)
})
