import type { Client } from '../types'

export const getUserQuery = async (supabase: Client, userId: string) => {
  console.log('getUserQuery', userId)
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
