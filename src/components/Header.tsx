'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import clsx from 'clsx'

import { Container } from '@/components/Container'

const navigation = [
  { href: '/about', label: 'Profile' },
  { href: '/projects', label: 'Project Index' },
]

export function Header() {
  const pathname = usePathname()

  return (
    <header className="relative z-30 border-b-2 border-[#13283a] bg-[#f4f1e8] dark:border-[#d5e5d3] dark:bg-[#13283a]">
      <Container>
        <div className="flex min-h-16 items-center justify-between gap-4 py-3">
          <Link href="/" className="flex items-center gap-3 text-[#13283a] dark:text-[#f4f1e8]">
            <span className="grid h-8 w-8 place-items-center bg-[#ff6b4a] font-mono text-xs font-bold text-[#13283a]">OO</span>
            <span><span className="block text-sm font-bold tracking-tight">Oguzhan Oguz</span><span className="hidden font-mono text-[0.62rem] uppercase tracking-[0.16em] text-[#617180] sm:block">Engineering portfolio</span></span>
          </Link>
          <nav aria-label="Main navigation">
            <ul className="flex items-center gap-1 font-mono text-[0.68rem] uppercase tracking-[0.08em] sm:gap-2">
              {navigation.map((item) => (
                <li key={item.href}><Link href={item.href} className={clsx('block border px-2.5 py-2 transition-colors sm:px-3', pathname === item.href ? 'border-[#13283a] bg-[#13283a] text-[#f4f1e8] dark:border-[#d5e5d3] dark:bg-[#d5e5d3] dark:text-[#13283a]' : 'border-transparent text-[#385064] hover:border-[#13283a] hover:text-[#13283a] dark:text-[#c2d0ca] dark:hover:border-[#d5e5d3] dark:hover:text-[#f4f1e8]')}>{item.label}</Link></li>
              ))}
            </ul>
          </nav>
        </div>
      </Container>
    </header>
  )
}
