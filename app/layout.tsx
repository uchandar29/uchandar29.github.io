import type { Metadata, Viewport } from 'next'
import { Inter, Poppins } from 'next/font/google'
import { ThemeProvider } from '@/components/theme-provider'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['300', '400', '500', '600', '700'],
})

const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-poppins',
  weight: ['400', '500', '600', '700', '800'],
})

export const metadata: Metadata = {
  title: 'Urmil Chandarana | Software Engineer',
  description:
    'Portfolio of Urmil Chandarana - Software Engineer & CS Graduate Student at UC Davis specializing in Distributed Systems, System Engineering, and Network Security.',
  generator: 'Next.js',
  keywords: [
    'Urmil Chandarana',
    'Software Engineer',
    'UC Davis',
    'Distributed Systems',
    'Full Stack Developer',
  ],
  authors: [{ name: 'Urmil Chandarana' }],
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#eef0f2' },
    { media: '(prefers-color-scheme: dark)', color: '#0a0b0c' },
  ],
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${poppins.variable}`}>
      <body className="font-sans antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
