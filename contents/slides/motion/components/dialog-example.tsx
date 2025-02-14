import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'

import { Button } from '@/components/ui'
import { cn } from '@/lib/utils'

export function DialogExample({ easingClassName }: { easingClassName?: string }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Open Me</Button>
      </DialogTrigger>
      <DialogContent className={cn(easingClassName, '!duration-300')}>
        <DialogHeader>
          <DialogTitle>Are you absolutely sure?</DialogTitle>
          <DialogDescription>
            This action cannot be undone. This will permanently delete your account and remove your
            data from our servers.
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}
