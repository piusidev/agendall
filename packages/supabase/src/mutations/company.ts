import { Client, TablesInsert } from '../types'

export async function createCompany(
  supabase: Client,
  data: TablesInsert<'companies'>,
) {
  return supabase.from('companies').insert(data).select().single()
}
