import { CURRENT_COMPANY, ME } from '@/constants'
import Icon from '../icon'

export default function Header() {
  return (
    <nav>
      <Icon />

      <div className="flex flex-col md:flex-row gap-1 items-baseline mt-2 md:mt-5 lg:mt-10">
        <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          {ME.title}
        </h3>

        <p className="text-sm text-muted-foreground">{ME.description}</p>
      </div>

      <p className="text-lg font-semibold">{CURRENT_COMPANY.role}</p>
    </nav>
  )
}
