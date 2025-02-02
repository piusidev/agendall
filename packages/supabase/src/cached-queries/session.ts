import { cache } from 'react'

import { createClient } from '../client/server'

export const getSession = cache(async () => {
  const supabase = createClient()

  return supabase.auth.getSession()
})
