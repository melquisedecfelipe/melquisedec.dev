import { EDUCATION } from '@/constants'

export default function Education() {
  return (
    <div className="grid gap-5 pt-5">
      <p className="sr-only">Formation</p>

      {EDUCATION.map(education => (
        <div
          className="grid md:grid-cols-[150px_1fr] gap-5"
          key={education.institution}
        >
          <p className="text-sm text-muted-foreground">{education.period}</p>

          <p className="text-muted-foreground">
            {education.institution},{' '}
            <span className="text-primary">{education.course}</span>
          </p>
        </div>
      ))}
    </div>
  )
}
