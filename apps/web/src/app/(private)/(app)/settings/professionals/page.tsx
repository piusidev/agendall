import { Metadata } from 'next'
import { BreadcrumbsConfig } from '@/modules/shared/components/breadcrumbs-config'
import { routes } from '@/modules/shared/config/routes'

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

      <div>oi</div>
    </div>
  )
}
