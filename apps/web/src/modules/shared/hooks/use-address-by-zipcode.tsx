import { useQuery } from '@tanstack/react-query'

import { getAddressByZipcode } from '../services/get-address-by-zipcode'
import { CACHE_KEYS } from '../config/cache-keys'

export function useAddressByZipcode(cep: string) {
  return useQuery({
    queryKey: [CACHE_KEYS.zipcode, cep],
    queryFn: () => getAddressByZipcode(cep),
    enabled: Boolean(cep) && cep.length === 9,
    refetchOnWindowFocus: false,
  })
}
