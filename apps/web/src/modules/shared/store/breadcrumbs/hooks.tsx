import { useContext } from 'react'

import { BreadcrumbsContext, BreadcrumbsState } from './store'
import { useStore } from 'zustand'

export function useBreadcrumbs<T>(selector: (state: BreadcrumbsState) => T): T {
  const store = useContext(BreadcrumbsContext)

  if (!store) {
    throw new Error('Missing BreadcrumbsContext.Provider in the tree')
  }

  return useStore(store, selector)
}
