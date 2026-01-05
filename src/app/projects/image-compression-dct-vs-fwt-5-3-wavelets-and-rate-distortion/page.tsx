import { SimpleLayout } from '@/components/SimpleLayout'

export default function Project() {
  return (
    <SimpleLayout
      title="Image Compression: DCT vs FWT (5/3 Wavelets) and Rate-Distortion"
      intro="EQ2330 Image and Video Processing • Spring 2025"
    >
      <div className="space-y-8">
        {/* Project Overview */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-zinc-800 dark:text-zinc-100">
            Project Overview
          </h2>
          <p className="text-base text-zinc-600 dark:text-zinc-400">
            Two compression pipelines were implemented: blockwise 8×8 DCT and multi-scale FWT using 5/3 biorthogonal filter banks with a lifting-based realization. After uniform mid-tread quantization, bitrate was estimated via ideal entropy coding (per-coefficient for DCT and per-subband for FWT), enabling fair rate–distortion comparison across multiple images. Results showed similar performance between DCT and FWT at higher bitrates, while image content (e.g., texture-heavy scenes) strongly influenced PSNR at the same rate. Distortion behavior also reflected theory: image-domain and transform-domain MSE aligned for orthonormal DCT but not for the biorthogonal 5/3 wavelet system.
          </p>
        </section>

        {/* Key Components */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-zinc-800 dark:text-zinc-100">
            Key Components
          </h2>
          <ul className="list-disc list-inside space-y-2 text-base text-zinc-600 dark:text-zinc-400">
            <li>Blockwise 8×8 DCT transform coder implementation</li>
            <li>Multi-scale FWT with 5/3 biorthogonal filter banks</li>
            <li>Lifting-based wavelet transform realization</li>
            <li>Uniform mid-tread quantization</li>
            <li>Ideal entropy coding for bitrate estimation</li>
            <li>Per-coefficient and per-subband coding strategies</li>
            <li>Rate-distortion curve generation and analysis</li>
            <li>PSNR measurement and quality assessment</li>
            <li>Transform-domain vs image-domain MSE comparison</li>
          </ul>
        </section>

        {/* Project Report */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-zinc-800 dark:text-zinc-100">
            Project Report
          </h2>
          <div className="w-full" style={{ height: '800px' }}>
            <iframe
              src="/EQ2330_Project2.pdf"
              className="w-full h-full border border-zinc-200 dark:border-zinc-700 rounded-lg"
              title="Project Report"
            />
          </div>
          <div className="flex gap-4 mt-4">
            <a
              href="/EQ2330_Project2.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-sm text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
            >
              Open in new tab
            </a>
            <a
              href="/EQ2330_Project2.pdf"
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
