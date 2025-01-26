import { createSafeActionClient } from 'next-safe-action'

import { DEFAULT_SERVER_ERROR_MESSAGE } from '../utils/constants'
import { BaseError } from '../errors/base-error'

export const actionClient = createSafeActionClient({
  handleServerError(e) {
    if (e instanceof BaseError) {
      return e.message
    }

    return DEFAULT_SERVER_ERROR_MESSAGE
  },
})
