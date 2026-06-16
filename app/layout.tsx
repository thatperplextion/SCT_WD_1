import type { Metadata } from 'next';
import { Manrope } from 'next/font/google';
import './globals.css';
import { SiteHeader } from '@/components/site-header';

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
});

export const metadata: Metadata = {
  title: 'Pulse Navigation',
  description: 'A fixed navigation menu that changes style on scroll and hover.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={manrope.variable}>
        <SiteHeader />
        <main>{children}</main>
      </body>
    </html>
  );
}
  