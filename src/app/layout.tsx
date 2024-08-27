import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nihir Shah",
  description: "Senior Software Engineer at DemandHelm. React JS, Next JS, Tailwind CSS, Node JS",
  authors: [{ name: 'Nihir Shah', url: 'https://www.linkedin.com/in/nihir-shah' }],
  keywords: ['Nihir', 'Nihir Shah', 'Nihir Praful Shah', 'DemandHelm', 'Senior Software Engineer', 'React JS'],
  creator: 'Nihir Shah',
  category: 'Portfolio',
  icons: '../../public/Nihir.jpg',
  twitter: {
    title: 'Nihir Shah',
    description: "Senior Software Engineer at DemandHelm. React JS, Next JS, Tailwind CSS, Node JS",
    images: '/public/Nihir.jpg',
  }
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
