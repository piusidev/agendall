import { useState, useEffect, useRef, useMemo } from 'react'

interface SpinDelayOptions {
  /**
   * The delay in milliseconds before the spinner is displayed.
   * @default 1000
   */
  delay?: number
  /**
   * The minimum duration in milliseconds the spinner is displayed.
   * @default 200
   */
  minDuration?: number
  /**
   * Whether to enable the spinner on the server side. If true, `delay` will be
   * ignored, and the spinner will be shown immediately if `loading` is true.
   * @default true
   */
  ssr?: boolean
}

type State = 'IDLE' | 'DELAY' | 'DISPLAY' | 'EXPIRE'

const defaultOptions: SpinDelayOptions = {
  delay: 500,
  minDuration: 200,
  ssr: true,
}

function useIsSSR(): boolean {
  const [isSSR, setIsSSR] = useState(true)

  useEffect(() => {
    setIsSSR(false)
  }, [])

  return isSSR
}

export function useLoadingDelay(
  loading: boolean,
  options?: SpinDelayOptions,
): boolean {
  const { delay, minDuration, ssr } = useMemo(
    () => ({ ...defaultOptions, ...options }),
    [options],
  )

  const isSSR = useIsSSR() && ssr
  const initialState: State = isSSR && loading ? 'DISPLAY' : 'IDLE'
  const [state, setState] = useState<State>(initialState)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  const clearTimeoutRef = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
      timeoutRef.current = null
    }
  }

  useEffect(() => {
    if (loading) {
      if (state === 'IDLE' || isSSR) {
        clearTimeoutRef()

        const delayTime = isSSR ? 0 : delay
        timeoutRef.current = setTimeout(() => {
          if (!loading) {
            setState('IDLE')
            return
          }

          setState('DISPLAY')

          timeoutRef.current = setTimeout(() => {
            setState('EXPIRE')
          }, minDuration)
        }, delayTime)

        if (!isSSR) {
          setState('DELAY')
        }
      }
    } else if (!loading && state !== 'DISPLAY') {
      clearTimeoutRef()
      setState('IDLE')
    }
  }, [loading, state, delay, minDuration, isSSR])

  useEffect(() => {
    return () => clearTimeoutRef()
  }, [])

  return state === 'DISPLAY' || state === 'EXPIRE'
}
