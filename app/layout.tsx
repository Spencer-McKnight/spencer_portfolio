import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Spencer | Portfolio',
  description: 'Personal portfolio site for Spencer.'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}


