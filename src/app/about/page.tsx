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
    <Container className="pt-16 sm:pt-24">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:pl-20">
          <div className="max-w-xs px-2.5 lg:max-w-none">
            <Image
              src={secondPortraitImage}
              alt="Oguzhan Oguz - Professional"
              sizes="(min-width: 1024px) 32rem, 20rem"
              className="aspect-square rounded-[1.7rem] bg-[#d9c8ad] object-cover"
            />
          </div>
        </div>
        <div className="lg:order-first lg:row-span-2">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#bd5a3d]">About</p>
          <h1 className="mt-4 text-4xl font-semibold tracking-[-0.045em] text-[#123232] sm:text-6xl dark:text-[#f4efe6]">
            I work on the signal-processing side of perception systems.
          </h1>
          <div className="mt-7 space-y-6 text-base leading-8 text-[#58706d] dark:text-[#b7c7c1]">
            <p>
              I am an M.Sc. student in Information and Network Engineering at KTH Royal Institute of Technology, following the Multimedia Processing and Analysis track. My work spans signal, image, video, speech, and audio processing, as well as pattern recognition and machine learning.
            </p>
            <p>
              I enjoy turning signal-processing concepts into working systems, from sensor-based tracking and robust state estimation to audio enhancement and visual coding.
            </p>
            <p>
              For collaborations or engineering roles, contact me at <a href="mailto:oguzhano@kth.se" className="font-medium text-[#bd5a3d] underline underline-offset-4">oguzhano@kth.se</a>.
            </p>
          </div>
        </div>
        <div className="lg:pl-20">
          <ul role="list" className="border-t border-[#163b3b]/15 pt-6 dark:border-white/15">
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
