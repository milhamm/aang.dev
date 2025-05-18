import { Slot } from '@radix-ui/react-slot';
import type { CSSProperties } from 'react';
import { cn } from '~/lib/utils';

type GridProps = {
  columns: number;
  rows: number;
  columnSpanStart?: number;
  columnSpanEnd?: number;
  rowSpanStart?: number;
  rowSpanEnd?: number;
  children: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>;

export function Grid({ columns, rows, children, className, ...props }: GridProps) {
  return (
    <div
      className={cn(
        'border-t-border border-r-border border-t border-r relative grid h-full border-l-0 border-b-0',
        className,
      )}
      style={{
        gridTemplateColumns: `repeat(${columns}, 1fr)`,
        gridTemplateRows: `repeat(${rows}, 1fr)`,
      }}
      {...props}
    >
      {children}
      <div className="pointer-events-none contents" aria-hidden>
        {Array.from({ length: columns * rows }).map((_, i) => {
          const x = (i % columns) + 1;
          const y = Math.floor(i / columns) + 1;
          return (
            <div
              key={i}
              aria-hidden
              className="pointer-events-none absolute inset-0 border-t-0 border-r-0 border-b border-l border-b-border border-l-border"
              style={{
                gridColumnStart: x,
                gridColumnEnd: 'span 1',
                gridRowStart: y,
                gridRowEnd: 'span 1',
              }}
            />
          );
        })}
      </div>
    </div>
  );
}

function GridCell({
  column,
  row,
  children,
  className,
  asChild,
  ...props
}: {
  asChild?: boolean;
  column: CSSProperties['gridColumn'];
  row: CSSProperties['gridRow'];
  children: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>) {
  const Comp = asChild ? Slot : 'div';
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
  );
}

function GridCross({
  column,
  row,
  className,
  ...props
}: {
  column: CSSProperties['gridColumn'];
  row: CSSProperties['gridRow'];
} & Omit<React.HTMLAttributes<HTMLDivElement>, 'children'>) {
  return (
    <div
      className={cn('pointer-events-none absolute z-20 h-fit w-fit', className)}
      style={
        {
          '--cross-row': row,
          '--cross-column': column,
          '--cross-size': '24px',
          '--cross-half-size': 'calc((var(--cross-size) / 2) + 1px - 0.5px)',
          gridColumnStart: column,
          gridRowStart: row,
          inset: 'calc((var(--cross-half-size)*-1) + 1px)',
        } as CSSProperties
      }
      {...props}
    >
      <div className="absolute h-(--cross-size) w-(--cross-half-size) border-r border-r-primary" />
      <div className="absolute w-(--cross-size) h-(--cross-half-size) border-b border-b-primary" />
    </div>
  );
}

function GridSpacer() {
  return (
    <div
      className={cn('h-12 w-full border-l border-l-border border-r border-r-border bg-accent')}
    />
  );
}

Grid.Cell = GridCell;
Grid.Cross = GridCross;
Grid.Spacer = GridSpacer;
