import { SimpleLayout } from '@/components/SimpleLayout'

export default function Project() {
  return (
    <SimpleLayout
      title="Wiener Filtering for Speech Enhancement"
      intro="EQ2401 Adaptive Signal Processing • Spring 2026"
    >
      <div className="space-y-8">
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-zinc-800 dark:text-zinc-100">Project Overview</h2>
          <p className="text-base text-zinc-600 dark:text-zinc-400">
            This project focused on suppressing aircraft-like background noise from a speech recording under the additive model
            y(n) = x(n) + v(n). Since only one noisy recording was available, speech- and noise-dominant regions were selected
            with a short-time energy strategy: the first 0.7 seconds were used as a noise seed, then 20 ms frames with 10 ms hop
            were scored to form low- and high-energy subsets. Speech and noise were modeled as AR processes and estimated via batch
            least squares to obtain smooth PSD estimates. Based on these models, three Wiener designs were compared: an ideal
            non-causal benchmark, a finite-length FIR Wiener-Hopf solution, and a causal Wiener filter derived by spectral
            factorization with FIR truncation. The final configuration used AR order 14 and FIR length 192. Results showed the
            non-causal design gave the strongest noise-floor attenuation, while causal and FIR variants were more conservative. As
            expected, stronger suppression improved denoising but increased speech distortion.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-zinc-800 dark:text-zinc-100">Key Components</h2>
          <ul className="list-disc list-inside space-y-2 text-base text-zinc-600 dark:text-zinc-400">
            <li>Additive noisy-speech modeling</li>
            <li>Short-time energy based speech/noise segmentation</li>
            <li>20 ms analysis framing with 10 ms hop</li>
            <li>AR modeling of speech and noise spectra</li>
            <li>Batch least-squares parameter estimation</li>
            <li>Ideal non-causal Wiener filtering</li>
            <li>Finite-length FIR Wiener-Hopf solution</li>
            <li>Causal Wiener design via spectral factorization</li>
            <li>Waveform and frequency-response comparison</li>
            <li>Suppression-versus-distortion trade-off analysis</li>
          </ul>
        </section>
      </div>
    </SimpleLayout>
  )
}
