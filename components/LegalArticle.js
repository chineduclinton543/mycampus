import Link from "next/link";
import { legalDoc, UPDATED } from "../lib/legal";
import { FEES } from "../lib/site";

const ALL = [["privacy", "Privacy Notice"], ["terms", "Terms of Service"], ["refunds", "Refund Policy"]];

// One legal document, rendered from lib/legal.js (the same text as the in-app pages).
export default function LegalArticle({ doc }) {
  const d = legalDoc(doc, FEES);
  return <div className="wrap">
    <article className="legal">
      <p className="updated">Last updated {UPDATED}</p>
      <h1>{d.title}</h1>
      <p className="intro">{d.intro}</p>
      {d.sections.map(s => <section key={s.h}>
        <h2>{s.h}</h2>
        {s.p.map((t, i) => <p key={i}>{t}</p>)}
      </section>)}
      <nav aria-label="Other policies">
        {ALL.filter(([k]) => k !== doc).map(([k, l]) => <Link key={k} href={`/${k}/`}>{l}</Link>)}
      </nav>
    </article>
  </div>;
}

export const legalMetadata = doc => {
  const d = legalDoc(doc, FEES);
  return { title: d.title, description: `${d.title} for the My campus app.` };
};
