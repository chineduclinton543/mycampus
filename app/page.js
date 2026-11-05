import Link from "next/link";
import Hero from "../components/Hero";
import { FEES } from "../lib/site";

// One row per tab in the app, each with a small sample of what that tab shows.
const TABS = [
  ["Home", "The feed", "Posts, photos, videos and 24-hour stories from students at your school. Nothing from strangers on other campuses.",
    <div className="sample" key="h"><b>Chiamaka E.</b><p>Who else is stranded at the shuttle park? Third bus just went past full.</p></div>],
  ["Market", "Buy and sell on campus", "Phones, textbooks, clothes, hair, repairs. Every seller is rated by real buyers, and you pay the seller directly when you meet.",
    <div className="sample" key="m"><b>Casio fx-991ES calculator</b><p><span className="price">₦9,500</span> · Seller rated 4.9 from 23 reviews</p></div>],
  ["Vote", "Elections that count once", "SUG, faculty and departmental elections, plus contests like Mr & Miss Faculty. One secret vote per verified student.",
    <div className="sample ballot" key="v"><b>SUG President · closes Friday, 6pm</b><p><span className="bar" style={{ "--w": "58%" }}>Ifeanyi O.</span><span className="bar" style={{ "--w": "42%" }}>Zainab A.</span></p></div>],
  ["Rants", "Say it how it is", "Your name is never shown to other students. Rants that cross the line are reported and checked by moderators.",
    <div className="sample" key="r"><b>Anonymous</b><p>Hostel water has been off since Monday and nobody has said a word.</p></div>],
  ["Chat", "Message your coursemates", "Talk to anyone on your campus. Block someone and they can't reach you again.",
    <div className="sample chat" key="c"><p className="them">Did you get the PHY 201 past questions?</p><p className="me">Yes, sending now</p></div>],
];

const FAQ = [
  ["Is My campus free?", "Yes. Joining, the feed, rants, voting and chat are free. Posting a marketplace listing, boosting it, Premium and campus ads are optional paid services."],
  ["Which schools are on it?", "Universities, polytechnics and colleges of education across Nigeria. You pick your school from the list when you sign up, and it stays fixed so campuses stay real."],
  ["Are rants really anonymous?", "Other students never see who wrote a rant. My campus keeps a private record only so moderators can act on abuse and to comply with the law."],
  ["How do I pay for something from the marketplace?", "You pay the seller directly after meeting on campus and checking the item. My campus doesn't handle item payments."],
  ["How do I get verified?", "In the app, open Profile, then Verify, and send your registration number and a photo of your student ID card. A moderator checks it, and the photo is deleted afterwards."],
];

export default function Home() {
  return <div className="wrap">
    <Hero />

    <section className="block" id="features" aria-labelledby="tabs-h">
      <h2 id="tabs-h">Five tabs, one campus</h2>
      <div className="tabs-list">
        {TABS.map(([tab, h, p, sample]) => <div className="tab-row" key={tab}>
          <span className="tab-name">{tab}</span>
          <div><h3>{h}</h3><p>{p}</p></div>
          {sample}
        </div>)}
      </div>
    </section>

    <section className="block split" aria-labelledby="join-h">
      <h2 id="join-h">Joining takes two minutes</h2>
      <ol className="steps">
        <li><b>Sign up</b> with your email or Google account and pick your school.</li>
        <li><b>Get verified</b> with your registration number and student ID card. You'll need it to vote.</li>
        <li><b>Join in.</b> Post, sell, rant, vote and chat with students on your campus.</li>
      </ol>
    </section>

    <section className="block split" id="pricing" aria-labelledby="price-h">
      <div>
        <h2 id="price-h">What costs money</h2>
        <p className="sub">Everything else is free. Pay in naira by card, bank transfer or USSD.</p>
      </div>
      <div>
        <dl className="prices">
          <div><dt>Marketplace listing</dt><dd className="price">{FEES.listing}</dd><dd>Live for {FEES.listingDays} days. Buyers pay you directly.</dd></div>
          <div><dt>Boost a listing</dt><dd className="price">{FEES.boost}</dd><dd>Top of the marketplace for {FEES.boostDays} days.</dd></div>
          <div><dt>Premium</dt><dd className="price">{FEES.premium}</dd><dd>Unlimited chats and every campus for {FEES.premiumDays} days. Doesn't renew on its own.</dd></div>
          <div><dt>Campus ad</dt><dd className="price">from {FEES.adFrom}</dd><dd>In the Home slideshow and sent as a notification, for 1 to 30 days.</dd></div>
        </dl>
        <p className="fine">Read the <Link href="/refunds/">Refund Policy</Link> and the <Link href="/privacy/">Privacy Notice</Link>.</p>
      </div>
    </section>

    <section className="block split" id="faq" aria-labelledby="faq-h">
      <h2 id="faq-h">Questions</h2>
      <div className="faq">
        {FAQ.map(([q, a]) => <details key={q}><summary>{q}</summary><p>{a}</p></details>)}
      </div>
    </section>
  </div>;
}
