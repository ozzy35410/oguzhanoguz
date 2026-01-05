import { SimpleLayout } from '@/components/SimpleLayout'

export default function Project() {
  return (
    <SimpleLayout
      title="Image Enhancement and Restoration (Spatial and Frequency Domain)"
      intro="EQ2330 Image and Video Processing • Spring 2025"
    >
      <div className="space-y-8">
        {/* Project Overview */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-zinc-800 dark:text-zinc-100">
            Project Overview
          </h2>
          <p className="text-base text-zinc-600 dark:text-zinc-400">
            A low-contrast image was simulated and improved using histogram equalization, highlighting how discrete intensity levels limit perfectly uniform histograms. Spatial denoising was tested with 3×3 mean and median filters, showing strong noise reduction for Gaussian noise and clear advantages of median filtering for salt-and-pepper noise while keeping edges sharper. Finally, out-of-focus blur was addressed in the frequency domain with Wiener filtering, using padding to reduce wraparound effects and tuning the noise-to-signal term to balance sharpness against ringing artifacts.
          </p>
        </section>

        {/* Key Techniques */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-zinc-800 dark:text-zinc-100">
            Key Techniques
          </h2>
          <ul className="list-disc list-inside space-y-2 text-base text-zinc-600 dark:text-zinc-400">
            <li>Histogram equalization for contrast enhancement</li>
            <li>3×3 mean and median spatial filtering</li>
            <li>Gaussian noise reduction analysis</li>
            <li>Salt-and-pepper noise removal with edge preservation</li>
            <li>Wiener filtering in frequency domain</li>
            <li>Padding techniques to reduce wraparound artifacts</li>
            <li>Noise-to-signal ratio tuning for optimal deblurring</li>
            <li>Trade-off analysis between sharpness and ringing</li>
          </ul>
        </section>

        {/* Results */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-zinc-800 dark:text-zinc-100">
            Results
          </h2>
          <p className="text-base text-zinc-600 dark:text-zinc-400">
            The project demonstrated that histogram equalization effectively improved contrast despite discrete intensity limitations. Median filtering proved superior to mean filtering for salt-and-pepper noise while maintaining sharper edges. Frequency-domain Wiener filtering successfully addressed out-of-focus blur, with proper tuning achieving an optimal balance between sharpness and artifact suppression.
          </p>
        </section>

        {/* Report */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-zinc-800 dark:text-zinc-100">
            Project Report
          </h2>
          <div className="flex gap-4">
            <a
              href="/EQ2330_Project1.pdf"
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
