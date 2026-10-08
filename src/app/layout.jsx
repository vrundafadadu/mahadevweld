import './globals.css';
import Script from 'next/script';
import { ModalProvider } from '../context/ModalContext';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export const metadata = {
  metadataBase: new URL('https://www.mahadevweld.com'),
  title: 'Mahadev Weld | Heavy Industrial Fabrication, Demolition & Toll Plazas',
  description: 'Mahadev Weld is Rajasthan’s premier structural engineering and demolition company specializing in Toll Plaza dismantling, PEB industrial sheds, geodesic domes, and heavy metal fabrication.',
  keywords: 'Mahadev Weld, Toll Plaza Demolition, PEB Sheds, Dome Fabrication, Industrial Welding, Pali, Rajasthan, Falna, Bali, Khudala',
  icons: {
    icon: '/favicon.svg',
  },
  openGraph: {
    title: 'Mahadev Weld — Industrial Fabrication & Demolition Works',
    description: 'Specializing in Toll Plaza dismantling, industrial PEB sheds, geodesic domes, and heavy metal fabrication in Rajasthan.',
    url: 'https://www.mahadevweld.com',
    siteName: 'Mahadev Weld',
    type: 'website',
  },
};

export const viewport = {
  themeColor: '#0f172a',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-W9RL9B348S"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
        >
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-W9RL9B348S');
          `}
        </Script>
      </head>
      <body>
        <ModalProvider>
          <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            <Navbar />
            <main style={{ flex: 1 }}>
              {children}
            </main>
            <Footer />
          </div>
        </ModalProvider>
      </body>
    </html>
  );
}
