import { SimpleLayout } from '@/components/SimpleLayout'

export default function Project() {
  return (
    <SimpleLayout
      title="Analysis and Simulation of a QPSK System"
      intro="EQ2310 Digital Communications • Fall 2025"
    >
      <div className="space-y-8">
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-zinc-800 dark:text-zinc-100">Project Overview</h2>
          <p className="text-base text-zinc-600 dark:text-zinc-400">
            This project implemented and validated a full Gray-coded QPSK baseband link in MATLAB. The transmitter performed bit
            mapping, upsampling, and pulse shaping before complex AWGN transmission. At the receiver, matched filtering was followed
            by training-based timing synchronization, downsampling, phase estimation from known symbols, phase correction, and hard
            decisions. Evaluation focused on BER versus Eb/N0 and comparison against theoretical Gray-coded QPSK performance in AWGN.
            The core setup used 2 bits/symbol, 8 samples/symbol, 100 training bits by default, 1000 payload bits per block, and 10
            guard bits. Additional experiments included constellation plots across SNR values, PSD comparison of rectangular and RRC
            pulse shaping, training-length sweeps to show overhead versus estimation quality, and eye-diagram analysis for AWGN and
            two-tap multipath channels. Results matched theory closely in AWGN and highlighted expected ISI-related eye closure under
            multipath.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-zinc-800 dark:text-zinc-100">Key Components</h2>
          <ul className="list-disc list-inside space-y-2 text-base text-zinc-600 dark:text-zinc-400">
            <li>Gray-coded QPSK symbol mapping</li>
            <li>Baseband pulse shaping</li>
            <li>Matched filtering</li>
            <li>Training-based timing synchronization</li>
            <li>Training-based phase estimation</li>
            <li>Hard-decision detection</li>
            <li>BER versus Eb/N0 simulation</li>
            <li>Theory-versus-simulation BER comparison</li>
            <li>Rectangular versus RRC PSD analysis</li>
            <li>Training-length and eye-diagram experiments</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-zinc-800 dark:text-zinc-100">Project Report</h2>
          <div className="w-full" style={{ height: '800px' }}>
            <iframe
              src="/EQ2310_Project1.pdf"
              className="w-full h-full border border-zinc-200 dark:border-zinc-700 rounded-lg"
              title="EQ2310 Project Report"
            />
          </div>
          <div className="flex gap-4 mt-4">
            <a
              href="/EQ2310_Project1.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-sm text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
            >
              Open in new tab
            </a>
            <a
              href="/EQ2310_Project1.pdf"
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
