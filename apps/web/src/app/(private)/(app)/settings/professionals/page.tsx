import { Metadata } from 'next'
import { BreadcrumbsConfig } from '@/modules/shared/components/breadcrumbs-config'
import { routes } from '@/modules/shared/config/routes'
import { PageHeader } from '@/modules/shared/components/page-header'

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

export default function Page() {
  return (
    <div>
      <BreadcrumbsConfig items={breadcrumbs} />

      <PageHeader
        title="Profissionais"
        description="Gerencie os profissionais da sua empresa"
      />
    </div>
  )
}
