import { UserProvider } from '@/modules/auth/store/user/provider'
import { routes } from '@/modules/shared/config/routes'
import { getUser } from '@agendall/supabase/queries/cached/user'
import { redirect } from 'next/navigation'

export default async function PrivateLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const user = await getUser()

  if (!user?.data.company_id) {
    redirect(routes.onboarding.root)
  }

  return <UserProvider data={user.data}>{children}</UserProvider>
}
