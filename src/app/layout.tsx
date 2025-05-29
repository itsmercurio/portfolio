import type { Metadata } from "next";
import { Nunito_Sans } from 'next/font/google';
import "./globals.css";

const nunitoSans = Nunito_Sans({ 
  subsets: ['latin'],
  weight: ['300', '400', '600', '700', '800'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Portfolio - Full Stack Developer",
  description: "Portfolio profesional mostrando proyectos y habilidades en React, Angular, Express, Spring Boot y más",
  keywords: ["portfolio", "desarrollador", "full stack", "react", "angular", "express", "spring boot"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={nunitoSans.className}>
      <body className="antialiased" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
