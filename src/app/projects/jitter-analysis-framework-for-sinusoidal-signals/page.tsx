import { type Metadata } from 'next'
import Link from 'next/link'

import { Container } from '@/components/Container'
import { DocumentViewer } from '@/components/DocumentViewer'

export const metadata: Metadata = {
  title: 'Jitter Analysis Framework for Sinusoidal Signals',
  description: 'MATLAB framework for calculating and comparing jitter measures in sinusoidal signals.',
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

export default function JitterAnalysisProject() {
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
              Jitter Analysis Framework for Sinusoidal Signals
            </h1>
            
            <div className="mt-6 flex items-center gap-6">
              <div className="flex items-center gap-2">
                <span className="text-sm text-zinc-600 dark:text-zinc-400">Period:</span>
                <span className="text-sm font-medium text-zinc-800 dark:text-zinc-200">Summer 2024</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm text-zinc-600 dark:text-zinc-400">Institution:</span>
                <span className="text-sm font-medium text-zinc-800 dark:text-zinc-200">UMRAM - National Magnetic Resonance Research Center</span>
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
                I built a MATLAB framework to calculate absolute, relative, period, N-period, and cycle-to-cycle jitter in sinusoidal signals. The work used ideal and randomly jittered waveforms with controlled time-domain perturbations. Linear interpolation estimated the zero-crossing instants used by the jitter calculations.
              </p>
              
              <p>
                Each measure follows its theoretical definition and was checked against reference values through plots and numerical comparisons. The result is a practical way to inspect timing variation in simulated sinusoidal signals.
              </p>

              <p>
                The internship also examined the mathematical basis of jitter, alongside the implementation and validation work.
              </p>
            </div>

            {/* Internship Report */}
            <div>
              <h2 className="text-2xl font-bold text-zinc-800 dark:text-zinc-100 mb-6">
                Research Internship Report
              </h2>
              <div className="bg-white dark:bg-zinc-800 rounded-lg shadow-lg border border-zinc-200 dark:border-zinc-700 p-6">
                <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-4">
                  Research internship report covering the framework, its mathematical basis, the experiments, and the results from Summer 2024 at UMRAM.
                </p>
                
                <div className="flex gap-4 mb-6">
                  <a
                    href="/umram.pdf"
                    download="UMRAM_Jitter_Analysis_Research_Report.pdf"
                    className="inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-md transition-colors"
                  >
                    <svg className="mr-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    Download Report
                  </a>
                  <a
                    href="/umram.pdf"
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
                  <DocumentViewer src="/umram.pdf#view=FitH" title="UMRAM Research Internship Report" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}
