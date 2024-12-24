// src/app/layout.js
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/common/navbar';
import Footer from '@/components/common/footer';
import FloatingCTA from '@/components/common/FloatingCTA';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'TechWizard',
  description: 'Transformamos ideas en experiencias digitales',
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
        <FloatingCTA />
      </body>
    </html>
  );
}