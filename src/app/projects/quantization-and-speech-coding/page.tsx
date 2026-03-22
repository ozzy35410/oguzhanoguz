import { SimpleLayout } from '@/components/SimpleLayout'

export default function Project() {
  return (
    <SimpleLayout
      title="Quantization and Speech Coding"
      intro="EQ2321 Speech and Audio Processing • Spring 2026"
    >
      <div className="space-y-8">
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-zinc-800 dark:text-zinc-100">Project Overview</h2>
          <p className="text-base text-zinc-600 dark:text-zinc-400">
            This project studied speech coding from scalar quantization to parametric and predictive coding. A midrise uniform
            quantizer was implemented with direct interval mapping. In parametric coding, frame energy was evaluated in linear and
            logarithmic domains, where log-energy coding showed higher efficiency. Pitch and voiced/unvoiced information were coded
            conditionally, with pitch transmitted only for voiced frames. LPC parameters were converted to line spectral frequencies
            and quantized by a two-stage vector quantizer with 1024 entries per stage. Bit allocation was optimized using
            log-spectral distance against an unquantized reference synthesis, yielding a compact operating point with 5 log-energy
            bits, 6 pitch bits on voiced frames, 1 voicing bit, and 20 LP bits. The project also compared PCM SNR versus rate and
            implemented adaptive open-loop DPCM with LPC prediction and residual quantization. The final DPCM setup outperformed
            same-rate PCM references in SNR.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-zinc-800 dark:text-zinc-100">Key Components</h2>
          <ul className="list-disc list-inside space-y-2 text-base text-zinc-600 dark:text-zinc-400">
            <li>Midrise uniform scalar quantization</li>
            <li>Linear versus log-energy quantization</li>
            <li>Conditional pitch transmission on voiced frames</li>
            <li>Voiced/unvoiced flag coding</li>
            <li>LSF conversion of LPC parameters</li>
            <li>Two-stage vector quantization for LP parameters</li>
            <li>Bit allocation using log-spectral distance</li>
            <li>PCM SNR versus rate analysis</li>
            <li>Adaptive open-loop DPCM design</li>
            <li>DPCM versus same-rate PCM comparison</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-zinc-800 dark:text-zinc-100">Project Presentation</h2>
          <div className="w-full" style={{ height: '800px' }}>
            <iframe
              src="/EQ2321_Project2_Presentation.pdf"
              className="w-full h-full border border-zinc-200 dark:border-zinc-700 rounded-lg"
              title="EQ2321 Project 2 Presentation"
            />
          </div>
          <div className="flex gap-4 mt-4">
            <a
              href="/EQ2321_Project2_Presentation.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-sm text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
            >
              Open in new tab
            </a>
            <a
              href="/EQ2321_Project2_Presentation.pdf"
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
