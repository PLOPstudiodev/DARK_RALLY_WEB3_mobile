import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const inter = Poppins({ subsets: ["latin"], weight: '400' });

export async function generateMetadata(): Promise<Metadata> {

  return {
    title: "DARK RALLY X",
    metadataBase: new URL('https://x.darkrally.com'),
    openGraph: {
      title: "DARK RALLY X",
      images: '/images/logo.png'
    }

  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
