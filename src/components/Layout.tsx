import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'

export function Layout({ children }: { children: React.ReactNode }) {
  return <div className="min-h-screen overflow-x-hidden bg-[#f4f1e8] text-[#13283a] dark:bg-[#13283a] dark:text-[#f4f1e8]"><Header /><main>{children}</main><Footer /></div>
}
