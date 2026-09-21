import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import SmoothScrollProvider from "@/components/SmoothScrollProvider";
import Cursor from "@/components/Cursor";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Typography system mirrored from the official PixelDrive site:
// Space Grotesk for display/headings, Inter for body.
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-display",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-body",
  display: "swap",
});

const GTM_ID = "GTM-M92VT3QP";

export const metadata: Metadata = {
  title: "Shaheed Khan · Growth Partner",
  description:
    "I build the acquisition engine, then I run it. Full funnel demand, the brand surface and the web layer for a US revenue cycle company and a global expansion firm. Founder of Pixeldrive.",
  icons: { icon: "/images/logo.png" },
  openGraph: {
    images: [
      {
        url: "https://iili.io/JBuCwva.png",
        type: "image/png",
        width: 1024,
        height: 1024,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      dir="ltr"
      lang="en-US"
      className={`${spaceGrotesk.variable} ${inter.variable}`}
    >
      <body>
        <Script id="gtm-base" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${GTM_ID}');`}
        </Script>
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <SmoothScrollProvider>
          <Cursor />
          <Navbar />
          <main>{children}</main>
          <Footer />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
