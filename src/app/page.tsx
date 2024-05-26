import Education from '@/components/education'
import Experiences from '@/components/experiences'
import Header from '@/components/header'
import Socials from '@/components/socials'

export default function Home() {
  return (
    <div className="flex flex-col gap-5 justify-between h-full">
      <Header />

      <div className="flex flex-col gap-10 divide-y divide-muted divide-dotted">
        <Experiences />
        <Education />
        <Socials />
      </div>
    </div>
  )
}
