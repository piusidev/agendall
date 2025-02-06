'use client'

import { useEffect } from 'react'

import { useBreadcrumbs } from '@/modules/shared/store/breadcrumbs/hooks'
import type { Breadcrumbs } from '@/modules/shared/store/breadcrumbs/store'

type BreadcrumbsConfigProps = {
  items: Breadcrumbs
}

export function BreadcrumbsConfig({ items }: BreadcrumbsConfigProps) {
  const setBreadcrumbs = useBreadcrumbs((state) => state.setBreadcrumbs)

  useEffect(() => {
    setBreadcrumbs(items)
  }, [items, setBreadcrumbs])

  return null
}
