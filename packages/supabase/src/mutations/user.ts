import { Client, TablesUpdate } from '../types'

export async function updateUser(
  supabase: Client,
  id: string,
  data: TablesUpdate<'users'>,
) {
  return supabase.from('users').update(data).eq('id', id)
}
