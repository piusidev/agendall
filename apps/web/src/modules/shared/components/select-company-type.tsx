'use client'

import { ComponentProps } from 'react'

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@agendall/ui/select'

import { useCompanyTypes } from '../hooks/use-company-types'

interface SelectCompanyTypeProps extends ComponentProps<typeof Select> {
  placeholder: string
}

export function SelectCompanyType({
  value,
  placeholder,
  ...rest
}: SelectCompanyTypeProps) {
  const { data: companyTypes } = useCompanyTypes()

  return (
    <Select defaultValue={value} {...rest}>
      <SelectTrigger className="bg-background">
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {companyTypes?.map((companyType) => (
            <SelectItem key={companyType.value} value={companyType.value}>
              {companyType.label}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
