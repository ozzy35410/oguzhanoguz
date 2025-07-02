import { type Metadata } from 'next'

import { Providers } from '@/app/providers'
import { Layout } from '@/components/Layout'

import '@/styles/tailwind.css'

export const metadata: Metadata = {
  title: {
    template: '%s - Oguzhan Oguz',
    default:
      'Oguzhan Oguz - Multimedia Engineer',
  },
  description:
    'I\'m Oguzhan Oguz, studying multimedia processing master\'s program at KTH Royal Institute of Technology. I\'m interested in image processing, video processing, audio processing, signal processing and AI automation.',
  openGraph: {
    title: 'Oguzhan Oguz - Multimedia Engineer',
    description: 'I\'m Oguzhan Oguz, studying multimedia processing master\'s program at KTH Royal Institute of Technology. I\'m interested in image processing, video processing, audio processing, signal processing and AI automation.',
    url: 'https://oguzhanoguz.vercel.app',
    siteName: 'Oguzhan Oguz',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Oguzhan Oguz - Multimedia Engineer',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Oguzhan Oguz - Multimedia Engineer',
    description: 'I\'m Oguzhan Oguz, studying multimedia processing master\'s program at KTH Royal Institute of Technology. I\'m interested in image processing, video processing, audio processing, signal processing and AI automation.',
    images: ['/og-image.jpg'],
  },
  alternates: {
    types: {
      'application/rss+xml': `${process.env.NEXT_PUBLIC_SITE_URL}/feed.xml`,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <body className="flex h-full bg-zinc-50 dark:bg-black">
        <Providers>
          <div className="flex w-full">
            <Layout>{children}</Layout>
          </div>
        </Providers>
      </body>
    </html>
  )
}
