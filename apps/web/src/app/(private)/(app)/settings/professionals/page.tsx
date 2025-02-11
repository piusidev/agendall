import { Metadata } from 'next'
import { BreadcrumbsConfig } from '@/modules/shared/components/breadcrumbs-config'
import { routes } from '@/modules/shared/config/routes'
import { PageHeader } from '@/modules/shared/components/page-header'
import { DataTable } from '@/modules/professionals/components/professionals-table/table'
import { getProfessionals } from '@agendall/supabase/queries/cached/professional'

import { InviteProfessional } from '@/modules/professionals/components/invite-professional/dialog'
import { InvitedProfessionals } from '@/modules/professionals/components/invited-professionals/dialog'

export const metadata: Metadata = {
  title: 'Profissionais',
}

const breadcrumbs = [
  {
    label: 'Configurações',
  },
  {
    label: 'Profissionais',
    href: routes.settings.professionals,
  },
]

export default async function Page() {
  const professionals = await getProfessionals()

  return (
    <main className="container mx-auto">
      <BreadcrumbsConfig items={breadcrumbs} />

      <PageHeader
        title="Profissionais"
        description="Gerencie os profissionais da sua empresa"
      />

      <div className="grid gap-4">
        <div className="flex gap-2 items-center justify-between">
          <div></div>

          <div className="flex items-center gap-2">
            <InvitedProfessionals />
            <InviteProfessional />
          </div>
        </div>

        <DataTable
          data={[
            {
              id: '1',
              name: 'Leonardo',
              email: 'leopidev@gmail.com',
              phone: '(19) 99999-9999',
            },
            {
              id: '1',
              name: 'Leonardo',
              email: 'leopidev@gmail.com',
              phone: '(19) 99999-9999',
            },
            {
              id: '1',
              name: 'Leonardo',
              email: 'leopidev@gmail.com',
              phone: '(19) 99999-9999',
            },
            {
              id: '1',
              name: 'Leonardo',
              email: 'leopidev@gmail.com',
              phone: '(19) 99999-9999',
            },
          ]}
          pageSize={10}
          hasNextPage={false}
        />
      </div>
    </main>
  )
}
