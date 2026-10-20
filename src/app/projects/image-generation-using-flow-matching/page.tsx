import { SimpleLayout } from '@/components/SimpleLayout'

export default function Project() {
  return (
    <SimpleLayout
      title="Image Generation Using Flow Matching"
      intro="EQ2445 Project in Multimedia Processing and Analysis • November 2026 - Present"
    >
      <div className="space-y-8">
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-zinc-800 dark:text-zinc-100">Project Overview</h2>
          <p className="text-base text-zinc-600 dark:text-zinc-400">
            This ongoing project explores how flow matching can be used for image generation and reconstruction. We plan to build, train, and test an image-to-image translation model on a selected dataset, then compare the generated images with the originals.
          </p>
          <p className="text-base text-zinc-600 dark:text-zinc-400">
            The project is supervised by Prof. Markus Flierl and carried out with Naicheng Jiang.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-zinc-800 dark:text-zinc-100">Project Goals</h2>
          <ul className="list-inside list-disc space-y-2 text-base text-zinc-600 dark:text-zinc-400">
            <li>Investigate image generation using flow matching.</li>
            <li>Set up, train, and test an image-to-image translation model on a selected dataset.</li>
            <li>Evaluate generated image quality with PSNR, DISTS, and LPIPS.</li>
            <li>Study how initial noise and the reverse generation process affect reconstruction quality.</li>
            <li>Explore the impact of architectures such as U-Net and DiT as a possible advanced goal.</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-zinc-800 dark:text-zinc-100">Background</h2>
          <p className="text-base text-zinc-600 dark:text-zinc-400">The illustrations below show examples from the project presentation. They explain the underlying concepts and are not results from our project.</p>
          <div className="grid gap-8 md:grid-cols-2">
            <figure>
              <img src="/images/eq2445/diffusion-process.png" alt="Forward diffusion and reverse generation processes" className="w-full rounded-lg border border-zinc-200 bg-white p-2 dark:border-zinc-700" />
              <figcaption className="mt-2 text-sm text-zinc-500 dark:text-zinc-400">Diffusion and reverse generation. Figure from the project presentation, credited there to Song (2021).</figcaption>
            </figure>
            <figure>
              <img src="/images/eq2445/gradual-interpolation.png" alt="Images gradually emerging from noise" className="w-full rounded-lg border border-zinc-200 bg-white p-2 dark:border-zinc-700" />
              <figcaption className="mt-2 text-sm text-zinc-500 dark:text-zinc-400">Gradual interpolation from noise. Figure from the project presentation, credited there to Holderrieth (2026).</figcaption>
            </figure>
          </div>
        </section>
      </div>
    </SimpleLayout>
  )
}
