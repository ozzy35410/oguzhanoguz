import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

import { Container } from '@/components/Container'

export const metadata: Metadata = {
  title: 'Oscilloscope & Waveform Generator Control Interface',
  description: 'Comprehensive control interface and test application for oscilloscopes and waveform generators using C#.',
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

export default function OscilloscopeProject() {
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
              Oscilloscope & Waveform Generator Control Interface and Test Application
            </h1>
            
            <div className="mt-6 flex items-center gap-6">
              <div className="flex items-center gap-2">
                <span className="text-sm text-zinc-600 dark:text-zinc-400">Period:</span>
                <span className="text-sm font-medium text-zinc-800 dark:text-zinc-200">Jan 2025</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm text-zinc-600 dark:text-zinc-400">Type:</span>
                <span className="inline-block px-2 py-1 text-xs rounded-full bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                  Personal Project
                </span>
              </div>
            </div>
          </header>

          {/* Project Content */}
          <div className="mt-16 prose prose-lg dark:prose-invert">
            <h2>Overview</h2>
            <p>
              This project involved creating a comprehensive control interface and test application for oscilloscopes and waveform generators using C#. 
              The application provides instrument control, data acquisition, automated testing capabilities, and a user-friendly interface for 
              laboratory and professional use.
            </p>

            <h2>Technologies Used</h2>
            <ul>
              <li><strong>Programming Language:</strong> C#</li>
              <li><strong>Framework:</strong> .NET Framework / .NET Core</li>
              <li><strong>UI Framework:</strong> WPF or Windows Forms</li>
              <li><strong>Instrument Communication:</strong> VISA, SCPI commands</li>
              <li><strong>Data Visualization:</strong> Custom charting libraries</li>
            </ul>

            <h2>Key Features</h2>
            <ul>
              <li><strong>Instrument Control:</strong> Complete control over oscilloscope and waveform generator settings</li>
              <li><strong>Data Acquisition:</strong> Real-time data capture and analysis</li>
              <li><strong>Automated Testing:</strong> Scripted test sequences and measurement automation</li>
              <li><strong>User Interface:</strong> Intuitive and professional interface design</li>
              <li><strong>Report Generation:</strong> Automated test reports and data export</li>
            </ul>

            <h2>Technical Implementation</h2>
            <p>
              The application was developed using modern C# practices, implementing proper separation of concerns with 
              a clean architecture. The instrument communication layer uses industry-standard VISA drivers and SCPI 
              commands to ensure compatibility with various instrument manufacturers.
            </p>

            <h2>Achievements</h2>
            <ul>
              <li>Successfully interfaced with multiple instrument types</li>
              <li>Implemented real-time data visualization</li>
              <li>Created automated test sequences for quality assurance</li>
              <li>Developed a user-friendly interface for non-technical users</li>
            </ul>

            <h2>Project Links & Resources</h2>
            <div className="not-prose">
              <div className="mt-6 flex flex-wrap gap-4">
                <a
                  href="#"
                  className="flex items-center rounded-md bg-zinc-100 px-3 py-2 text-sm font-medium text-zinc-800 hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-200 dark:hover:bg-zinc-700 transition-colors"
                >
                  📁 GitHub Repository
                </a>
                <a
                  href="#"
                  className="flex items-center rounded-md bg-zinc-100 px-3 py-2 text-sm font-medium text-zinc-800 hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-200 dark:hover:bg-zinc-700 transition-colors"
                >
                  📄 Project Report
                </a>
                <a
                  href="#"
                  className="flex items-center rounded-md bg-zinc-100 px-3 py-2 text-sm font-medium text-zinc-800 hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-200 dark:hover:bg-zinc-700 transition-colors"
                >
                  🎥 Demo Video
                </a>
                <a
                  href="#"
                  className="flex items-center rounded-md bg-zinc-100 px-3 py-2 text-sm font-medium text-zinc-800 hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-200 dark:hover:bg-zinc-700 transition-colors"
                >
                  📊 Presentation
                </a>
              </div>
            </div>

            <h2>Future Enhancements</h2>
            <p>
              Future versions of this application could include cloud connectivity for remote instrument control, 
              machine learning-based signal analysis, and integration with laboratory information management systems (LIMS).
            </p>
          </div>
        </div>
      </div>
    </Container>
  )
}
