import { EDUCATION } from '@/constants'

export default function Education() {
  return (
    <div className="space-y-4 relative">
      <p className="text-xl text-muted">Formation</p>

      {EDUCATION.map(education => (
        <div key={education.institution}>
          <p className="text-muted-foreground grid">
            {education.institution}
            <span className="text-primary">{education.course}</span>
          </p>

          <p className="text-sm text-muted-foreground">{education.period}</p>
        </div>
      ))}
    </div>
  )
}
