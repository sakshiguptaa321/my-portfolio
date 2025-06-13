import Navbar from "@/components/navbar";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Sakshi Gupta | Portfolio | Full Stack Developer & Content Creator",
  description:
    "Sakshi Gupta, a final-year engineering student at REVA University, Bangalore. Passionate about web development, content creation, and solving real-world problems through tech.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        <main className="mt-10 bg-gray-50 min-h-screen">{children}</main>
      </body>
    </html>
  );
}
