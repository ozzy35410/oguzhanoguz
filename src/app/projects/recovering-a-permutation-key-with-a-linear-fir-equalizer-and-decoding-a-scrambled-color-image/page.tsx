import { SimpleLayout } from '@/components/SimpleLayout'

export default function Project() {
  return (
    <SimpleLayout
      title="Recovering a Permutation Key with a Linear FIR Equalizer and Decoding a Scrambled Color Image"
      intro="EQ1220 Signal Theory • Fall 2025"
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

        {/* Project Report */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-zinc-800 dark:text-zinc-100">
            Project Report
          </h2>
          <div className="w-full" style={{ height: '800px' }}>
            <iframe
              src="/EQ1220_Project2.pdf"
              className="w-full h-full border border-zinc-200 dark:border-zinc-700 rounded-lg"
              title="Project Report"
            />
          </div>
          <div className="flex gap-4 mt-4">
            <a
              href="/EQ1220_Project2.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-sm text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
            >
              Open in new tab
            </a>
            <a
              href="/EQ1220_Project2.pdf"
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
