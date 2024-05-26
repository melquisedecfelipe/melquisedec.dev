import { EDUCATION } from '@/constants'

export default function Education() {
  return (
    <div className="grid gap-5 pt-5">
      <p className="sr-only">Formation</p>

      {EDUCATION.map(education => (
        <div
          className="grid grid-cols-[150px_1fr] gap-2 md:gap-5 items-baseline"
          key={education.institution}
        >
          <p className="text-sm text-muted-foreground">{education.period}</p>

          <div>
            <span className="text-primary">{education.course}</span>

            <p className="text-sm text-muted-foreground">
              {education.institution}
            </p>
          </div>
        </div>
      ))}
    </div>
  )
}
