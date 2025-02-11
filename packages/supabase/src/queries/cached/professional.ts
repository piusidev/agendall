import { cache } from 'react'

import { createClient } from '../../client/server'
import {
  getProfessionalsQuery,
  getProfessionalByEmailQuery,
} from '../../queries/professional'

import { getUser } from './user'

export const getProfessionals = cache(async () => {
  const supabase = createClient()

  const user = await getUser()
  const companyId = user?.data.company_id

  if (!companyId) {
    return null
  }

  return getProfessionalsQuery(supabase, companyId)
})

export const getProfessionalByEmail = cache(async (email: string) => {
  const supabase = createClient()

  const user = await getUser()
  const companyId = user?.data.company_id

  if (!companyId) {
    return null
  }

  return getProfessionalByEmailQuery(supabase, companyId, email)
})
