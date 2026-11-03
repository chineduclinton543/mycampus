import Link from "next/link";
import { OPERATOR } from "../lib/legal";
import { FEES, LINKS } from "../lib/site";

const FEATURES = [
  ["F", "Your campus feed", "Updates, photos, videos and 24-hour stories from students at your school."],
  ["M", "Marketplace", "Sell and find items on campus: phones, books, clothes, services. Sellers are rated by real buyers."],
  ["R", "Anonymous rants", "Say it how it is. Your name is never shown, and reports are checked by moderators."],
  ["V", "Elections and contests", "Secret, one-vote-per-student SUG and departmental elections, plus campus contests like Mr & Miss Faculty."],
  ["C", "Chat", "Message students on your campus. Block anyone, any time."],
  ["✓", "Verified students", "Students verify with their registration number and ID card, so you know who's real."],
];

const FAQ = [
  ["Is My campus free?", "Yes. Joining, the feed, rants, voting and chatting on your campus are free. Posting a marketplace listing, boosting it, Premium and ads are optional paid services."],
  ["Which schools are on My campus?", "Universities, polytechnics and colleges of education across Nigeria. You pick your school when you sign up, and your feed shows students from it."],
  ["Are rants really anonymous?", "Other students never see who wrote a rant. My campus keeps a private record only so moderators can act on abuse and to comply with the law."],
  ["How do I pay for something I buy in the marketplace?", "You pay the seller directly, after meeting on campus and checking the item. My campus doesn't handle item payments."],
  ["How do I get verified?", "In the app, go to Profile, then Verify, and send your registration number and a photo of your student ID card. A moderator checks it, and the photo is deleted afterwards."],
];

export default function Home() {
  return <>
    <div className="wrap">
      <section className="hero">
        <div>
          <span className="eyebrow">For Nigerian students</span>
          <h1>Everything happening on your campus, in one app.</h1>
          <p className="lede">My campus is the app for students of Nigerian universities, polytechnics and colleges of education. See what's going on, buy and sell, rant anonymously, vote in elections and chat with students at your school.</p>
          <div className="cta">
            {LINKS.android && <a className="btn" href={LINKS.android}>Download for Android</a>}
            <a className={`btn${LINKS.android ? " ghost" : ""}`} href={LINKS.webApp}>Open My campus</a>
            <a className="btn ghost" href="#features">See what's inside</a>
          </div>
          <p className="fine">Free to join with your email or Google account.</p>
        </div>
        <div className="preview" aria-label="What the campus feed looks like">
          <div className="bar">UNILAG <span>124 online</span></div>
          <div className="post">
            <div className="who"><span className="dot">A</span>Ada O. <small>· Computer Science · 2h</small></div>
            <p>Library extends opening hours to midnight during exams. Finally!</p>
          </div>
          <div className="post">
            <div className="who"><span className="dot">T</span>Tunde B. <small>· Marketplace</small></div>
            <p>Fairly used HP laptop, 8GB RAM. Meet at the faculty car park.</p>
            <span className="tag">₦180,000 · ★ 4.8</span>
          </div>
          <div className="post">
            <div className="who"><span className="dot">?</span>Anonymous <small>· Rant · 20m</small></div>
            <p>Why does every 8am lecture start at 8:40?</p>
            <span className="tag hot">🔥 42 · 😂 18</span>
          </div>
          <div className="post">
            <div className="who"><span className="dot">V</span>SUG Elections 2026</div>
            <p>Voting closes Friday, 6pm. One vote per verified student.</p>
            <span className="tag">Vote now</span>
          </div>
        </div>
      </section>

      <section className="block" id="features">
        <h2>What you can do</h2>
        <p className="sub">Built around your own school, so everything you see is from students you actually share a campus with.</p>
        <div className="grid">
          {FEATURES.map(([icon, h, p]) => <div className="card" key={h}><div className="icon" aria-hidden="true">{icon}</div><h3>{h}</h3><p>{p}</p></div>)}
        </div>
      </section>

      <section className="block">
        <h2>Getting started</h2>
        <ol className="steps">
          <li><h3>Sign up</h3><p>Use your email or Google account and pick your school from the list.</p></li>
          <li><h3>Get verified</h3><p>Send your registration number and student ID card to get the ✓ and vote in elections.</p></li>
          <li><h3>Join in</h3><p>Post, sell, rant, vote and chat with students on your campus.</p></li>
        </ol>
      </section>

      <section className="block" id="pricing">
        <h2>Pricing</h2>
        <p className="sub">Using My campus is free. These optional services are paid in naira by card, bank transfer or USSD, through our payment provider.</p>
        <div className="table-wrap">
          <table>
            <thead><tr><th>Service</th><th>Price</th><th>What you get</th></tr></thead>
            <tbody>
              <tr><td>Post a marketplace listing</td><td className="price">{FEES.listing}</td><td>Your item is live for {FEES.listingDays} days. Buyers pay you directly.</td></tr>
              <tr><td>Boost a listing</td><td className="price">{FEES.boost}</td><td>Pinned to the top of the marketplace for {FEES.boostDays} days.</td></tr>
              <tr><td>Premium</td><td className="price">{FEES.premium}</td><td>Unlimited chats and browsing every campus for {FEES.premiumDays} days. Doesn't renew automatically.</td></tr>
              <tr><td>Campus ads</td><td className="price">from {FEES.adFrom}</td><td>Your ad in the Home slideshow and as a notification, for 1 to 30 days.</td></tr>
            </tbody>
          </table>
        </div>
        <p className="fine">See our <Link href="/refunds/">Refund Policy</Link>. How we use your data: <Link href="/privacy/">Privacy Notice</Link>.</p>
      </section>

      <section className="block" id="faq">
        <h2>Questions</h2>
        {FAQ.map(([q, a]) => <details key={q}><summary>{q}</summary><p>{a}</p></details>)}
      </section>

      <section className="block">
        <h2>Contact</h2>
        <p>{OPERATOR.name}, {OPERATOR.address}. Email <a href={`mailto:${OPERATOR.email}`}>{OPERATOR.email}</a>.</p>
      </section>
    </div>
  </>;
}
