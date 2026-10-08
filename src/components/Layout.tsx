import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#f7f1e7] text-[#163b3b] dark:bg-[#102524] dark:text-[#f4efe6]">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  )
}
