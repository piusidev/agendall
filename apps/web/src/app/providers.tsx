'use client'

import type { ReactNode } from 'react'

import { QueryClientProvider } from '@tanstack/react-query'
import { queryClient } from '@/modules/shared/lib/react-query'

import { Toaster } from '@agendall/ui/toast'

type ProviderProps = {
  children: ReactNode
}

export function Providers({ children }: ProviderProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <Toaster />
      {children}
    </QueryClientProvider>
  )
}
