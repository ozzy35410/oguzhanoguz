import Link from 'next/link'

import { Container } from '@/components/Container'

export function Footer() {
  return (
    <footer className="mt-28 pb-8 sm:mt-36">
      <Container>
        <div className="flex flex-col gap-4 border-t border-[#163b3b]/15 pt-6 text-sm text-[#58706d] dark:border-white/15 dark:text-[#b7c7c1] sm:flex-row sm:items-center sm:justify-between">
          <p>Stockholm, Sweden</p>
          <div className="flex gap-5 font-medium text-[#163b3b] dark:text-[#f4efe6]">
            <Link href="/about" className="hover:text-[#bd5a3d]">About</Link>
            <Link href="/projects" className="hover:text-[#bd5a3d]">Projects</Link>
            <a href="mailto:oguzhano@kth.se" className="hover:text-[#bd5a3d]">Email</a>
          </div>
        </div>
      </Container>
    </footer>
  )
}
