import { useState } from 'react'

import { Button } from '@/components/ui'

type VisualizerProps = React.PropsWithChildren<{ Comp: React.ComponentType; reload: boolean }>

export function Visualizer({ children, Comp, reload = true }: VisualizerProps) {
  const [key, setKey] = useState(0)
  return (
    <div className='mx-0 flex overflow-clip rounded-lg border border-neutral-700 bg-background text-sm dots dots-neutral-700/40 md:-mx-10 [&_pre]:m-0 [&_pre]:!bg-transparent'>
      <div className='flex flex-1 items-center bg-gray-900'>{children}</div>
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
