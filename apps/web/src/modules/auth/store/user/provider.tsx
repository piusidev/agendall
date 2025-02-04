'use client'

import { UserContext, type UserProps, createUserStore } from './store'

type UserProviderProps = React.PropsWithChildren<UserProps>

export function UserProvider({ children, data }: UserProviderProps) {
  const store = createUserStore({ data })

  return <UserContext.Provider value={store}>{children}</UserContext.Provider>
}
