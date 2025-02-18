import { Grid } from '@/components/ui'
import { CSSProperties } from 'react'

const ROWS = 6
const COLUMNS = 9
const ROW_SPAN_START = 2
const ROW_SPAN_END = 5
const COL_SPAN_START = 2
const COL_SPAN_END = 9

export function HeroSection() {
  return (
    <section
      style={
        {
          '--width': 'calc(var(--container-4xl) - ((var(--spacing) * 5) * 2))',
          'width': 'var(--width)',
          'height': `calc((var(--width) / ${COLUMNS}) * ${ROWS})`,
        } as CSSProperties
      }
    >
      <Grid
        columnSpanStart={COL_SPAN_START}
        columnSpanEnd={COL_SPAN_END}
        rowSpanStart={ROW_SPAN_START}
        rowSpanEnd={ROW_SPAN_END}
        columns={COLUMNS}
        rows={ROWS}
      >
        <Grid.Cross row={1} column={1} />
        <Grid.Cross row={-1} column={-1} />
        <Grid.Cell
          row={`${ROW_SPAN_START}/${ROW_SPAN_END}`}
          column={`${COL_SPAN_START}/${COL_SPAN_END}`}
        >
          <div className='font-bricolage flex h-full w-full flex-col items-center justify-center gap-4 text-center'>
            <h1 className='text-3xl font-bold'>
              Muhammad Ilham Mubarak // <span className='text-primary'>Aang</span>
            </h1>
            <h3 className='text-center text-xl'>Software Engineer</h3>
          </div>
        </Grid.Cell>
      </Grid>
    </section>
  )
}
