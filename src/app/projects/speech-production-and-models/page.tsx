import { SimpleLayout } from '@/components/SimpleLayout'

export default function Project() {
  return (
    <SimpleLayout
      title="Speech Production and Models"
      intro="EQ2321 Speech and Audio Processing • Spring 2026"
    >
      <div className="space-y-8">
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-zinc-800 dark:text-zinc-100">Project Overview</h2>
          <p className="text-base text-zinc-600 dark:text-zinc-400">
            This project combined speech analysis and source-filter modeling with LPC vocoder synthesis. The workflow covered
            bandwidth and intelligibility experiments, voiced/unvoiced and pitch analysis, LPC spectral-envelope estimation,
            formant interpretation, phoneme inspection, and narrow-band versus wide-band spectrogram comparison. A frame-wise
            analysis pipeline extracted energy, zero-crossing rate, voicing, LPC coefficients, and pitch period. Final analysis
            settings used 256-sample frames, 80-sample updates, and LPC order 12, with separate pitch-search ranges for male and
            female speech. Building on these parameters, the vocoder was progressively improved from a basic time-varying LPC
            filter to a tuned system with energy control, voiced/unvoiced excitation switching, time-varying pitch, smoothing,
            residual-energy normalization, aspiration-noise injection, and gentle gain correction. The final version produced the
            most stable and natural output among all tested stages.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-zinc-800 dark:text-zinc-100">Key Components</h2>
          <ul className="list-disc list-inside space-y-2 text-base text-zinc-600 dark:text-zinc-400">
            <li>Bandwidth and intelligibility analysis</li>
            <li>Voiced/unvoiced waveform analysis</li>
            <li>Pitch tracking from autocorrelation</li>
            <li>LPC spectral-envelope estimation</li>
            <li>Formant and vowel interpretation</li>
            <li>Phoneme-level inspection</li>
            <li>Narrow-band and wide-band spectrogram comparison</li>
            <li>Frame-wise extraction of energy, ZCR, voicing, LPC, and pitch</li>
            <li>Progressive LPC vocoder design</li>
            <li>Smoothing and excitation tuning for final synthesis</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-zinc-800 dark:text-zinc-100">Project Presentation</h2>
          <div className="w-full" style={{ height: '800px' }}>
            <iframe
              src="/EQ2321_Project1_Presentation.pdf"
              className="w-full h-full border border-zinc-200 dark:border-zinc-700 rounded-lg"
              title="EQ2321 Project 1 Presentation"
            />
          </div>
          <div className="flex gap-4 mt-4">
            <a
              href="/EQ2321_Project1_Presentation.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-sm text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
            >
              Open in new tab
            </a>
            <a
              href="/EQ2321_Project1_Presentation.pdf"
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
