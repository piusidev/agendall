import { createContext } from 'react'
import { createStore } from 'zustand'

export type Breadcrumbs = Array<{
  label: string
  href?: string
}>

export interface BreadcrumbsState {
  breadcrumbs: Breadcrumbs
  setBreadcrumbs: (user: Breadcrumbs) => void
}

export const createBreadcrumbsStore = () => {
  return createStore<BreadcrumbsState>()((set) => ({
    breadcrumbs: [],
    setBreadcrumbs: (breadcrumbs: Breadcrumbs) => set({ breadcrumbs }),
  }))
}

export type BreadcrumbsStore = ReturnType<typeof createBreadcrumbsStore>
export const BreadcrumbsContext = createContext<BreadcrumbsStore | null>(null)
