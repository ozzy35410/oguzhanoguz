import Image from 'next/image'
import Link from 'next/link'

import { Container } from '@/components/Container'
import { GitHubIcon, LinkedInIcon } from '@/components/SocialIcons'
import portrait from '@/images/mezun.png'

const projectRows = [
  { id: 'P-01', area: 'SENSOR FUSION', title: 'Inside-Out Tracking Sensor Suite', result: 'Camera + IMU VR pose tracking', href: '/projects/inside-out-tracking-sensor-suite' },
  { id: 'P-02', area: 'SEQUENTIAL ML', title: 'Activity Recognition with HMMs', result: 'Accelerometer time-series classification', href: '/projects/activity-recognition-using-a-baum-welch-trained-hidden-markov-model' },
  { id: 'P-03', area: 'VIDEO CODING', title: 'Motion-Compensated Video Coding', result: 'Rate-distortion evaluation', href: '/projects/video-coding-intra-conditional-replenishment-motion-compensation' },
]

const skills = ['State estimation', 'Adaptive filtering', 'Computer vision', 'Signal analysis', 'Machine learning', 'Embedded systems']

export default function Home() {
  return (
    <Container className="py-10 sm:py-14">
      <section className="border-2 border-[#13283a] bg-[#f4f1e8] dark:border-[#d5e5d3] dark:bg-[#13283a]">
        <div className="grid lg:grid-cols-[1.45fr_0.55fr]">
          <div className="p-6 sm:p-10 lg:p-14">
            <p className="font-mono text-xs font-bold uppercase tracking-[0.14em] text-[#c65336]">Available for research and engineering conversations</p>
            <h1 className="mt-8 max-w-4xl text-5xl font-black leading-[0.9] tracking-[-0.065em] text-[#13283a] sm:text-7xl lg:text-8xl dark:text-[#f4f1e8]">Signals.<br />Systems.<br /><span className="text-[#ff6b4a]">Decisions.</span></h1>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-[#385064] dark:text-[#c2d0ca]">I am Oguzhan Oguz, an M.Sc. student at KTH working on signal processing, visual perception, and robust estimation for real systems.</p>
            <div className="mt-9 flex flex-wrap gap-3 font-mono text-xs font-bold uppercase tracking-[0.1em]">
              <Link href="/projects" className="bg-[#13283a] px-5 py-3 text-[#f4f1e8] transition hover:bg-[#ff6b4a] dark:bg-[#d5e5d3] dark:text-[#13283a]">Browse project index →</Link>
              <a href="/CV.pdf" target="_blank" rel="noopener noreferrer" className="border-2 border-[#13283a] px-5 py-3 text-[#13283a] transition hover:bg-[#ff6b4a] dark:border-[#d5e5d3] dark:text-[#d5e5d3]">Open CV [PDF]</a>
            </div>
          </div>
          <div className="relative min-h-80 border-t-2 border-[#13283a] bg-[#d5e5d3] p-6 dark:border-[#d5e5d3] dark:bg-[#f4f1e8] lg:border-t-0 lg:border-l-2">
            <p className="font-mono text-[0.64rem] font-bold uppercase tracking-[0.14em] text-[#385064]">Field note 001</p>
            <Image src={portrait} alt="Oguzhan Oguz" priority className="absolute bottom-0 right-0 h-[84%] w-auto object-contain object-bottom" />
            <div className="absolute bottom-6 left-6 max-w-[13rem] border-l-2 border-[#ff6b4a] pl-3 font-mono text-xs leading-5 text-[#13283a]">Multimedia Processing &amp; Analysis<br />KTH Royal Institute of Technology</div>
          </div>
        </div>
        <div className="grid border-t-2 border-[#13283a] bg-[#13283a] text-[#f4f1e8] sm:grid-cols-3 dark:border-[#d5e5d3]">
          <Stat value="2025-27" label="M.Sc. at KTH" />
          <Stat value="2026" label="Ongoing SLAM research" />
          <Stat value="3.57/4.00" label="B.Sc. GPA at METU" />
        </div>
      </section>

      <section className="mt-14 grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <div>
          <p className="font-mono text-xs font-bold uppercase tracking-[0.14em] text-[#c65336]">Current line of work</p>
          <h2 className="mt-4 text-3xl font-black tracking-[-0.045em] text-[#13283a] dark:text-[#f4f1e8]">Robust perception when measurements get difficult.</h2>
          <p className="mt-5 leading-7 text-[#385064] dark:text-[#c2d0ca]">My current KTH project investigates LiDAR-Visual-Inertial SLAM under weak geometry, visual feature starvation, and challenging motion. Earlier work spans audio enhancement, video processing, and sequential classification.</p>
          <div className="mt-6 flex gap-4">
            <a href="https://github.com/ozzy35410" aria-label="GitHub" className="text-[#13283a] hover:text-[#ff6b4a] dark:text-[#d5e5d3]"><GitHubIcon className="h-5 w-5 fill-current" /></a>
            <a href="https://www.linkedin.com/in/oguzhan-oguz-" aria-label="LinkedIn" className="text-[#13283a] hover:text-[#ff6b4a] dark:text-[#d5e5d3]"><LinkedInIcon className="h-5 w-5 fill-current" /></a>
            <a href="mailto:oguzhano@kth.se" className="font-mono text-xs font-bold uppercase tracking-[0.08em] text-[#13283a] underline decoration-[#ff6b4a] decoration-2 underline-offset-4 dark:text-[#d5e5d3]">Email me</a>
          </div>
        </div>
        <div className="border-t-2 border-[#13283a] dark:border-[#d5e5d3]">
          <p className="py-3 font-mono text-[0.64rem] font-bold uppercase tracking-[0.14em] text-[#617180]">Methods and tools</p>
          <div className="grid grid-cols-2 border-l-2 border-t-2 border-[#13283a] sm:grid-cols-3 dark:border-[#d5e5d3]">
            {skills.map((skill, index) => <div key={skill} className="border-b-2 border-r-2 border-[#13283a] p-4 font-mono text-xs font-bold uppercase tracking-[0.06em] text-[#13283a] dark:border-[#d5e5d3] dark:text-[#d5e5d3]"><span className="mr-2 text-[#ff6b4a]">0{index + 1}</span>{skill}</div>)}
          </div>
        </div>
      </section>

      <section className="mt-20 sm:mt-28">
        <div className="flex items-end justify-between gap-6 border-b-2 border-[#13283a] pb-4 dark:border-[#d5e5d3]">
          <div><p className="font-mono text-xs font-bold uppercase tracking-[0.14em] text-[#c65336]">Selected project records</p><h2 className="mt-3 text-4xl font-black tracking-[-0.05em] text-[#13283a] dark:text-[#f4f1e8]">Work worth opening.</h2></div>
          <Link href="/projects" className="shrink-0 font-mono text-xs font-bold uppercase tracking-[0.08em] text-[#13283a] hover:text-[#ff6b4a] dark:text-[#d5e5d3]">Full index →</Link>
        </div>
        <div className="border-l-2 border-[#13283a] dark:border-[#d5e5d3]">
          {projectRows.map((project) => (
            <Link key={project.id} href={project.href} className="group grid gap-3 border-b-2 border-r-2 border-[#13283a] p-5 transition-colors hover:bg-[#ff6b4a] sm:grid-cols-[5rem_1fr_auto] sm:items-center sm:gap-6 dark:border-[#d5e5d3] dark:hover:bg-[#ff6b4a]">
              <span className="font-mono text-xs font-bold text-[#c65336] group-hover:text-[#13283a]">{project.id}</span>
              <div><p className="font-mono text-[0.62rem] font-bold uppercase tracking-[0.14em] text-[#617180] group-hover:text-[#13283a]">{project.area}</p><h3 className="mt-1 text-xl font-bold tracking-[-0.025em] text-[#13283a]">{project.title}</h3></div>
              <span className="font-mono text-xs uppercase tracking-[0.07em] text-[#385064] group-hover:text-[#13283a]">{project.result} →</span>
            </Link>
          ))}
        </div>
      </section>
    </Container>
  )
}

function Stat({ value, label }: { value: string; label: string }) {
  return <div className="border-b-2 border-[#f4f1e8]/25 p-5 last:border-b-0 sm:border-r-2 sm:border-b-0 sm:last:border-r-0"><p className="font-mono text-xl font-bold text-[#ff8d72]">{value}</p><p className="mt-1 font-mono text-[0.62rem] uppercase tracking-[0.12em] text-[#c2d0ca]">{label}</p></div>
}
