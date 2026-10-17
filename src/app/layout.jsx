import './globals.css';
import Script from 'next/script';
import { ModalProvider } from '../context/ModalContext';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export const metadata = {
  metadataBase: new URL('https://www.mahadevweld.com'),
  title: 'Fabrication & Demolition Contractor Rajasthan | Mahadev Weld',
  description: 'Mahadev Weld is a fabrication and demolition contractor in Rajasthan. Toll plaza demolition, PEB sheds, steel dismantling and domes. Get a quote today.',
  keywords: [
    'fabrication and demolition contractor in Rajasthan',
    'toll plaza demolition contractor',
    'PEB shed manufacturer in Rajasthan',
    'industrial shed fabrication',
    'geodesic dome manufacturer in India',
    'steel fabrication company',
    'steel structure dismantling contractor',
    'structural steel fabrication',
    'heavy industrial fabrication',
    'industrial welding services',
    'on-site welding service',
    'steel dome fabrication',
  ],
  icons: {
    icon: '/favicon.svg',
  },
  openGraph: {
    title: 'Fabrication & Demolition Contractor Rajasthan | Mahadev Weld',
    description: 'Mahadev Weld is a fabrication and demolition contractor in Rajasthan. Toll plaza demolition, PEB sheds, steel dismantling and domes. Get a quote today.',
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
