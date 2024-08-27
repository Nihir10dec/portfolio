import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

const metadataBase = new URL('https://nihir-shah.netlify.app');

export const metadata: Metadata = {
  title: "Nihir Shah",
  description: "Senior Software Engineer at DemandHelm. React JS, Node JS, AWS",
  authors: [{ name: 'Nihir Shah', url: metadataBase }],
  keywords: ['Nihir', 'Nihir Shah', 'Nihir Praful Shah', 'DemandHelm', 'Senior Software Engineer', 'React JS', 'Node JS', 'Next JS'],
  creator: 'Nihir Shah',
  category: 'Portfolio',
  icons: new URL('/Nihir.jpg', metadataBase),
  twitter: {
    title: 'Nihir Shah',
    description: "Senior Software Engineer at DemandHelm. React JS, Node JS, AWS",
    images: {
      url: new URL('/Nihir.jpg', metadataBase), // Resolves to https://your-domain.com/path-to-your-image.jpg
    },
  },
  openGraph: {
    images: [
      {
        url: new URL('/Nihir.jpg', metadataBase), // Resolves to https://your-domain.com/path-to-your-image.jpg
      },
    ],
  },
  metadataBase
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
