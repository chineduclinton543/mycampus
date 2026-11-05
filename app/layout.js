import SiteFooter from "../components/SiteFooter";
import SiteHeader from "../components/SiteHeader";
import { themeScript } from "../lib/theme";
import "./globals.css";

export const metadata = {
  title: { default: "My campus · The app for Nigerian students", template: "%s · My campus" },
  description: "My campus is the student app for Nigerian universities, polytechnics and colleges of education: campus feed, marketplace, anonymous rants, elections and chat.",
};

export default function RootLayout({ children }) {
  return <html lang="en" suppressHydrationWarning>
    <head>
      <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      {/* The app's own typeface; the CSS falls back to system fonts if it can't load. */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" />
    </head>
    <body>
      <SiteHeader />
      <main>{children}</main>
      <SiteFooter />
    </body>
  </html>;
}
