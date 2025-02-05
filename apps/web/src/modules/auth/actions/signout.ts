'use server'

import { routes } from '@/modules/shared/config/routes'
import { authActionClient } from '@/modules/shared/lib/safe-action'
import { redirect } from 'next/navigation'

export const signOutAction = authActionClient.action(
  async ({ ctx: { supabase } }) => {
    await supabase.auth.signOut()

    return redirect(routes.auth.login)
  },
)
