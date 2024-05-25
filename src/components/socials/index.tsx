import Link from '@/components/link'
import { SOCIALS } from '@/constants'

export default function Socials() {
  return (
    <>
      <p className="sr-only">Socials</p>

      <div className="flex gap-2">
        {SOCIALS.map(social => (
          <Link key={social.name} href={social.url}>
            {social.name}
          </Link>
        ))}
      </div>
    </>
  )
}
