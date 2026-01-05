import { SimpleLayout } from '@/components/SimpleLayout'

export default function Project() {
  return (
    <SimpleLayout
      title="Gaussian Models and Simple Systems in Gaussian Noise"
      intro="EQ1220 Signal Theory • Fall 2024"
    >
      <div className="space-y-8">
        {/* Project Overview */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-zinc-800 dark:text-zinc-100">
            Project Overview
          </h2>
          <p className="text-base text-zinc-600 dark:text-zinc-400">
            Univariate and bivariate Gaussian datasets were analyzed using sample mean/variance behavior and ECDF-vs-CDF comparisons. Joint behavior was visualized with 3D histograms, then conditional distributions and linear combinations were derived and checked against simulations. Frequency estimation was studied via periodograms under both white and colored noise, followed by analytic PSD derivations for an AR(1) stage and a stable IIR cascade, with autocorrelation verified using IFFT-based and empirical estimates.
          </p>
        </section>

        {/* Key Components */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-zinc-800 dark:text-zinc-100">
            Key Components
          </h2>
          <ul className="list-disc list-inside space-y-2 text-base text-zinc-600 dark:text-zinc-400">
            <li>Gaussian distribution modeling and statistical estimation</li>
            <li>Sample mean and variance analysis</li>
            <li>ECDF and CDF comparison techniques</li>
            <li>3D histogram visualization of joint distributions</li>
            <li>Conditional distribution derivation</li>
            <li>Periodogram-based frequency estimation</li>
            <li>Power spectral density analysis for AR(1) and IIR systems</li>
            <li>Autocorrelation verification using IFFT methods</li>
          </ul>
        </section>

        {/* Report */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-zinc-800 dark:text-zinc-100">
            Project Report
          </h2>
          <div className="flex gap-4">
            <a
              href="/EQ1220_Project1.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 bg-zinc-800 dark:bg-zinc-100 text-white dark:text-zinc-900 rounded-lg hover:bg-zinc-700 dark:hover:bg-zinc-200 transition-colors"
            >
              <svg className="mr-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Download Report (PDF)
            </a>
          </div>
        </section>
      </div>
    </SimpleLayout>
  )
}
