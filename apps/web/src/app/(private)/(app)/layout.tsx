import { redirect } from 'next/navigation'

import { getUser } from '@agendall/supabase/queries/cached/user'

import { Separator } from '@agendall/ui/separator'
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from '@agendall/ui/sidebar'

import { routes } from '@/modules/shared/config/routes'
import { AppSidebar } from '@/modules/shared/components/sidebar/app-sidebar'
import { BreadcrumbsProvider } from '@/modules/shared/store/breadcrumbs/provider'
import { Breadcrumbs } from '@/modules/shared/components/breadcrumbs'

import { UserProvider } from '@/modules/auth/store/user/provider'

export default async function PrivateLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const user = await getUser()

  if (!user?.data.company_id) {
    redirect(routes.onboarding.root)
  }

  return (
    <UserProvider data={user.data}>
      <BreadcrumbsProvider>
        <SidebarProvider>
          <AppSidebar />

          <SidebarInset>
            <header className="flex h-16 shrink-0 items-center gap-2 border-b">
              <div className="flex items-center gap-2 px-4">
                <SidebarTrigger className="-ml-1" />
                <Separator orientation="vertical" className="mr-2 h-4" />

                <Breadcrumbs />
              </div>
            </header>

            <div className="flex flex-1 flex-col gap-4 p-4">{children}</div>
          </SidebarInset>
        </SidebarProvider>
      </BreadcrumbsProvider>
    </UserProvider>
  )
}
