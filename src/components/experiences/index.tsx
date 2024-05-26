import Link from '@/components/link'
import { Badge } from '@/components/ui/badge'

import { EXPERIENCES } from '@/constants'

export default function Experiences() {
  return (
    <div className="grid gap-5 pt-5">
      <p className="sr-only">Professional Experiences</p>

      {EXPERIENCES.map(experience => (
        <div
          className="grid md:grid-cols-[150px_1fr] gap-2 md:gap-5"
          key={experience.company}
        >
          <div className="flex gap-2 items-center">
            <p className="text-sm text-muted-foreground">{experience.year}</p>

            {experience.present && (
              <Badge className="rounded-full" variant="secondary">
                Present
              </Badge>
            )}
          </div>

          <p>
            {experience.role}{' '}
            <Link href={experience.url}>{experience.company}</Link>
          </p>
        </div>
      ))}
    </div>
  )
}
