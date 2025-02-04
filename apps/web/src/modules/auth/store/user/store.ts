import { createContext } from 'react'
import { createStore } from 'zustand'

import type { Tables } from '@agendall/supabase/types'

type User = Tables<'users'>

export interface UserProps {
  data: User
}

export interface UserState {
  user: User
  setUser: (user: User) => void
}

export const createUserStore = (initProps: UserProps) => {
  return createStore<UserState>()((set) => ({
    user: initProps?.data,
    setUser: (user: User) => set({ user }),
  }))
}

export type UserStore = ReturnType<typeof createUserStore>
export const UserContext = createContext<UserStore | null>(null)
