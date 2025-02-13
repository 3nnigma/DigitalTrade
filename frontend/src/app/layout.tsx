import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/providers/ThemeProvider";
import QueryClientProvider from "@/providers/QueryClientProvider";
import { Toaster } from "@/components/ui/toast";
import { SITE_NAME } from "@/lib/seo";
import Header from "@/components/common/header/header";
export const metadata: Metadata = {
  title: SITE_NAME,
  description: "Crypto/Trading/Bank and finance SaaS application",
};
const inter = Inter({
  subsets: ["latin", "cyrillic"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-inter",
  style: "normal",
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <QueryClientProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Header />
            {children}
            <Toaster />
          </ThemeProvider>
        </QueryClientProvider>
      </body>
    </html>
  );
}
