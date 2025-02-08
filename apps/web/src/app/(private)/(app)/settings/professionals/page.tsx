import { Metadata } from 'next'
import { BreadcrumbsConfig } from '@/modules/shared/components/breadcrumbs-config'
import { routes } from '@/modules/shared/config/routes'
import { PageHeader } from '@/modules/shared/components/page-header'
import { DataTable } from '@/modules/professionals/components/professionals-table/table'
import { getProfessionals } from '@agendall/supabase/queries/cached/professional'

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

  console.log(professionals)

  return (
    <main className="container mx-auto">
      <BreadcrumbsConfig items={breadcrumbs} />

      <PageHeader
        title="Profissionais"
        description="Gerencie os profissionais da sua empresa"
      />

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
    </main>
  )
}
