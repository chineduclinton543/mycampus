"use client";
import { useState } from "react";
import { LINKS } from "../lib/site";

// A short pick of schools for the headline. The app itself lists every university, polytechnic and college of education.
const SCHOOLS = [
  ["UNILAG", "University of Lagos"], ["UI", "University of Ibadan"], ["UNN", "University of Nigeria, Nsukka"],
  ["OAU", "Obafemi Awolowo University"], ["ABU", "Ahmadu Bello University"], ["UNIBEN", "University of Benin"],
  ["UNIZIK", "Nnamdi Azikiwe University"], ["UNILORIN", "University of Ilorin"], ["UNIPORT", "University of Port Harcourt"],
  ["LASU", "Lagos State University"], ["FUTA", "Federal University of Technology, Akure"], ["FUTO", "Federal University of Technology, Owerri"],
  ["BUK", "Bayero University, Kano"], ["UNICAL", "University of Calabar"], ["UNIJOS", "University of Jos"],
  ["COVENANT", "Covenant University"], ["BABCOCK", "Babcock University"], ["YABATECH", "Yaba College of Technology"],
  ["DELSU", "Delta State University"], ["EKSU", "Ekiti State University"],
];

// The opening of the page: the headline names the visitor's own school, and the phone shows that campus.
export default function Hero() {
  const [abbr, setAbbr] = useState("UNILAG");
  return <section className="hero">
    <div className="hero-copy">
      <h1>
        What's happening at{" "}
        <span className="school-pick">
          <span aria-hidden="true">{abbr}</span>
          <select value={abbr} onChange={e => setAbbr(e.target.value)} aria-label="Choose a school">
            {SCHOOLS.map(([a, n]) => <option key={a} value={a}>{a} · {n}</option>)}
          </select>
        </span>
        {" "}today?
      </h1>
      <p className="lede">My campus is the app for students at Nigerian universities, polytechnics and colleges of education. Your feed, marketplace, rants and elections come only from your own school.</p>
      <div className="cta">
        {LINKS.android && <a className="btn" href={LINKS.android}>Download for Android</a>}
        <a className={`btn${LINKS.android ? " quiet" : ""}`} href={LINKS.webApp}>Open My campus</a>
      </div>
      <p className="fine">Free to join with your email or Google account.</p>
    </div>

    <figure className="phone" aria-label={`The ${abbr} feed in the app`}>
      <div className="phone-top"><strong>{abbr}</strong><span>124 online</span></div>
      <div className="phone-feed">
        <article className="p-card">
          <header><b>Ada O.</b> Computer Science · 2h</header>
          <p>Library is open till midnight for the whole exam period. Finally.</p>
        </article>
        <article className="p-card">
          <header><b>Tunde B.</b> Marketplace</header>
          <p>Fairly used HP laptop, 8GB RAM. Meet at the faculty car park.</p>
          <footer><span className="price">₦180,000</span> Seller rated 4.8</footer>
        </article>
        <article className="p-card rant">
          <header><b>Anonymous</b> Rant · 20m</header>
          <p>Why does every 8am lecture start at 8:40?</p>
          <footer>61 reactions</footer>
        </article>
        <article className="p-card">
          <header><b>SUG Elections</b> Vote · closes Friday</header>
          <p>Voting for SUG President is open. One vote per verified student.</p>
        </article>
      </div>
      <nav className="phone-tabs" aria-hidden="true">
        <span className="on">Home</span><span>Market</span><span className="plus">+</span><span>Vote</span><span>Rants</span>
      </nav>
    </figure>
  </section>;
}
