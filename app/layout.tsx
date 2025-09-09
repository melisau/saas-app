import type { Metadata } from "next";
import { Bricolage_Grotesque } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { ClerkProvider, SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from "@clerk/nextjs";

// Bricolage_Grotesque fontunu, font optimizasyonu için `next/font` üzerinden yüklüyoruz.
// Bu, font dosyalarının uygulama ile birlikte sunulmasını ve CLS (Cumulative Layout Shift) önlemesini sağlar.
// Yüklenen font, `--font-bricolage` CSS değişkeni ile kullanılabilir hale getirilir.
const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
});

// Statik meta verileri. Next.js, bu nesneyi kullanarak sayfanın <head> etiketini oluşturur.
// Bu, SEO (Arama Motoru Optimizasyonu) için önemlidir.
export const metadata: Metadata = {
  title: "Converso",
  description: "Real-time AI Teaching Platform",
};

export default function RootLayout({
  children, // `children` prop'u, aktif rota segmentinin render edilmiş içeriğini temsil eder.
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
      <html lang="en">
        <body className={`${bricolage.variable} antialiased`}>
          <ClerkProvider appearance={{variables: {colorPrimary:'#fe5933'}} }>
             <Navbar />
             {children}
          </ClerkProvider>
        </body>
      </html>
  );
}