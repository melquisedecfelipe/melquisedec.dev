import Link from '@/components/link'
import ThemeToggle from '@/components/theme-toggle'
import { SOCIALS } from '@/constants'

export default function Socials() {
  return (
    <>
      <p className="sr-only">Socials</p>

      <div className='flex justify-between items-center'>
        <div className="flex gap-2 relative">
          {SOCIALS.map(social => (
            <Link key={social.name} href={social.url}>
              {social.name}
            </Link>
          ))}
        </div>

        <ThemeToggle />
      </div>
    </>
  )
}
