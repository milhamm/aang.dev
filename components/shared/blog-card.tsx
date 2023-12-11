import Link from 'next/link'

import { DateFormatter } from '@/lib/date'
import { ColorPallete, pallete } from '@/lib/pallete'
import { cn } from '@/lib/utils'

type PostCardProps = {
  slug: string
  data: {
    date: string
    title: string
    color?: ColorPallete
  }
}

export function BlogCard({ data, slug }: PostCardProps) {
  const publishedAt = DateFormatter(data.date)

  return (
    <Link
      href={`/blog/${slug}`}
      className={cn(
        'relative cursor-pointer transition-all',
        "after:absolute after:bottom-0 after:h-full after:w-full after:bg-gradient-to-t after:from-background after:from-5% after:content-['']"
      )}
    >
      <div className='h-[170px] rounded-xl border-2 border-border p-1 '>
        <div
          className={cn(
            'flex h-full flex-col justify-end rounded-lg bg-gradient-to-br p-4 text-sm text-white',
            pallete[data.color || 'blue']
          )}
        >
          <h3 className='z-10 mb-2 line-clamp-4 font-bold'>{data.title}</h3>
          <span className='z-10 text-xs text-muted-foreground'>{publishedAt.getShortFormat()}</span>
        </div>
      </div>
    </Link>
  )
}
