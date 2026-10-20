import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  XIcon,
} from '@/components/SocialIcons'
import secondPortraitImage from '@/images/mezun.png'

function SocialLink({
  className,
  href,
  children,
  icon: Icon,
}: {
  className?: string
  href: string
  icon: React.ComponentType<{ className?: string }>
  children: React.ReactNode
}) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export const metadata: Metadata = {
  title: 'About',
  description:
  'I\'m Oguzhan Oguz. I live in Stockholm, where I study multimedia processing and analysis.',
}

export default function About() {
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:pl-20">
          <div className="max-w-xs px-2.5 lg:max-w-none">
            <Image
              src={secondPortraitImage}
              alt="Oguzhan Oguz - Professional"
              sizes="(min-width: 1024px) 32rem, 20rem"
              className="aspect-square -rotate-2 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
            />
          </div>
        </div>
        <div className="lg:order-first lg:row-span-2">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            Hi, I&apos;m Oguzhan. Welcome to my corner of the internet.
          </h1>
          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <p>
              I&apos;m currently pursuing a master&apos;s degree in Information and Network Engineering at KTH Royal Institute of Technology, with a background in Electrical and Electronics Engineering.
            </p>
            <p>
              My interests lie in <strong>signal processing</strong>, <strong>computer vision</strong>, <strong>machine learning</strong>, <strong>robotics</strong>, and <strong>sensor fusion</strong>, particularly in how these fields come together to solve real-world problems.
            </p>
            <p>
              I enjoy exploring new ideas, working on challenging technical problems, and turning theoretical concepts into practical solutions. Through my studies and projects, I aim to keep learning, building, and contributing to meaningful technological developments.
            </p>
            <p>Feel free to explore my projects and get in touch!</p>
            <p>
              <strong>Contact:</strong> <a href="mailto:oguzhano@kth.se" className="text-teal-500 hover:text-teal-600 dark:text-teal-400 dark:hover:text-teal-300">oguzhano@kth.se</a>
            </p>
          </div>
        </div>
        <div className="lg:pl-20">
          <ul role="list">
            <SocialLink href="https://github.com/ozzy35410" icon={GitHubIcon}>
              GitHub
            </SocialLink>
            <SocialLink
              href="https://www.linkedin.com/in/oguzhan-oguz-"
              icon={LinkedInIcon}
              className="mt-4"
            >
              LinkedIn
            </SocialLink>
            <SocialLink
              href="https://www.instagram.com/ogzhn.ogzz/"
              icon={InstagramIcon}
              className="mt-4"
            >
              Instagram
            </SocialLink>
          </ul>
        </div>
      </div>
    </Container>
  )
}
