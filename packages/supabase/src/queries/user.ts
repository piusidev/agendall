import type { Client } from '../types'

export function getUserQuery(supabase: Client, userId: string) {
  return supabase
    .from('users')
    .select(
      `
      *,
      company:company_id(*)
      `,
    )
    .eq('id', userId)
    .single()
    .throwOnError()
}
