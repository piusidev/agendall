import ky from 'ky'

export const api = ky.create()

export const publicApi = ky.create()
