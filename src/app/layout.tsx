import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";


const NotoSans = Noto_Sans_JP({
  weight: ["400"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Quantum Annealing For Everyone",
  description: "Quantum Annealing For Everyone",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={`${NotoSans.className} antialiased`}>
            {children}
      </body>
    </html>
  );
}
