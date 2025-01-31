import { api } from '@/modules/shared/http/api-client'

type Address = {
  cep: string
  state: string
  city: string
  neighborhood: string
  street: string
}

export async function getAddressByZipcode(zipcode: string) {
  return api
    .get(`https://brasilapi.com.br/api/cep/v1/${zipcode}`)
    .json<Address>()
}
