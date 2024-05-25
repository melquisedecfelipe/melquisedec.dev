import Link from '@/components/link'
import { EXPERIENCES } from '@/constants'

export default function Experiences() {
  return (
    <div className="space-y-4 relative">
      <p className="text-xl text-muted">Professional Experiences</p>

      {EXPERIENCES.map(experience => (
        <div key={experience.url}>
          <div className="flex flex-col gap-2 md:gap-4">
            <div className="flex-1">
              <p className="flex gap-1">
                <span>{experience.role}</span>
                {experience.url ? (
                  <Link href={experience.url}>{experience.company}</Link>
                ) : (
                  <span>{experience.company}</span>
                )}
              </p>

              <p className="text-sm text-muted-foreground">
                {experience.period}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
