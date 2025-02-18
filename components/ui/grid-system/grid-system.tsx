'use client'

import { createContext, CSSProperties, useContext } from 'react'

import { cn } from '@/lib/utils'
import { Slot } from '@radix-ui/react-slot'

const GridSystemContext = createContext<number>(0)

function GridSystem({ children, borderWidth }: React.PropsWithChildren<{ borderWidth: number }>) {
  return <GridSystemContext.Provider value={borderWidth}>{children}</GridSystemContext.Provider>
}

type GridProps = {
  columns: number
  rows: number
  columnSpanStart?: number
  columnSpanEnd?: number
  rowSpanStart?: number
  rowSpanEnd?: number
  children: React.ReactNode
} & React.HTMLAttributes<HTMLDivElement>

export function Grid({
  columnSpanStart,
  columnSpanEnd,
  rowSpanStart,
  rowSpanEnd,
  columns,
  rows,
  children,
  className,
  ...props
}: GridProps) {
  const borderWidth = useContext(GridSystemContext)

  return (
    <div
      className={cn(
        'border-t-border border-r-border relative grid h-full border-r-0 border-b-0',
        className
      )}
      style={{
        gridTemplateColumns: `repeat(${columns}, 1fr)`,
        gridTemplateRows: `repeat(${rows}, 1fr)`,
        borderTopWidth: `${borderWidth}px`,
        borderRightWidth: `${borderWidth}px`,
      }}
      {...props}
    >
      {children}
      <div className='pointer-events-none contents' aria-hidden>
        {Array.from({ length: columns * rows }).map((_, i) => {
          const x = (i % columns) + 1
          const y = Math.floor(i / columns) + 1

          return (
            <div
              aria-hidden
              className='pointer-events-none absolute inset-0 border-t-0 border-l-0'
              style={{
                borderStyle: 'solid',
                gridColumnStart: x,
                gridColumnEnd: 'span 1',
                gridRowStart: y,
                gridRowEnd: 'span 1',
                borderBottom:
                  rowSpanStart &&
                  rowSpanEnd &&
                  columnSpanStart &&
                  columnSpanEnd &&
                  y >= rowSpanStart &&
                  y < rowSpanEnd - 1 &&
                  x >= columnSpanStart &&
                  x < columnSpanEnd
                    ? 'none'
                    : `${borderWidth}px solid var(--color-border)`,
                borderLeft:
                  rowSpanStart &&
                  rowSpanEnd &&
                  columnSpanStart &&
                  columnSpanEnd &&
                  y >= rowSpanStart &&
                  y < rowSpanEnd &&
                  x > columnSpanStart &&
                  x < columnSpanEnd
                    ? 'none'
                    : `${borderWidth}px solid var(--color-border)`,
              }}
            />
          )
        })}
      </div>
    </div>
  )
}

function GridCell({
  column,
  row,
  children,
  className,
  asChild,
  ...props
}: {
  asChild?: boolean
  column: CSSProperties['gridColumn']
  row: CSSProperties['gridRow']
  children: React.ReactNode
} & React.HTMLAttributes<HTMLDivElement>) {
  const Comp = asChild ? Slot : 'div'
  return (
    <Comp
      className={cn('overflow-hidden', className)}
      style={{
        gridRow: row,
        gridColumn: column,
      }}
      {...props}
    >
      {children}
    </Comp>
  )
}

function GridCross({
  column,
  row,
  className,
  ...props
}: {
  column: CSSProperties['gridColumn']
  row: CSSProperties['gridRow']
} & Omit<React.HTMLAttributes<HTMLDivElement>, 'children'>) {
  const borderWidth = useContext(GridSystemContext)
  return (
    <div
      className={cn('pointer-events-none absolute z-20 h-fit w-fit', className)}
      style={
        {
          '--cross-row': row,
          '--cross-column': column,
          '--cross-size': '24px',
          '--cross-half-size': `calc((var(--cross-size) / 2) + ${borderWidth}px - 0.5px)`,
          'gridColumnStart': column,
          'gridRowStart': row,
          'inset': `calc((var(--cross-half-size)*-1) + ${borderWidth}px)`,
        } as CSSProperties
      }
      {...props}
    >
      <div
        className='absolute'
        style={{
          width: 'var(--cross-half-size)',
          height: 'var(--cross-size)',
          borderRight: `${borderWidth}px solid #9CA3AF`,
        }}
      ></div>
      <div
        className='absolute'
        style={{
          width: 'var(--cross-size)',
          height: 'var(--cross-half-size)',
          borderBottom: `${borderWidth}px solid #9CA3AF`,
        }}
      ></div>
    </div>
  )
}

function GridSpacer() {
  const borderWidth = useContext(GridSystemContext)
  return (
    <div
      className={cn('h-12 w-full')}
      style={{
        borderLeft: `${borderWidth}px solid`,
        borderRight: `${borderWidth}px solid`,
        borderColor: 'var(--color-border)',
      }}
    />
  )
}

Grid.System = GridSystem
Grid.Cell = GridCell
Grid.Cross = GridCross
Grid.Spacer = GridSpacer
