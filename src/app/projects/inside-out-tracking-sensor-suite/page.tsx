import { type Metadata } from 'next'
import Link from 'next/link'

import { Container } from '@/components/Container'

export const metadata: Metadata = {
  title: 'Inside-Out Tracking Sensor Suite',
  description: 'The Inside-Out Tracking Sensor for Virtual Reality Applications project designed to overcome VR system limitations.',
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
        <div className="mx-auto max-w-4xl">
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
                <span className="inline-block px-2 py-1 text-xs rounded-full bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                  Graduation Project - Completed
                </span>
              </div>
            </div>
          </header>

          {/* Project Content */}
          <div className="mt-16 space-y-12">
            {/* Project Overview */}
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <h2>Project Overview</h2>
              <p>
                The Inside-Out Tracking Sensor for Virtual Reality Applications project is designed to overcome the limitations of VR systems using external sensors. The aim is to provide a portable, cost-effective and immersive experience by developing an inside-out system that can perform precise and real-time 6-degree-of-freedom head tracking.
              </p>
              
              <p>
                The design uses head-mounted IMU and camera sensors. 6 DoF data is obtained using the camera with the ORB-Slam algorithm. The data obtained is enhanced using the IMU and Kalman filter. Communication between the headset and an external computer is done via Wi-Fi and UDP to maintain low latency. The data obtained on the computer is rendered using python VTK. In this way, head movement can be tracked in real time from the computer.
              </p>
            </div>

            {/* Project Video */}
            <div>
              <h2 className="text-2xl font-bold text-zinc-800 dark:text-zinc-100 mb-6">
                Project Demonstration
              </h2>
              <div className="aspect-video rounded-lg overflow-hidden shadow-lg">
                <iframe
                  src="https://www.youtube.com/embed/4jYGMu5-sZk"
                  title="Inside-Out Tracking Sensor Suite Demo"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>
            </div>

            {/* Project Poster */}
            <div>
              <h2 className="text-2xl font-bold text-zinc-800 dark:text-zinc-100 mb-6">
                Project Poster
              </h2>
              <div className="bg-white dark:bg-zinc-800 rounded-lg shadow-lg border border-zinc-200 dark:border-zinc-700 overflow-hidden">
                <img
                  src="/project_poster-1.png"
                  alt="Inside-Out Tracking Sensor Suite Project Poster"
                  className="w-full h-auto"
                />
              </div>
            </div>

            {/* Final Report */}
            <div>
              <h2 className="text-2xl font-bold text-zinc-800 dark:text-zinc-100 mb-6">
                Final Report
              </h2>
              <div className="bg-white dark:bg-zinc-800 rounded-lg shadow-lg border border-zinc-200 dark:border-zinc-700 overflow-hidden">
                {/* Embedded PDF Viewer */}
                <div className="w-full" style={{ height: '600px' }}>
                  <iframe
                    src="/FinalReport.pdf"
                    className="w-full h-full border-0"
                    title="Inside-Out Tracking Sensor Suite Final Report"
                  />
                </div>
                
                {/* Footer with download option */}
                <div className="px-6 py-4 bg-zinc-50 dark:bg-zinc-800/50 border-t border-zinc-200 dark:border-zinc-700">
                  <div className="flex items-center justify-between">
                    <p className="text-sm text-zinc-600 dark:text-zinc-400">
                      Graduation Project - Final Report
                    </p>
                    <div className="flex gap-3">
                      <a 
                        href="/FinalReport.pdf" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-sm text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 transition-colors"
                      >
                        <svg className="mr-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                        Open in new tab
                      </a>
                      <a 
                        href="/FinalReport.pdf" 
                        download="Inside_Out_Tracking_Final_Report.pdf"
                        className="inline-flex items-center text-sm text-zinc-600 hover:text-zinc-700 dark:text-zinc-400 dark:hover:text-zinc-300 transition-colors"
                      >
                        <svg className="mr-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        Download
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}
