import Icon from '@/components/icon'

import { ME } from '@/constants'

export default function Header() {
  return (
    <nav className="relative space-y-1">
      <div className="flex gap-2 items-center">
        <Icon />

        <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          {ME.title}
        </h3>
      </div>

      <p className="text-sm text-muted-foreground">{ME.description}</p>
    </nav>
  )
}
