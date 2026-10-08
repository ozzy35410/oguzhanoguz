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
    <Container className="pt-16 sm:pt-24">
      <header className="max-w-3xl border-b border-[#163b3b]/15 pb-10 dark:border-white/15">
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#bd5a3d]">Portfolio</p>
        <h1 className="text-4xl font-semibold tracking-[-0.045em] text-[#123232] sm:text-6xl dark:text-[#f4efe6]">
          {title}
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-[#58706d] dark:text-[#b7c7c1]">
          {intro}
        </p>
      </header>
      {children && <div className="mt-12 sm:mt-16">{children}</div>}
    </Container>
  )
}
