import { useState } from 'react'

import { Button } from '@/components/ui'
import { cn } from '@/lib/utils'

type VisualizerProps = React.PropsWithChildren<{
  Comp: React.ComponentType
  reload: boolean
  className?: string
}>

export function Visualizer({ children, Comp, reload = true, className }: VisualizerProps) {
  const [key, setKey] = useState(0)
  return (
    <div
      className={cn(
        'mx-0 flex h-full max-h-96 overflow-clip rounded-lg border border-neutral-700 bg-background text-sm dots dots-neutral-700/40 xl:-mx-16 [&_pre]:m-0 [&_pre]:!bg-transparent',
        className
      )}
    >
      <div className='relative flex flex-1 flex-col gap-1 overflow-scroll bg-neutral-900'>
        {children}
      </div>
      <div className='my-10 flex flex-1 flex-col items-center justify-center gap-4'>
        <Comp key={key} />
        {reload ? (
          <Button variant='secondary' onClick={() => setKey((k) => k + 1)}>
            Reload
          </Button>
        ) : null}
      </div>
    </div>
  )
}
