import { type Metadata } from 'next'
import Link from 'next/link'

import { Container } from '@/components/Container'

export const metadata: Metadata = {
  title: 'RS-232 Communication and Test Application with UPort1250',
  description: 'RS-232 communication interface application for UPort 1250 device with automated testing capabilities.',
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

export default function RS232CommunicationProject() {
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
              RS-232 Communication and Test Application with UPort1250
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
                This project is an interface application that enables RS-232 communication between the UPort 1250 device and different devices such as an oscilloscope. The application provides a comprehensive solution for serial communication testing and can also be used for connection verification through a feedback loop configuration using just the UPort device.
              </p>
              
              <p>
                The application includes a fully automated testing process that tests the authenticity of the device or connection, making it an essential tool for laboratory environments and industrial testing scenarios where reliable serial communication is critical.
              </p>

              <h3>Key Features</h3>
              <ul>
                <li><strong>RS-232 Communication:</strong> Full implementation of RS-232 protocol for reliable serial communication</li>
                <li><strong>UPort 1250 Integration:</strong> Optimized interface for UPort 1250 USB-to-serial converter</li>
                <li><strong>Device Compatibility:</strong> Support for various devices including oscilloscopes and other laboratory instruments</li>
                <li><strong>Automated Testing:</strong> Comprehensive testing suite for connection authenticity verification</li>
                <li><strong>Feedback Loop Testing:</strong> Self-testing capability using UPort device feedback configuration</li>
                <li><strong>Real-time Monitoring:</strong> Live communication monitoring and data visualization</li>
                <li><strong>Error Detection:</strong> Advanced error detection and reporting mechanisms</li>
              </ul>

              <h3>Technical Implementation</h3>
              <p>
                The application is built with robust error handling and provides detailed logging capabilities for troubleshooting communication issues. It supports various baud rates, data bits, stop bits, and parity configurations to ensure compatibility with a wide range of devices.
              </p>

              <h3>Testing Capabilities</h3>
              <ul>
                <li>Connection integrity verification</li>
                <li>Data transmission accuracy testing</li>
                <li>Protocol compliance validation</li>
                <li>Performance benchmarking</li>
                <li>Automated test report generation</li>
              </ul>

              <h3>Applications</h3>
              <ul>
                <li>Laboratory instrument communication</li>
                <li>Industrial automation testing</li>
                <li>Quality assurance in manufacturing</li>
                <li>Educational and research purposes</li>
                <li>Device certification and validation</li>
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
                    href="https://github.com/ozzy35410/RSR-232-communication-and-test-application-with-UPort1250"
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
