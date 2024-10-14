import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

const metadataBase = new URL('https://nihir-shah.netlify.app');

export const metadata: Metadata = {
  title: "Nihir Shah",
  description: "Senior Manager at Kotak Securities. React JS, Node JS, AWS. Ex DemandHelm, Infosys Ltd.",
  authors: [{ name: 'Nihir Shah', url: metadataBase }],
  keywords: ['Nihir', 'Nihir Shah', 'Nihir Praful Shah', 'Kotak Securities', 'Senior Manager', 'DemandHelm', 'Senior Software Engineer', 'React JS', 'Node JS', 'Next JS', 'AWS', 'Infosys'],
  creator: 'Nihir Shah',
  category: 'Portfolio',
  icons: new URL('/Nihir.jpg', metadataBase),
  twitter: {
    title: 'Nihir Shah',
    description: "Senior Manager at Kotak Securities. React JS, Node JS, AWS. Ex DemandHelm, Infosys Ltd.",
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
      <body className={inter.className}>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "${process.env.NEXT_PUBLIC_CLARITY_PROJECT_ID}");
            `,
          }}
        />
        {children}</body>
    </html>
  );
}
