import { Inter } from "next/font/google";
import "./globals.css";
import { icons } from "lucide-react";
import { Analytics } from "@vercel/analytics/react"

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "ekovegeance",
  description: "UI/UX Designer, dan Fullstack Developer",
  icons: {
    icon: '/favicon.svg',
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Analytics />
        </body>
    </html>
  );
}
