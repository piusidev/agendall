import { create } from 'zustand'
import { CreateCompanySchema } from '../schemas/create-company'

type OnboardingState = {
  step: number
  company: CreateCompanySchema
}

type OnboardingAction = {
  updateStep: (step: number) => void
  updateCompany: (company: OnboardingState['company']) => void
}

export const useOnboardingStore = create<OnboardingState & OnboardingAction>(
  (set) => ({
    step: 1,
    updateStep: (step) => set({ step }),
    company: {
      name: '',
      document: '',
      company_type: '',
      employee_count: 0,
    },
    updateCompany: (company) => set({ company }),
  }),
)
