import Education from '@/components/education'
import Experiences from '@/components/experiences'
import Header from '@/components/header'
import Socials from '@/components/socials'

export default function Home() {
  return (
    <>
      <Header />

      <div className="mt-28 grid gap-10">
        <Experiences />
        <Education />
        <Socials />
      </div>
    </>
  )
}
