import './globals.css'
import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import CustomCursor from '@/Components/CustomCursor'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Criador Creative Studio | Branding, Social Media & Web Design Agency',
  description: 'Criador is a premium creative agency offering branding, logo design, social media marketing, SEO, packaging, web hosting, and e-commerce solutions for modern businesses.',
  keywords: ['branding agency', 'logo design', 'social media marketing', 'SEO agency', 'web design', 'packaging design', 'creative studio', 'digital marketing', 'e-commerce', 'label design'],
  authors: [{ name: 'Criador Creative Studio' }],
  creator: 'Criador Creative Studio',
  publisher: 'Criador Creative Studio',
  metadataBase: new URL('https://criador-studio.vercel.app'),
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: 'https://criador-studio.vercel.app',
    siteName: 'Criador Creative Studio',
    title: 'Criador Creative Studio | Branding, Social Media & Web Design Agency',
    description: 'Premium creative agency for branding, social media, SEO, packaging, and web design. 120+ projects. 50+ happy clients.',
    images: [{ url: '/criador_logo.png', width: 1200, height: 630, alt: 'Criador Creative Studio' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Criador Creative Studio | Branding & Web Design Agency',
    description: 'Premium creative agency for branding, social media, SEO, packaging, and web design.',
    images: ['/criador_logo.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-snippet': -1, 'max-image-preview': 'large' },
  },
  icons: {
    icon: '/criador_logo.png',
    apple: '/criador_logo.png',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  viewportFit: 'cover',
  themeColor: '#F2EDE6',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CustomCursor />
        {children}
      </body>
    </html>
  )
}
