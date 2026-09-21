'use client'

import { useEffect, useState } from 'react'

export function DocumentViewer({ src, title }: { src: string; title: string }) {
  const [showPreview, setShowPreview] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia('(min-width: 768px)')
    const updatePreview = () => setShowPreview(mediaQuery.matches)

    updatePreview()
    mediaQuery.addEventListener('change', updatePreview)
    return () => mediaQuery.removeEventListener('change', updatePreview)
  }, [])

  if (!showPreview) {
    return (
      <p className="text-sm text-zinc-600 dark:text-zinc-400">
        Document preview is available on larger screens. Use the links below to open or download the file.
      </p>
    )
  }

  return (
    <div className="w-full" style={{ height: '800px' }}>
      <iframe
        src={src}
        className="w-full h-full border border-zinc-200 dark:border-zinc-700 rounded-lg"
        title={title}
      />
    </div>
  )
}
