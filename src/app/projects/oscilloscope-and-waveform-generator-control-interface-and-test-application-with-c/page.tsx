import { type Metadata } from 'next'
import Link from 'next/link'

import { Container } from '@/components/Container'

export const metadata: Metadata = {
  title: 'Oscilloscope and Waveform Generator Control Interface and Test Application with C#',
  description: 'Comprehensive C# interface for controlling Keysight MSOX3104T Mixed Signal Oscilloscope and 33500B Waveform Generator.',
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

export default function OscilloscopeControlProject() {
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
              Oscilloscope and Waveform Generator Control Interface and Test Application with C#
            </h1>
            
            <div className="mt-6 flex items-center gap-6">
              <div className="flex items-center gap-2">
                <span className="text-sm text-zinc-600 dark:text-zinc-400">Period:</span>
                <span className="text-sm font-medium text-zinc-800 dark:text-zinc-200">Winter 2025</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm text-zinc-600 dark:text-zinc-400">Company:</span>
                <span className="text-sm font-medium text-zinc-800 dark:text-zinc-200">Deico - Test Engineering Internship</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm text-zinc-600 dark:text-zinc-400">Status:</span>
                <span className="inline-block px-2 py-1 text-xs rounded-full bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                  Completed
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
                This project provides a comprehensive C# interface to control the Keysight MSOX3104T Mixed Signal Oscilloscope and KEYSIGHT 33500B Waveform Generator. It allows users to control the oscilloscope&apos;s settings and generate signals through a computer interface, enabling professional laboratory automation and testing capabilities.
              </p>
              
              <p>
                The application features a dedicated test tab that automatically tests the accuracy of parameters produced by the waveform generator using the oscilloscope measurement functions. This provides a completely automated testing solution for laboratory and industrial applications.
              </p>

              <h3>Key Features</h3>
              
              <h4>Keysight MSOX3104T Oscilloscope Control Interface</h4>
              <ul>
                <li>Horizontal axis control (timebase)</li>
                <li>Vertical axis control (voltage scales)</li>
                <li>Channel opening and closing</li>
                <li>Comprehensive measurement functions: Vpp, Vrms, frequency, period, mean (full screen cycle-to-cycle), amplitude, phase, duty cycle, pulse width, rise time, fall time, overshoot, preshoot, slew rate</li>
              </ul>

              <h4>Keysight 33500B Waveform Generator Control Interface</h4>
              <ul>
                <li>Output On/Off control</li>
                <li>Signal generation: sinus, square, triangle, ramp, pulse, noise, DC signals</li>
                <li>Parameter adjustment: frequency, amplitude, offset, phase, duty cycle, symmetry, pulse width, leading edge, trailing edge, bandwidth</li>
              </ul>

              <h4>Automated Test Features</h4>
              <ul>
                <li>Automatic testing of frequency, amplitude, duty cycle, and pulse width parameters</li>
                <li>Support for both CH1 and CH2 testing</li>
                <li>Comprehensive results reporting and total test time tracking</li>
              </ul>

              <h3>Hardware Requirements</h3>
              <ul>
                <li>Keysight MSOX3104T Mixed Signal Oscilloscope</li>
                <li>USB connection between PC and oscilloscope</li>
                <li>Keysight 33500B Waveform Generator</li>
                <li>LAN connection between PC and waveform generator</li>
              </ul>

              <h3>Software Requirements</h3>
              <ul>
                <li>Windows 10 or later</li>
                <li>.NET Framework 4.8</li>
                <li>Keysight IO Libraries Suite (includes VISA)</li>
                <li>Keysight Connection Expert</li>
              </ul>
            </div>

            {/* GitHub Repository */}
            <div>
              <h2 className="text-2xl font-bold text-zinc-800 dark:text-zinc-100 mb-6">
                Source Code
              </h2>
              <div className="bg-white dark:bg-zinc-800 rounded-lg shadow-lg border border-zinc-200 dark:border-zinc-700 p-6">
                <div className="flex items-center gap-4">
                  <svg className="h-8 w-8 text-zinc-800 dark:text-zinc-200" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-zinc-800 dark:text-zinc-100">GitHub Repository</h3>
                    <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-1">
                      Complete source code, documentation, and setup instructions
                    </p>
                  </div>
                  <a
                    href="https://github.com/ozzy35410/Oscilloscope-and-Waveform-Generator-Control-Interface-and-Test-Application-with-Csharp"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-md transition-colors"
                  >
                    <svg className="mr-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    View on GitHub
                  </a>
                </div>
              </div>
            </div>

            {/* Internship Report */}
            <div>
              <h2 className="text-2xl font-bold text-zinc-800 dark:text-zinc-100 mb-6">
                Internship Report
              </h2>
              <div className="bg-white dark:bg-zinc-800 rounded-lg shadow-lg border border-zinc-200 dark:border-zinc-700 p-6">
                <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-4">
                  Complete internship report detailing the test engineering experience at Deico, including project methodologies, technical implementations, and learning outcomes from the Winter 2025 internship period.
                </p>
                
                <div className="flex gap-4 mb-6">
                  <a
                    href="/deico.pdf"
                    download="Deico_Internship_Report.pdf"
                    className="inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-md transition-colors"
                  >
                    <svg className="mr-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    Download Report
                  </a>
                  <a
                    href="/deico.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 bg-gray-600 hover:bg-gray-700 text-white text-sm font-medium rounded-md transition-colors"
                  >
                    <svg className="mr-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    Open in New Tab
                  </a>
                </div>

                <div className="border border-zinc-200 dark:border-zinc-700 rounded-lg overflow-hidden">
                  <iframe
                    src="/deico.pdf#view=FitH"
                    width="100%"
                    height="800"
                    title="Deico Internship Report"
                    className="w-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}
