import { SimpleLayout } from '@/components/SimpleLayout'

export default function Project() {
  return (
    <SimpleLayout
      title="Adaptive Line Enhancer for Tonal Disturbance Reduction"
      intro="EQ2401 Adaptive Signal Processing • Spring 2026"
    >
      <div className="space-y-8">
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-zinc-800 dark:text-zinc-100">Project Overview</h2>
          <p className="text-base text-zinc-600 dark:text-zinc-400">
            This project removed periodic tonal disturbance from speech with an adaptive line enhancer (ALE), using the model
            y(n) = s(n) + v(n), where speech is broadband and the tonal component is more predictable. The ALE used a delayed
            reference so that the adaptive filter learned the correlated tone while reducing sensitivity to less correlated speech.
            Three adaptive algorithms were implemented and compared: LMS, NLMS, and RLS. Delay was selected as 80 samples
            (10 ms) from the autocorrelation trend of a highpass-filtered signal, and FIR length 128 was used for the disturbance
            model. Performance was evaluated with Welch PSD and a tone-band power metric around the dominant tone. All methods
            produced strong tonal attenuation, with measured reductions near 25 dB. In this setup LMS and RLS achieved the highest
            suppression, while complexity followed the expected order LMS &lt; NLMS &lt; RLS.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-zinc-800 dark:text-zinc-100">Key Components</h2>
          <ul className="list-disc list-inside space-y-2 text-base text-zinc-600 dark:text-zinc-400">
            <li>Adaptive line enhancer architecture</li>
            <li>Delayed-reference tonal prediction</li>
            <li>LMS adaptive filtering</li>
            <li>NLMS adaptive filtering</li>
            <li>RLS adaptive filtering</li>
            <li>Delay selection from autocorrelation analysis</li>
            <li>Finite-length FIR disturbance model</li>
            <li>Welch PSD estimation</li>
            <li>Tone-band power metric</li>
            <li>Complexity versus suppression comparison</li>
          </ul>
        </section>
      </div>
    </SimpleLayout>
  )
}
