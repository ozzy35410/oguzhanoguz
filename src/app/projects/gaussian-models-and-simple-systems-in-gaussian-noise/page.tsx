import { SimpleLayout } from '@/components/SimpleLayout'

export default function Project() {
  return (
    <SimpleLayout
      title="Gaussian Models and Simple Systems in Gaussian Noise"
      intro="EQ1220 Signal Theory • Fall 2025"
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

        {/* Project Report */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-zinc-800 dark:text-zinc-100">
            Project Report
          </h2>
          <div className="w-full" style={{ height: '800px' }}>
            <iframe
              src="/EQ1220_Project1.pdf"
              className="w-full h-full border border-zinc-200 dark:border-zinc-700 rounded-lg"
              title="Project Report"
            />
          </div>
          <div className="flex gap-4 mt-4">
            <a
              href="/EQ1220_Project1.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-sm text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
            >
              Open in new tab
            </a>
            <a
              href="/EQ1220_Project1.pdf"
              download
              className="inline-flex items-center text-sm text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
            >
              Download
            </a>
          </div>
        </section>
      </div>
    </SimpleLayout>
  )
}
