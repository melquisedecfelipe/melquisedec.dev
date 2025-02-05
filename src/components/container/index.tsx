interface ContainerProps {
  children: React.ReactNode
}

export default function Container({ children }: ContainerProps) {
  return (
    <main className="max-w-[700px] m-auto p-5 md:p-10 lg:p-20 h-screen">
      {children}
    </main>
  )
}
