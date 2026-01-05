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
            Key Components
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

        {/* Project Report */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-zinc-800 dark:text-zinc-100">
            Project Report
          </h2>
          <div className="w-full" style={{ height: '800px' }}>
            <iframe
              src="/EQ2330_Project1.pdf"
              className="w-full h-full border border-zinc-200 dark:border-zinc-700 rounded-lg"
              title="Project Report"
            />
          </div>
          <div className="flex gap-4 mt-4">
            <a
              href="/EQ2330_Project1.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-sm text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
            >
              Open in new tab
            </a>
            <a
              href="/EQ2330_Project1.pdf"
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
