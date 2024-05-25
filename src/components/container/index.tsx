import { ME } from '@/constants'

interface ContainerProps {
  children: React.ReactNode
}

export default function Container({ children }: ContainerProps) {
  return (
    <main className="max-w-[700px] m-auto p-4 lg:p-10 lg:py-20 md:h-screen flex flex-col justify-between relative">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl absolute z-0 opacity-5 top-4 left-4 select-none break-all hyphens-auto">
        {ME.binary}
      </h1>

      {children}
    </main>
  )
}
