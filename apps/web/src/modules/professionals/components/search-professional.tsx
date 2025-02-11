import type { ComponentProps } from 'react'

import { Input } from '@agendall/ui/input'

type SearchProfessionalProps = ComponentProps<typeof Input>

export function SearchProfessional({ ...props }: SearchProfessionalProps) {
  return <Input placeholder="Buscar profissional" {...props} />
}
