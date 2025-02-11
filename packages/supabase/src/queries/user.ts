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

export function getInvitedUserByEmailQuery(
  supabase: Client,
  email: string,
  companyId: string,
) {
  return supabase
    .from('user_invites')
    .select('*')
    .eq('email', email)
    .eq('company_id', companyId)
    .single()
    .throwOnError()
}

export function getInvitedUsersQuery(supabase: Client, companyId: string) {
  return supabase
    .from('user_invites')
    .select('*')
    .eq('company_id', companyId)
    .throwOnError()
}
