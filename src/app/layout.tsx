import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';
import { CartProvider } from '@/context/CartContext';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { CartDrawer } from '@/components/CartDrawer';
import { QuickViewModal } from '@/components/QuickViewModal';
import { EnquiryModal } from '@/components/EnquiryModal';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sans',
  weight: ['300', '400', '500', '600', '700', '800', '900'],
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-serif',
  weight: ['400', '500', '600', '700', '800', '900'],
});

export const metadata: Metadata = {
  title: 'Hygiene Innovations | Professional Essentials. Everyday Clean.',
  description:
    'Thoughtful cleaning, hygiene and food-service essentials for homes, workplaces and hospitality spaces across the UAE and GCC. Partnering with trusted global brands.',
  keywords: [
    'Hygiene Innovations',
    'Commercial cleaning supplies UAE',
    'Food service wrap dispensers',
    'Wrapmaster UAE',
    'Microfiber cloths Dubai',
    'Pedal bins commercial',
    'Hospitality hygiene essentials',
  ],
  authors: [{ name: 'Hygiene Innovations' }],
  openGraph: {
    title: 'Hygiene Innovations | Cleaner Spaces. Brighter Tomorrows.',
    description:
      'Professional cleaning, hygiene and food-service essentials across the UAE and GCC.',
    url: 'https://hygieneinnovations.ae',
    siteName: 'Hygiene Innovations',
    locale: 'en_AE',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} font-sans scroll-smooth`}>
      <body className="min-h-screen flex flex-col bg-[#FCFBF9] text-[#1E292B] antialiased selection:bg-[#023E46] selection:text-white">
        <CartProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
          <CartDrawer />
          <QuickViewModal />
          <EnquiryModal />
        </CartProvider>
      </body>
    </html>
  );
}
