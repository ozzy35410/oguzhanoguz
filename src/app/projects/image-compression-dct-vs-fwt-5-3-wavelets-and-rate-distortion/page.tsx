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

        {/* Results */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-zinc-800 dark:text-zinc-100">
            Results
          </h2>
          <p className="text-base text-zinc-600 dark:text-zinc-400">
            The comparison revealed that DCT and FWT perform similarly at higher bitrates, with image content being a significant factor in compression efficiency. Texture-heavy images showed different PSNR characteristics at identical bitrates. The theoretical prediction was confirmed: MSE measurements aligned between image and transform domains for orthonormal DCT, but diverged for the biorthogonal 5/3 wavelet system due to its non-orthogonal nature.
          </p>
        </section>

        {/* Report */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-zinc-800 dark:text-zinc-100">
            Project Report
          </h2>
          <div className="flex gap-4">
            <a
              href="/EQ2330_Project2.pdf"
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
