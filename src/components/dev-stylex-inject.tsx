import { useEffect } from 'react'

function DevStyleXInjectImpl() {
  useEffect(() => {
    void import('virtual:stylex:runtime')
  }, [])

  return <link rel="stylesheet" href="/virtual:stylex.css" />
}

export function DevStyleXInject() {
  if (!import.meta.env.DEV) {
    return null
  }

  return <DevStyleXInjectImpl />
}
