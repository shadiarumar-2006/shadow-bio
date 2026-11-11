import type { Metadata } from "next";
import { Geist, Geist_Mono, Noto_Sans_Arabic, Noto_Kufi_Arabic } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "@/components/medical/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const notoArabic = Noto_Sans_Arabic({
  variable: "--font-noto-arabic",
  subsets: ["arabic", "latin"],
  weight: ["400", "500", "600", "700"],
});

const notoKufi = Noto_Kufi_Arabic({
  variable: "--font-noto-kufi",
  subsets: ["arabic", "latin"],
  weight: ["600", "700", "800"],
});

export const metadata: Metadata = {
  title: "شادو بايو | Shadow Bio - Biologic Medical",
  description:
    "Shadow Bio - A multilingual (Kurdish / Arabic / English) medical platform for the Biologic Medical department with AI assistant, 3D anatomical illustrations, and dark mode.",
  keywords: [
    "Shadow Bio",
    "شادو بايو",
    "Biologic Medical",
    "Medical AI",
    "Kurdish medical",
    "Arabic medical",
    "Anatomy 3D",
  ],
  authors: [{ name: "Shadow Bio Team" }],
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "Shadow Bio - Biologic Medical",
    description: "Multilingual medical platform with AI assistant and 3D anatomy",
    siteName: "Shadow Bio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shadow Bio - Biologic Medical",
    description: "Multilingual medical platform with AI assistant and 3D anatomy",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${notoArabic.variable} ${notoKufi.variable} antialiased bg-background text-foreground`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
