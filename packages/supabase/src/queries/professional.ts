import type { Client } from '../types'

export function getProfessionalsQuery(supabase: Client, companyId: string) {
  return supabase
    .from('professionals')
    .select(
      `
      *,
      user:user_id(name, email)
      `,
    )
    .eq('company_id', companyId)
    .throwOnError()
}
