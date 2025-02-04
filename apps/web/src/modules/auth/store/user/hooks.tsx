import { useContext } from 'react'

import { UserContext, UserState } from './store'
import { useStore } from 'zustand'

export function useUser<T>(selector: (state: UserState) => T): T {
  const store = useContext(UserContext)

  if (!store) {
    throw new Error('Missing UserContext.Provider in the tree')
  }

  return useStore(store, selector)
}
