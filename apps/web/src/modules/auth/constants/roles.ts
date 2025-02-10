export const ROLES = {
  OWNER: 'owner',
  MEMBER: 'member',
} as const

export type Role = keyof typeof ROLES
