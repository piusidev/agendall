import { Client, TablesInsert, TablesUpdate } from '../types'

export async function updateUser(
  supabase: Client,
  id: string,
  data: TablesUpdate<'users'>,
) {
  return supabase.from('users').update(data).eq('id', id)
}

export async function inviteUser(
  supabase: Client,
  data: TablesInsert<'user_invites'>,
) {
  return supabase.from('user_invites').insert(data)
}
