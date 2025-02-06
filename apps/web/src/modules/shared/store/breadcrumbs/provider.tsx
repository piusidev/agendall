'use client'

import { BreadcrumbsContext, createBreadcrumbsStore } from './store'

type BreadcrumbsProviderProps = React.PropsWithChildren<{}>

export function BreadcrumbsProvider({ children }: BreadcrumbsProviderProps) {
  const store = createBreadcrumbsStore()

  return (
    <BreadcrumbsContext.Provider value={store}>
      {children}
    </BreadcrumbsContext.Provider>
  )
}
