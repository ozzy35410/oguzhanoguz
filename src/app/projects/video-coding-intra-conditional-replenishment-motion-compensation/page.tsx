import { SimpleLayout } from '@/components/SimpleLayout'

export default function Project() {
  return (
    <SimpleLayout
      title="Video Coding: Intra, Conditional Replenishment, Motion Compensation"
      intro="EQ2330 Image and Video Processing • Spring 2025"
    >
      <div className="space-y-8">
        {/* Project Overview */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-zinc-800 dark:text-zinc-100">
            Project Overview
          </h2>
          <p className="text-base text-zinc-600 dark:text-zinc-400">
            Three video coding architectures were implemented and compared on QCIF sequences using bitrate–PSNR performance. The baseline intra coder compressed each frame independently using block DCT and quantization, capturing only spatial redundancy. Conditional replenishment then introduced a copy mode that reuses blocks from the previous reconstructed frame, selected by minimizing a Lagrangian cost that balances distortion and rate. The final motion-compensated coder used block matching to estimate motion vectors and encode residuals, substantially reducing prediction energy and achieving the best rate–distortion performance among the three designs.
          </p>
        </section>

        {/* Coding Architectures */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-zinc-800 dark:text-zinc-100">
            Coding Architectures
          </h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-zinc-800 dark:text-zinc-100 mb-2">
                1. Intra Coder (Baseline)
              </h3>
              <p className="text-base text-zinc-600 dark:text-zinc-400">
                Independent frame compression using block DCT and quantization. Captures spatial redundancy only, serving as the performance baseline.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-zinc-800 dark:text-zinc-100 mb-2">
                2. Conditional Replenishment
              </h3>
              <p className="text-base text-zinc-600 dark:text-zinc-400">
                Introduces temporal prediction through block copying from previous reconstructed frames. Uses Lagrangian cost optimization to balance rate and distortion.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-zinc-800 dark:text-zinc-100 mb-2">
                3. Motion-Compensated Coding
              </h3>
              <p className="text-base text-zinc-600 dark:text-zinc-400">
                Full motion estimation using block matching with residual encoding. Achieves optimal rate-distortion performance through advanced temporal prediction.
              </p>
            </div>
          </div>
        </section>

        {/* Key Techniques */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-zinc-800 dark:text-zinc-100">
            Key Techniques
          </h2>
          <ul className="list-disc list-inside space-y-2 text-base text-zinc-600 dark:text-zinc-400">
            <li>Block-based DCT transformation</li>
            <li>Uniform quantization for bitrate control</li>
            <li>Frame-by-frame independent coding (intra)</li>
            <li>Block copying from reference frames</li>
            <li>Lagrangian rate-distortion optimization</li>
            <li>Block matching motion estimation</li>
            <li>Motion vector encoding</li>
            <li>Residual signal processing</li>
            <li>QCIF video sequence processing</li>
          </ul>
        </section>

        {/* Results */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-zinc-800 dark:text-zinc-100">
            Results
          </h2>
          <p className="text-base text-zinc-600 dark:text-zinc-400">
            The motion-compensated coder demonstrated superior rate-distortion performance compared to both the intra coder and conditional replenishment approaches. By exploiting temporal redundancy through motion estimation and residual coding, it substantially reduced prediction energy while maintaining high visual quality. The progression from intra to conditional replenishment to motion compensation clearly illustrated the compression gains achievable through increasingly sophisticated temporal modeling techniques.
          </p>
        </section>

        {/* Report */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-zinc-800 dark:text-zinc-100">
            Project Report
          </h2>
          <div className="flex gap-4">
            <a
              href="/EQ2330_Project3.pdf"
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
