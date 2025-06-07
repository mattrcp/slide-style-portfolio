import "./globals.css";
import { PageTransitionProvider } from "./components/PageTransitionProvider";
import { ThemeProvider } from "./context/ThemeContext";
import ScrollToTop from "./components/ScrollToTop";
import { Analytics } from "@vercel/analytics/react";

export const metadata = {
  title: "Matt's Space 🚀",
  description:
    "Welcome to my workspace. Where I put everything from designing to developing.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title> <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.svg" sizes="any" />
        <meta name="description" content={metadata.description} />{" "}
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
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
