import { create } from 'zustand'

import type {
  CompanyAddressSchema,
  CompanyInfoSchema,
  CreateCompanySchema,
} from '../schemas/create-company'

type State = {
  step: number
  company: CreateCompanySchema
}

type Action = {
  updateStep: (step: number) => void
  updateCompanyInfo: (info: CompanyInfoSchema) => void
  updateCompanyAddress: (address: CompanyAddressSchema) => void
}

export const useCreateCompanyStore = create<State & Action>((set) => ({
  step: 1,
  updateStep: (step) => set({ step }),
  company: {
    zipcode: '',
    name: '',
    type: '',
    city: '',
    complement: '',
    neighborhood: '',
    number: '',
    state: '',
    street: '',
    employee_count: 0,
  },
  updateCompanyInfo: (info) =>
    set(({ company }) => ({ company: { ...company, ...info } })),
  updateCompanyAddress: (address) =>
    set(({ company }) => ({ company: { ...company, ...address } })),
}))
