import { Metadata } from 'next'

import { BreadcrumbsConfig } from '@/modules/shared/components/breadcrumbs-config'
import { routes } from '@/modules/shared/config/routes'

export const metadata: Metadata = {
  title: 'Dashboard',
}

const breadcrumbs = [
  {
    label: 'Dashboard',
    href: routes.dashboard,
  },
]

export default async function Page() {
  return (
    <div>
      <BreadcrumbsConfig items={breadcrumbs} />

      <div>oi</div>
    </div>
  )
}
