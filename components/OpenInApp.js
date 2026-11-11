"use client";
import { useEffect, useState } from "react";
import { LINKS } from "../lib/site";

const KINDS = { item: "a marketplace listing", study: "a past question or notes", board: "a campus notice", poll: "a campus election" };

// Reads ?to=<kind>/<id>, tries to open the app at naijacampus://open/<kind>/<id>, and offers the download if that didn't work.
export default function OpenInApp() {
  const [to, setTo] = useState(null);
  useEffect(() => {
    const v = new URLSearchParams(window.location.search).get("to") || "";
    const ok = /^(item|study|board|poll)\/[0-9a-f-]{36}$/i.test(v) ? v : "";
    setTo(ok);
    if (ok) window.location.href = `naijacampus://open/${ok}`;
  }, []);
  const kind = to?.split("/")[0];
  return <section className="open-card">
    <h1>{kind ? `Someone shared ${KINDS[kind]} with you` : "Open My campus"}</h1>
    <p className="lede">It opens in the My campus app. If nothing happened, open it below or get the app first. It’s free.</p>
    <div className="cta">
      {to && <a className="btn" href={`naijacampus://open/${to}`}>Open in the app</a>}
      {LINKS.android && <a className={`btn${to ? " quiet" : ""}`} href={LINKS.android}>Download for Android</a>}
      <a className="btn quiet" href={LINKS.webApp}>Use it in your browser</a>
    </div>
    <p className="fine">Only students at the same school can see campus posts. Sign up with your school to view it.</p>
  </section>;
}
