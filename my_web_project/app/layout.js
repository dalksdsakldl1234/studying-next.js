import localFont from "next/font/local";
import "./globals.css";
import Link from "next/link";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <header className="bg-gray-100 p-4">
          <nav>
            <ul className="flex space-x-4">
              <li><Link href="/" className="hover:underline">홈</Link></li>
              <li><Link href="/community" className="hover:underline">커뮤니티</Link></li>
              <li><Link href="/meals" className="hover:underline">식사</Link></li>
              <li><Link href="/meals/others" className="hover:underline">다른 식사</Link></li>
              <li><Link href="/meals/share" className="hover:underline">식사 공유</Link></li>
            </ul>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
