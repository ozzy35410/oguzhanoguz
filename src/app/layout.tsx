import { type Metadata } from 'next'
import { Analytics } from '@vercel/analytics/react'
import Script from 'next/script'

import { Providers } from '@/app/providers'
import { Layout } from '@/components/Layout'

import '@/styles/tailwind.css'

const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_ID || 'G-XXXXXXXXXX'

export const metadata: Metadata = {
  title: {
    template: '%s - Oguzhan Oguz',
    default:
      'Oguzhan Oguz | Signal Processing and Perception Systems',
  },
  description:
    'Oguzhan Oguz is an M.Sc. student at KTH working across signal processing, computer vision, sensor fusion, and machine learning.',
  openGraph: {
    title: 'Oguzhan Oguz | Signal Processing and Perception Systems',
    description: 'M.Sc. student at KTH working across signal processing, computer vision, sensor fusion, and machine learning.',
    url: 'https://oguzhanoguz.vercel.app',
    siteName: 'Oguzhan Oguz',
    images: [
      {
        url: 'https://oguzhanoguz.vercel.app/og-image.jpg',
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
    title: 'Oguzhan Oguz | Signal Processing and Perception Systems',
    description: 'M.Sc. student at KTH working across signal processing, computer vision, sensor fusion, and machine learning.',
    images: ['https://oguzhanoguz.vercel.app/og-image.jpg'],
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
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className="flex h-full bg-zinc-50 dark:bg-black">
        {/* Google Analytics */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}');
          `}
        </Script>
        
        <Providers>
          <div className="flex w-full">
            <Layout>{children}</Layout>
          </div>
        </Providers>
        <Analytics />
      </body>
    </html>
  )
}
