import "./globals.css";
import { PageTransitionProvider } from "./components/PageTransitionProvider";
import { ThemeProvider } from "./context/ThemeContext";
import ScrollToTop from "./components/ScrollToTop";
import { Analytics } from "@vercel/analytics/react";

export const metadata = {
  title: "Matt's Space 🚀",
  description:
    "Welcome to my workspace. Where I put everything from designing to developing.",
  metadataBase: new URL("https://www.ratchapon.com"),
  openGraph: {
    type: "website",
    url: "https://www.ratchapon.com",
    title: "Matt's Space 🚀",
    description:
      "Welcome to my workspace. Where I put everything from designing to developing.",
    images: [
      {
        url: "/assets/thumbnail.png",
        width: 1200,
        height: 630,
        alt: "Matt's Space - Portfolio Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Matt's Space 🚀",
    description:
      "Welcome to my workspace. Where I put everything from designing to developing.",
    images: ["/assets/thumbnail.png"],
  },
  icons: {
    icon: [
      { url: "/assets/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/assets/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/assets/favicon.ico", sizes: "any" },
    ],
    apple: [
      {
        url: "/assets/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className="antialiased bg-primaryBg">
        <ThemeProvider>
          <PageTransitionProvider>
            {children}
            {/* <ScrollToTop /> */}
          </PageTransitionProvider>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
