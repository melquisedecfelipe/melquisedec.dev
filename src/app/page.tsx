import Link from '@/components/link'
import ThemeToggle from '@/components/theme-toggle'

import {
  CURRENT_COMPANY,
  EDUCATION,
  EXPERIENCES,
  ME,
  SOCIALS
} from '@/constants'

export default function Home() {
  return (
    <main className="max-w-[600px] m-auto p-4 lg:p-10 lg:py-20 min-h-screen flex flex-col justify-between">
      <div className="relative w-full">
        <div className="flex flex-col md:flex-row md:gap-2 md:items-baseline">
          <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
            {ME.title}
          </h3>

          <p className="text-sm text-muted-foreground">{ME.description}</p>

          <ThemeToggle />
        </div>

        <p className="leading-7 flex gap-1 items-center">
          {CURRENT_COMPANY.role} {CURRENT_COMPANY.name}
        </p>

        <div className="flex gap-2 mt-2 text-muted-foreground">
          {SOCIALS.map(social => (
            <Link key={social.name} href={social.url}>
              {social.name}
            </Link>
          ))}
        </div>
      </div>

      <div>
        <div className="space-y-4 mt-10">
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

        <div className="space-y-4 mt-10">
          {EDUCATION.map(education => (
            <div key={education.institution}>
              <p className="text-muted-foreground grid gap-1">
                {education.institution}
                <span className="text-primary">{education.course}</span>
              </p>
              <p className="text-sm text-muted-foreground">
                {education.period}
              </p>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
