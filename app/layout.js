import { Inter } from 'next/font/google';
import Navbar from '@/components/Navbar/Header';
import Footer from '@/components/Footer/index';
import { ReduxProvider } from './reduxProvider';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./global.css"

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
    title: 'Liviint Homes | Affordable Apartments & Bedsitters in Nairobi, Kisii & More',
    description: 'Find affordable single rooms, bedsitters, and studio apartments in Nairobi, Kisii, and nearby towns. Verified listings. No hassle — just move in.',
    metadataBase: new URL('https://www.liviint.com'),
    openGraph: {
        title: 'Liviint Homes | Discover Apartments That Feel Like Home',
        description: 'Explore bedsitters, single rooms, and studios in Kenya. Verified, affordable, and updated regularly.',
        url: 'https://www.liviint.com',
        siteName: 'Liviint Homes',
        images: [
            {
                url: '/images/social-preview.png',
                width: 1200,
                height: 630,
                alt: 'Liviint Homes – Kenya’s Rental Marketplace',
            },
        ],
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Liviint Homes | Discover Apartments That Feel Like Home',
        description: 'Find your next apartment, bedsitter, or studio in Nairobi, Kisii and more.',
        images: ['/images/social-preview.png'],
    },
    icons: {
        icon: '/favicon.ico',
    },
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                <link
                    rel="stylesheet"
                    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css"
                    integrity="sha512-Evv84Mr4kqVGRNSgIGL/F/aIDqQb7xQ2vcrdIwxfjThSH8CSR7PBEakCr51Ck+w+/U6swU2Im1vVX0SVk9ABhg=="
                    crossOrigin="anonymous"
                    referrerPolicy="no-referrer"
                />
                <link
                    rel="stylesheet"
                    href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
                />
            </head>
            <body suppressHydrationWarning={true} className={inter.className}>
                <ReduxProvider>
                    <Navbar />
                    <main className="min-h-screen">
                    {children}
                    </main>
                    <Footer />
                </ReduxProvider>
            </body>
        </html>
    );
}
