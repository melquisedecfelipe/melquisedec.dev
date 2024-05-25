import ThemeToggle from '@/components/theme-toggle'

import { ME } from '@/constants'

export default function Header() {
  return (
    <div className="flex flex-col md:flex-row md:gap-2 md:items-baseline">
      <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
        {ME.title}
      </h3>

      <p className="text-sm text-muted-foreground">{ME.description}</p>

      <ThemeToggle />
    </div>
  )
}
