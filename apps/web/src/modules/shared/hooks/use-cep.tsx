import { useQuery } from '@tanstack/react-query'
import { getAddressByCEP } from '../services/get-address-by-cep'

export function useCEP(cep: string) {
  return useQuery({
    queryKey: ['cep', cep],
    queryFn: async () => getAddressByCEP(cep),
    enabled: !!cep && cep.length === 9,
  })
}
