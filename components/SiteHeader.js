import Link from "next/link";
import { asset } from "../lib/site";
import ThemeToggle from "./ThemeToggle";

export default function SiteHeader() {
  return <header className="site-header">
    <div className="wrap">
      <Link href="/" className="brand"><img src={asset("/logo.png")} alt="" width={34} height={34} />My campus</Link>
      <nav className="site-nav" aria-label="Main">
        <Link href="/#features">Features</Link>
        <Link href="/#pricing">Pricing</Link>
        <Link href="/#faq">FAQ</Link>
        <Link href="/privacy/">Privacy</Link>
      </nav>
      <ThemeToggle />
    </div>
  </header>;
}
