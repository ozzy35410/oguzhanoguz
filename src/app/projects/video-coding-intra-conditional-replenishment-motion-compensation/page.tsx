import { SimpleLayout } from '@/components/SimpleLayout'

export default function Project() {
  return (
    <SimpleLayout
      title="Video Coding: Intra, Conditional Replenishment, Motion Compensation"
      intro="EQ2330 Image and Video Processing • Fall 2025"
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

        {/* Key Components */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-zinc-800 dark:text-zinc-100">
            Key Components
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

        {/* Project Report */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-zinc-800 dark:text-zinc-100">
            Project Report
          </h2>
          <div className="w-full" style={{ height: '800px' }}>
            <iframe
              src="/EQ2330_Project3.pdf"
              className="w-full h-full border border-zinc-200 dark:border-zinc-700 rounded-lg"
              title="Project Report"
            />
          </div>
          <div className="flex gap-4 mt-4">
            <a
              href="/EQ2330_Project3.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-sm text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
            >
              Open in new tab
            </a>
            <a
              href="/EQ2330_Project3.pdf"
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
