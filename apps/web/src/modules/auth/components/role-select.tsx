import * as React from 'react'

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@agendall/ui/select'

import { DEFAULT_SELECT_PLACEHOLDER } from '@/modules/shared/utils/constants'

import { ROLES } from '../constants/roles'

type RoleSelectProps = React.ComponentProps<typeof Select>

export function RoleSelect({ ...props }: RoleSelectProps) {
  return (
    <Select {...props}>
      <SelectTrigger>
        <SelectValue placeholder={DEFAULT_SELECT_PLACEHOLDER} />
      </SelectTrigger>

      <SelectContent>
        <SelectGroup>
          <SelectItem value={ROLES.OWNER}>Administrador</SelectItem>
          <SelectItem value={ROLES.MEMBER}>Membro</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
