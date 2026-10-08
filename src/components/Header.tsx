'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import clsx from 'clsx'

import { Container } from '@/components/Container'

const navigation = [
  { href: '/about', label: 'About' },
  { href: '/projects', label: 'Projects' },
]

export function Header() {
  const pathname = usePathname()

  return (
    <header className="relative z-30 pt-5 sm:pt-7">
      <Container>
        <div className="flex items-center justify-between border-b border-[#163b3b]/15 pb-4 dark:border-white/15">
          <Link
            href="/"
            className="group flex items-baseline gap-2 font-semibold tracking-tight text-[#123232] dark:text-[#f4efe6]"
          >
            <span className="text-base">Oguzhan Oguz</span>
            <span className="hidden text-[0.62rem] font-medium uppercase tracking-[0.2em] text-[#bd5a3d] sm:inline">
              Engineer
            </span>
          </Link>
          <nav aria-label="Main navigation">
            <ul className="flex items-center gap-1 text-sm font-medium">
              {navigation.map((item) => {
                const active = pathname === item.href
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={clsx(
                        'rounded-full px-3 py-2 transition-colors',
                        active
                          ? 'bg-[#123232] text-[#f8f3e9] dark:bg-[#f4efe6] dark:text-[#123232]'
                          : 'text-[#355150] hover:bg-[#e5d8c7] hover:text-[#123232] dark:text-[#c8d8d1] dark:hover:bg-white/10 dark:hover:text-white',
                      )}
                    >
                      {item.label}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </nav>
        </div>
      </Container>
    </header>
  )
}
