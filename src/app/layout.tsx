import { Rajdhani } from "next/font/google";
import "./globals.css";

const font = Rajdhani({ subsets: ["latin"], weight: "400" });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body className={font.className}>{children}</body>
    </html>
  );
}
