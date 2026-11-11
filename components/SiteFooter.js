import Link from "next/link";
import { OPERATOR } from "../lib/legal";

export default function SiteFooter() {
  return <footer className="site-footer">
    <div className="wrap">
      <div>
        <strong>My campus</strong>
        <p>{OPERATOR.name}{OPERATOR.address && `, ${OPERATOR.address}`}<br /><a href={`mailto:${OPERATOR.email}`}>{OPERATOR.email}</a></p>
      </div>
      <nav aria-label="Legal">
        <Link href="/privacy/">Privacy Notice</Link>
        <Link href="/terms/">Terms of Service</Link>
        <Link href="/refunds/">Refund Policy</Link>
        <Link href="/delete-account/">Delete your account</Link>
      </nav>
      <small>© 2026 {OPERATOR.name}</small>
    </div>
  </footer>;
}
