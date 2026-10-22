import type { Metadata } from 'next'
import './globals.css'
export const metadata: Metadata = { title: 'Rule Breaker Universe // Classified Archive', description: 'A decentralized database of anomalies, cheaters, and division operatives across the Rule Breaker universe.', icons: { icon: '/placeholder/rb_icon.png' } }
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="id"><body>{children}</body></html> }
