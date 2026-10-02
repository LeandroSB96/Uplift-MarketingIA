import type { Metadata, Viewport } from 'next'
import '../styles/global.css'

export const metadata: Metadata = {
  title: 'Uplift | Marketing intelligence, in motion',
  description:
    'Turn marketing signals into decisive growth with an AI operating system built for modern teams.',
  icons: {
    icon: '/favicon.svg',
  },
  openGraph: {
    title: 'Uplift | Marketing intelligence, in motion',
    description:
      'Turn marketing signals into decisive growth with an AI operating system built for modern teams.',
    type: 'website',
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#0b1120',
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  )
}