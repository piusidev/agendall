import { useQuery } from '@tanstack/react-query'

import { createClient } from '@agendall/supabase/client'
import { CACHE_KEYS } from '../config/cache-keys'

export function useCompanyTypes() {
  return useQuery({
    queryKey: [CACHE_KEYS.COMPANY_TYPES],
    queryFn: async () => {
      const supabase = createClient()

      const { data } = await supabase.from('company_types').select('id, name')

      return data?.map((companyType) => ({
        value: companyType.id,
        label: companyType.name,
      }))
    },
    refetchOnMount: false,
  })
}
