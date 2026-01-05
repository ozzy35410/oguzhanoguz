import { SimpleLayout } from '@/components/SimpleLayout'

export default function Project() {
  return (
    <SimpleLayout
      title="Recovering a Permutation Key with a Linear FIR Equalizer and Decoding a Scrambled Color Image"
      intro="EQ1220 Signal Theory • Fall 2024"
    >
      <div className="space-y-8">
        {/* Project Overview */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-zinc-800 dark:text-zinc-100">
            Project Overview
          </h2>
          <p className="text-base text-zinc-600 dark:text-zinc-400">
            A causal FIR equalizer was trained with least-squares on a short 32-symbol preamble, then used for hard bit decisions across the full key stream. Filter order was chosen by sweeping candidate orders and comparing preamble decision errors, MSE, and permutation-uniqueness indicators, followed by image decoding with the recovered key. Robustness was evaluated by injecting controlled bit flips into the recovered key, showing decoding remains interpretable up to roughly 3% BER and becomes unusable beyond about 8% BER.
          </p>
        </section>

        {/* Key Components */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-zinc-800 dark:text-zinc-100">
            Key Components
          </h2>
          <ul className="list-disc list-inside space-y-2 text-base text-zinc-600 dark:text-zinc-400">
            <li>Causal FIR equalizer design and training</li>
            <li>Least-squares optimization for 32-symbol preamble</li>
            <li>Hard bit decision implementation</li>
            <li>Filter order selection and optimization</li>
            <li>MSE and decision error analysis</li>
            <li>Permutation key recovery algorithms</li>
            <li>RGB image decoding from scrambled data</li>
            <li>Bit error rate (BER) robustness testing</li>
            <li>Performance evaluation under controlled noise conditions</li>
          </ul>
        </section>

        {/* Results */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-zinc-800 dark:text-zinc-100">
            Results
          </h2>
          <p className="text-base text-zinc-600 dark:text-zinc-400">
            The system successfully recovered the permutation key and decoded the scrambled RGB image. Robustness analysis revealed that decoding remains interpretable with up to approximately 3% bit error rate, while becoming unusable beyond 8% BER, demonstrating the practical limits of the equalizer approach.
          </p>
        </section>

        {/* Report */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-zinc-800 dark:text-zinc-100">
            Project Report
          </h2>
          <div className="flex gap-4">
            <a
              href="/EQ1220_Project2.pdf"
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
