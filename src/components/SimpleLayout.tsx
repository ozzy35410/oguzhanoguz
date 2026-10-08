import { Container } from '@/components/Container'

export function SimpleLayout({
  title,
  intro,
  children,
}: {
  title: string
  intro: string
  children?: React.ReactNode
}) {
  return (
    <Container className="pt-12 sm:pt-16">
      <header className="max-w-4xl border-b-2 border-[#13283a] pb-8 dark:border-[#d5e5d3]">
        <p className="mb-4 font-mono text-xs font-bold uppercase tracking-[0.14em] text-[#c65336]">Portfolio / Project index</p>
        <h1 className="text-4xl font-black tracking-[-0.055em] text-[#13283a] sm:text-6xl dark:text-[#f4f1e8]">
          {title}
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-8 text-[#385064] dark:text-[#c2d0ca]">
          {intro}
        </p>
      </header>
      {children && <div className="mt-10 sm:mt-14">{children}</div>}
    </Container>
  )
}
