import Link from 'next/link'

import { Container } from '@/components/Container'

export function Footer() {
  return (
    <footer className="mt-24 border-t-2 border-[#13283a] bg-[#13283a] py-8 text-[#f4f1e8] dark:border-[#d5e5d3] sm:mt-32">
      <Container><div className="flex flex-col gap-5 text-sm sm:flex-row sm:items-center sm:justify-between"><p className="font-mono text-xs uppercase tracking-[0.12em] text-[#c2d0ca]">Stockholm, Sweden · 2026</p><div className="flex gap-5 font-mono text-xs uppercase tracking-[0.1em]"><Link href="/about" className="hover:text-[#ff8d72]">Profile</Link><Link href="/projects" className="hover:text-[#ff8d72]">Projects</Link><a href="mailto:oguzhano@kth.se" className="hover:text-[#ff8d72]">Email</a></div></div></Container>
    </footer>
  )
}
