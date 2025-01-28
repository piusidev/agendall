import { useQuery } from '@tanstack/react-query'

import { getCompanyTypes } from '../services/company-types'

export function useCompanyTypes() {
  return useQuery({
    queryKey: ['company-types'],
    queryFn: async () => {
      const { data: companyTypes } = await getCompanyTypes()

      return companyTypes.map((item) => ({
        value: item.id,
        label: item.name,
      }))
    },
    refetchOnMount: false,
  })
}
