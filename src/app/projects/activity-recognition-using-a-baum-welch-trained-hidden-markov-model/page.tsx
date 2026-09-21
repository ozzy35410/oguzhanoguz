import { SimpleLayout } from '@/components/SimpleLayout'

export default function Project() {
  return (
    <SimpleLayout
      title="Activity Recognition Using a Baum-Welch-Trained Hidden Markov Model"
      intro="EQ2341 Pattern Recognition and Machine Learning • Fall 2026"
    >
      <div className="space-y-8">
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-zinc-800 dark:text-zinc-100">Project Overview</h2>
          <p className="text-base text-zinc-600 dark:text-zinc-400">
            This project implemented a human activity recognition classifier for standing, walking, and running using phone
            accelerometer recordings. Raw three-axis acceleration was converted to orientation-robust magnitude values, smoothed
            with a five-sample moving average, and summarized in overlapping one-second windows using mean, standard deviation,
            and range features. A three-state HMM with multivariate Gaussian emissions was initialized from nine labeled
            single-activity recordings and refined with the Baum-Welch expectation-maximization algorithm. The system used both
            Forward-Backward posterior decoding and Viterbi sequence decoding, then evaluated them on a mixed activity recording
            against an independent Gaussian baseline. Viterbi achieved approximately 85.03% accuracy across the scored windows,
            slightly exceeding posterior MAP decoding at 84.43% and the non-temporal baseline at 82.63%. The learned transition
            matrix captured the expected persistence of activities over consecutive windows. The evaluation also documents the
            limits of approximate transition labels and the small, single-user dataset.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-zinc-800 dark:text-zinc-100">Key Components</h2>
          <ul className="list-disc list-inside space-y-2 text-base text-zinc-600 dark:text-zinc-400">
            <li>Phone accelerometer dataset for standing, walking, and running</li>
            <li>Acceleration magnitude for orientation-robust input features</li>
            <li>Five-sample moving-average smoothing</li>
            <li>Overlapping one-second analysis windows with a 0.5-second hop</li>
            <li>Window-level mean, standard deviation, and range features</li>
            <li>Three-state HMM with multivariate Gaussian emissions</li>
            <li>Supervised initialization from single-activity recordings</li>
            <li>Baum-Welch expectation-maximization training</li>
            <li>Forward-Backward posterior and Viterbi sequence decoding</li>
            <li>Comparison with an independent Gaussian classifier</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-zinc-800 dark:text-zinc-100">Project Report</h2>
          <div className="w-full" style={{ height: '800px' }}>
            <iframe
              src="/EQ2341_Final_Project_Report_Oguzhan_Oguz.pdf"
              className="w-full h-full border border-zinc-200 dark:border-zinc-700 rounded-lg"
              title="EQ2341 Final Project Report"
            />
          </div>
          <div className="flex gap-4 mt-4">
            <a
              href="/EQ2341_Final_Project_Report_Oguzhan_Oguz.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-sm text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
            >
              Open report in new tab
            </a>
            <a
              href="/EQ2341_Final_Project_Report_Oguzhan_Oguz.pdf"
              download
              className="inline-flex items-center text-sm text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
            >
              Download report
            </a>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-zinc-800 dark:text-zinc-100">Project Presentation</h2>
          <a
            href="/EQ2341_Final_Project_Presentation_Oguzhan_Oguz.pptx"
            download
            className="inline-flex items-center text-sm text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
          >
            Download presentation
          </a>
        </section>
      </div>
    </SimpleLayout>
  )
}
