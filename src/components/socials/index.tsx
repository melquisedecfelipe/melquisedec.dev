import Link from '@/components/link'
import ThemeToggle from '@/components/theme-toggle'

import { ME, SOCIALS } from '@/constants'

export default function Socials() {
  return (
    <div className="relative">
      <p className="hidden md:block text-sm text-muted break-all hyphens-auto pt-4 absolute opacity-50 select-none max-w-[400px]">
        {ME.binary}
      </p>

      <p className="sr-only">Socials</p>

      <div className="flex justify-between items-center mt-5">
        <div className="flex gap-2 relative">
          {SOCIALS.map(social => (
            <Link key={social.name} href={social.url}>
              {social.name}
            </Link>
          ))}
        </div>

        <ThemeToggle />
      </div>
    </div>
  )
}
