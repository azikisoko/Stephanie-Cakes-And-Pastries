import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "../components/theme-provider";
import { priestacy } from "../lib/fonts";
import Script from "next/script";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://stephaniecakes.com"), // update once real domain is live
  title: {
    default: "Stephanie Cakes & Pastries | Custom Cakes in Abuja",
    template: "%s | Stephanie Cakes & Pastries",
  },
  description:
    "Handcrafted cakes, pastries, and dessert experiences for birthdays, weddings, and celebrations in Abuja.",
  keywords: [
    "cakes in Abuja",
    "bakery Abuja",
    "birthday cake Abuja",
    "wedding cake Abuja",
    "small chops Abuja",
    "custom cakes Nigeria",
  ],
  openGraph: {
    title: "Stephanie Cakes & Pastries | Custom Cakes in Abuja",
    description:
      "Handcrafted cakes, pastries, and dessert experiences for birthdays, weddings, and celebrations in Abuja.",
    url: "https://stephaniecakes.com",
    siteName: "Stephanie Cakes & Pastries",
    images: [
      {
        url: "/og-default.jpg",
        width: 1200,
        height: 630,
        alt: "Stephanie Cakes & Pastries",
      },
    ],
    locale: "en_NG",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Stephanie Cakes & Pastries | Custom Cakes in Abuja",
    description:
      "Handcrafted cakes, pastries, and dessert experiences for birthdays, weddings, and celebrations in Abuja.",
    images: ["/og-default.jpg"],
  },
};

const themeInitScript = `
  (function() {
    try {
      var stored = localStorage.getItem('theme');
      var isDark = stored === 'dark' || (stored !== 'light' && window.matchMedia('(prefers-color-scheme: dark)').matches);
      if (isDark) document.documentElement.classList.add('dark');
    } catch (e) {}
  })();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${manrope.variable} ${priestacy.variable}`}
      suppressHydrationWarning
    >
      <head>
        <Script
          id="theme-init"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: themeInitScript }}
        />
      </head>
      <body className="font-body">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
