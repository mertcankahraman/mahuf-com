// --- src/app/layout.tsx dosyasının SON HALİ ---
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Providers from "./providers";
import Header from "@/components/Header";
import LeftSidebar from "@/components/LeftSidebar";
import RightSidebar from "@/components/RightSidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mahuf.com",
  description: "İnteraktif Sözlük Projesi",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // next-themes'in hatasız çalışması için suppressHydrationWarning eklendi.
    <html lang="tr" suppressHydrationWarning>
      {/* Karanlık/Aydınlık mod için arkaplan ve metin renkleri burada tanımlandı. */}
      <body className={`${inter.className} bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200`}>
        <Providers>
          <div className="flex flex-col min-h-screen">
            <Header />
            <div className="w-full max-w-[1240px] mx-auto flex flex-grow">
              <LeftSidebar />
              <main className="flex-1 p-4 md:p-8">
                {children} 
              </main>
              <RightSidebar />
            </div>
          </div>
        </Providers>
      </body>
    </html>
  );
}
