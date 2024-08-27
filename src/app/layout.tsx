import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

const metadataBase = new URL('https://nihir-shah.netlify.app/');

export const metadata: Metadata = {
  title: "Nihir Shah",
  description: "Senior Software Engineer at DemandHelm. React JS, Next JS, Tailwind CSS, Node JS",
  authors: [{ name: 'Nihir Shah', url: metadataBase }],
  keywords: ['Nihir', 'Nihir Shah', 'Nihir Praful Shah', 'DemandHelm', 'Senior Software Engineer', 'React JS'],
  creator: 'Nihir Shah',
  category: 'Portfolio',
  icons: '../../public/Nihir.jpg',
  twitter: {
    title: 'Nihir Shah',
    description: "Senior Software Engineer at DemandHelm. React JS, Next JS, Tailwind CSS, Node JS",
    images: {
      url: new URL('/public/Nihir.jpg', metadataBase), // Resolves to https://your-domain.com/path-to-your-image.jpg
    },
  },
  openGraph: {
    images: [
      {
        url: new URL('/public/Nihir.jpg', metadataBase), // Resolves to https://your-domain.com/path-to-your-image.jpg
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
