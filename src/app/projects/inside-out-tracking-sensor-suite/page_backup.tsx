import { type Metadata } from 'next'
import Link from 'next/link'

import { Container } from '@/components/Container'

export const metadata: Metadata = {
  title: 'Inside-Out Tracking Sensor Suite',
  description: 'Comprehensive graduation project developing an inside-out tracking sensor suite with sensor fusion and computer vision.',
}

function ArrowLeft(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
      <path
        d="m6.75 5.25 3.5-3.5L9 1 4 6l5 5 1.25-1.25-3.5-3.5h8.5v-1.5h-8.5Z"
        fill="currentColor"
      />
    </svg>
  )
}

export default function InsideOutTrackingProject() {
  return (
    <Container className="mt-16 lg:mt-32">
      <div className="xl:relative">
        <div className="mx-auto max-w-2xl">
          {/* Back Button */}
          <Link
            href="/projects"
            className="mb-8 inline-flex items-center text-sm font-medium text-zinc-500 hover:text-zinc-700 dark:text-zinc-400 dark:hover:text-zinc-200 transition-colors"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Projects
          </Link>

          {/* Project Header */}
          <header className="flex flex-col">
            <h1 className="mt-6 text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
              Inside-Out Tracking Sensor Suite
            </h1>
            
            <div className="mt-6 flex items-center gap-6">
              <div className="flex items-center gap-2">
                <span className="text-sm text-zinc-600 dark:text-zinc-400">Period:</span>
                <span className="text-sm font-medium text-zinc-800 dark:text-zinc-200">Oct 2024 - May 2025</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm text-zinc-600 dark:text-zinc-400">Type:</span>
                <span className="inline-block px-2 py-1 text-xs rounded-full bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200">
                  Graduation Project - In Progress
                </span>
              </div>
            </div>
          </header>

          {/* Project Content */}
          <div className="mt-16 prose prose-lg dark:prose-invert">
            <h2>Project Overview</h2>
            <p>
              This comprehensive graduation project involves developing an inside-out tracking sensor suite. 
              The project focuses on sensor fusion, computer vision, and real-time tracking algorithms for 
              spatial awareness applications. The system combines multiple sensors to provide accurate 
              positional tracking in dynamic environments.
            </p>

            <h2>Technologies & Methods</h2>
            <ul>
              <li><strong>Computer Vision:</strong> Advanced image processing algorithms</li>
              <li><strong>Sensor Fusion:</strong> IMU, cameras, and other sensor integration</li>
              <li><strong>Real-time Processing:</strong> Low-latency tracking algorithms</li>
              <li><strong>Machine Learning:</strong> Pattern recognition and prediction</li>
              <li><strong>Embedded Systems:</strong> Hardware-software integration</li>
            </ul>

            <h2>Project Objectives</h2>
            <ul>
              <li>Develop accurate inside-out tracking capabilities</li>
              <li>Implement robust sensor fusion algorithms</li>
              <li>Create real-time processing pipeline</li>
              <li>Ensure system reliability in various environments</li>
              <li>Optimize for computational efficiency</li>
            </ul>

            <h2>Current Progress</h2>
            <p>
              The project is currently in active development phase. Key milestones include sensor 
              selection and characterization, algorithm development, and initial prototype testing. 
              The system architecture has been designed and initial sensor fusion algorithms are 
              being implemented and tested.
            </p>

            <h2>Expected Outcomes</h2>
            <p>
              Upon completion, this project will deliver a fully functional inside-out tracking 
              system capable of accurate spatial positioning in real-time. The system will be 
              evaluated for accuracy, latency, and robustness across various operating conditions.
            </p>

            <h2>Project Resources</h2>
            <div className="not-prose">
              <div className="mt-6 flex flex-wrap gap-4">
                <a
                  href="#"
                  className="flex items-center rounded-md bg-zinc-100 px-3 py-2 text-sm font-medium text-zinc-800 hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-200 dark:hover:bg-zinc-700 transition-colors"
                >
                  📊 LinkedIn Poster
                </a>
                <a
                  href="#"
                  className="flex items-center rounded-md bg-zinc-100 px-3 py-2 text-sm font-medium text-zinc-800 hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-200 dark:hover:bg-zinc-700 transition-colors"
                >
                  🎥 YouTube Video
                </a>
                <a
                  href="#"
                  className="flex items-center rounded-md bg-zinc-100 px-3 py-2 text-sm font-medium text-zinc-800 hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-200 dark:hover:bg-zinc-700 transition-colors"
                >
                  📄 Project Proposal
                </a>
                <a
                  href="#"
                  className="flex items-center rounded-md bg-zinc-100 px-3 py-2 text-sm font-medium text-zinc-800 hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-200 dark:hover:bg-zinc-700 transition-colors"
                >
                  📈 Progress Reports
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}
