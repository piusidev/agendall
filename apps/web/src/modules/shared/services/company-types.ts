import type { Tables } from '@agendall/supabase/types'

import { api } from '@/modules/shared/http/api-client'
import type { APIResponse } from '@/modules/shared/types/api'

type CompanyTypes = Tables<'company_types'>

export async function getCompanyTypes() {
  return api.get('/api/company-types').json<APIResponse<CompanyTypes>>()
}
