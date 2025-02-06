'use client'

import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@agendall/ui/breadcrumb'
import { useBreadcrumbs } from '../store/breadcrumbs/hooks'
import React, { Fragment } from 'react'

export function Breadcrumbs() {
  const breadcrumbs = useBreadcrumbs((state) => state.breadcrumbs)

  const lastItemIndex = breadcrumbs.length - 1

  return (
    <Breadcrumb>
      <BreadcrumbList>
        {breadcrumbs.map((item, index) => {
          if (index === lastItemIndex) {
            return (
              <BreadcrumbItem key={index}>
                <BreadcrumbPage>{item.label}</BreadcrumbPage>
              </BreadcrumbItem>
            )
          }

          return (
            <Fragment key={index}>
              <BreadcrumbItem>
                <BreadcrumbLink href={item.href}>{item.label}</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="hidden md:block" />
            </Fragment>
          )
        })}
      </BreadcrumbList>
    </Breadcrumb>
  )
}
