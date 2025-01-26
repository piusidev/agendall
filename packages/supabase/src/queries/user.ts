import { cache } from 'react'

import type { Client } from '../types'

export const getUserDetails = cache(async (supabase: Client) => {
  const { data: userDetails } = await supabase
    .from('users')
    .select('*')
    .single()

  return userDetails
})
