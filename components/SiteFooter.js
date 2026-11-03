import Link from "next/link";
import { OPERATOR } from "../lib/legal";

export default function SiteFooter() {
  return <footer className="site-footer">
    <div className="wrap">
      <span>© 2026 {OPERATOR.name} · {OPERATOR.email}</span>
      <nav aria-label="Legal">
        <Link href="/privacy/">Privacy Notice</Link>
        <Link href="/terms/">Terms of Service</Link>
        <Link href="/refunds/">Refund Policy</Link>
      </nav>
    </div>
  </footer>;
}
