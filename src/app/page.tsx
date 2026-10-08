import Image from 'next/image'
import Link from 'next/link'

import { Container } from '@/components/Container'
import { GitHubIcon, LinkedInIcon } from '@/components/SocialIcons'
import portrait from '@/images/mezun.png'

const featuredProjects = [
  { number: '01', field: 'B.Sc. Graduation Project', title: 'Inside-Out Tracking Sensor Suite', text: 'A VR tracking prototype combining camera and IMU information for real-time 6-DoF head tracking.', href: '/projects/inside-out-tracking-sensor-suite' },
  { number: '02', field: 'Pattern Recognition', title: 'Activity Recognition with HMMs', text: 'A Gaussian Hidden Markov Model for classifying activity sequences from smartphone accelerometer data.', href: '/projects/activity-recognition-using-a-baum-welch-trained-hidden-markov-model' },
  { number: '03', field: 'Image and Video Processing', title: 'Video Coding with Motion Compensation', text: 'A rate-distortion comparison of intra coding, conditional replenishment, and motion compensation.', href: '/projects/video-coding-intra-conditional-replenishment-motion-compensation' },
]

function Arrow() {
  return <span aria-hidden="true" className="ml-2 inline-block transition-transform group-hover:translate-x-1">→</span>
}

export default function Home() {
  return (
    <Container className="pt-16 sm:pt-24">
      <section className="grid items-end gap-12 lg:grid-cols-[1.25fr_0.75fr] lg:gap-20">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#bd5a3d]">Stockholm, Sweden · KTH Royal Institute of Technology</p>
          <h1 className="mt-5 max-w-4xl text-5xl font-semibold leading-[0.98] tracking-[-0.055em] text-[#123232] sm:text-7xl dark:text-[#f4efe6]">Perception systems for imperfect signals.</h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-[#49615e] dark:text-[#c8d8d1]">I am Oguzhan Oguz, an M.Sc. student in Information and Network Engineering at KTH. I work across signal processing, computer vision, sensor fusion, and machine learning.</p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Link href="/projects" className="rounded-full bg-[#123232] px-5 py-3 text-sm font-semibold text-[#f7f1e7] transition hover:bg-[#bd5a3d] dark:bg-[#f4efe6] dark:text-[#123232] dark:hover:bg-[#e6a17d]">Explore projects <Arrow /></Link>
            <a href="/CV.pdf" target="_blank" rel="noopener noreferrer" className="rounded-full border border-[#163b3b]/25 px-5 py-3 text-sm font-semibold text-[#163b3b] transition hover:border-[#bd5a3d] hover:text-[#bd5a3d] dark:border-white/30 dark:text-[#f4efe6]">View CV</a>
          </div>
          <div className="mt-10 flex gap-5">
            <a href="https://github.com/ozzy35410" aria-label="GitHub" className="text-[#355150] transition hover:text-[#bd5a3d] dark:text-[#c8d8d1]"><GitHubIcon className="h-5 w-5 fill-current" /></a>
            <a href="https://www.linkedin.com/in/oguzhan-oguz-" aria-label="LinkedIn" className="text-[#355150] transition hover:text-[#bd5a3d] dark:text-[#c8d8d1]"><LinkedInIcon className="h-5 w-5 fill-current" /></a>
            <a href="mailto:oguzhano@kth.se" className="text-sm font-medium text-[#355150] underline decoration-[#bd5a3d]/50 underline-offset-4 transition hover:text-[#bd5a3d] dark:text-[#c8d8d1]">oguzhano@kth.se</a>
          </div>
        </div>
        <div className="relative mx-auto w-full max-w-sm lg:mx-0 lg:justify-self-end">
          <div className="absolute -inset-4 -rotate-3 rounded-[2rem] border border-[#bd5a3d]/35" />
          <div className="relative overflow-hidden rounded-[1.7rem] bg-[#d9c8ad]"><Image src={portrait} alt="Oguzhan Oguz" priority className="aspect-[4/5] w-full object-cover" /></div>
          <p className="mt-4 text-xs font-medium uppercase tracking-[0.17em] text-[#58706d] dark:text-[#b7c7c1]">Multimedia Processing &amp; Analysis</p>
        </div>
      </section>

      <section className="mt-24 border-y border-[#163b3b]/15 py-9 dark:border-white/15 sm:mt-32">
        <div className="grid gap-8 md:grid-cols-3 md:gap-12">
          <Info label="Current focus" title="LiDAR-Visual-Inertial SLAM" text="Ongoing KTH project on robustness in geometrically degenerate environments." />
          <Info label="Education" title="M.Sc. at KTH" text="Information and Network Engineering, 2025-2027." />
          <Info label="Background" title="Electrical Engineering" text="B.Sc. from METU with hands-on work in embedded systems and signal processing." />
        </div>
      </section>

      <section className="mt-24 sm:mt-32">
        <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div><p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#bd5a3d]">Selected work</p><h2 className="mt-3 text-4xl font-semibold tracking-[-0.04em] text-[#123232] dark:text-[#f4efe6]">Projects with a point of view.</h2></div>
          <Link href="/projects" className="group text-sm font-semibold text-[#163b3b] underline decoration-[#bd5a3d] decoration-2 underline-offset-4 hover:text-[#bd5a3d] dark:text-[#f4efe6]">All projects <Arrow /></Link>
        </div>
        <div className="mt-10 grid divide-y divide-[#163b3b]/15 border-y border-[#163b3b]/15 dark:divide-white/15 dark:border-white/15">
          {featuredProjects.map((project) => (
            <Link href={project.href} key={project.href} className="group grid gap-5 py-7 transition sm:grid-cols-[4rem_1fr_auto] sm:items-start sm:gap-8 hover:px-3">
              <span className="font-mono text-sm text-[#bd5a3d]">{project.number}</span>
              <div><p className="text-xs font-semibold uppercase tracking-[0.15em] text-[#58706d] dark:text-[#b7c7c1]">{project.field}</p><h3 className="mt-2 text-2xl font-semibold tracking-[-0.03em] text-[#123232] dark:text-[#f4efe6]">{project.title}</h3><p className="mt-2 max-w-xl text-sm leading-6 text-[#58706d] dark:text-[#b7c7c1]">{project.text}</p></div>
              <span className="text-xl text-[#bd5a3d] transition-transform group-hover:translate-x-1">→</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="mt-24 grid gap-10 rounded-[2rem] bg-[#123232] p-8 text-[#f7f1e7] sm:mt-32 sm:grid-cols-[1fr_auto] sm:items-end sm:p-12">
        <div><p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#e6a17d]">Open to conversations</p><h2 className="mt-4 max-w-2xl text-3xl font-semibold tracking-[-0.035em] sm:text-4xl">Interested in work at the intersection of sensing, learning, and real-world systems.</h2></div>
        <a href="mailto:oguzhano@kth.se" className="rounded-full bg-[#e6a17d] px-5 py-3 text-center text-sm font-semibold text-[#123232] transition hover:bg-[#f7f1e7]">Get in touch <Arrow /></a>
      </section>
    </Container>
  )
}

function Info({ label, title, text }: { label: string; title: string; text: string }) {
  return <div><p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#bd5a3d]">{label}</p><p className="mt-3 text-xl font-semibold leading-7 text-[#123232] dark:text-[#f4efe6]">{title}</p><p className="mt-2 text-sm leading-6 text-[#58706d] dark:text-[#b7c7c1]">{text}</p></div>
}
