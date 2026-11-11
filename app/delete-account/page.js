import { OPERATOR } from "../../lib/legal";

export const metadata = { title: "Delete your account", description: "How to delete your My campus account and data." };

// Google Play requires a web page that explains how to delete an account without reinstalling the app.
export default function Page() {
  return <div className="wrap">
    <article className="legal">
      <h1>Delete your My campus account</h1>
      <p className="intro">You can delete your account and data at any time, straight from the app.</p>
      <h2>In the app</h2>
      <p>Open My campus, tap your photo at the top to go to your profile, scroll to the bottom and tap <b>Delete account</b>. Type DELETE to confirm. Your account is deleted straight away.</p>
      <h2>Without the app</h2>
      <p>Email <a href={`mailto:${OPERATOR.email}?subject=Delete%20my%20account`}>{OPERATOR.email}</a> from the email address you signed up with and ask us to delete your account. We do it within 7 days and reply to confirm.</p>
      <h2>What’s deleted</h2>
      <p>Your profile and photo, posts, stories, comments, likes, marketplace listings, chats, seller reviews, rants, past questions and notes you shared, campus notices, votes, verification details and every file you uploaded.</p>
      <h2>What’s kept</h2>
      <p>Records of payments you made (amount, date and what it was for) are kept for up to 6 years for accounting and tax, without your name or account. Votes you cast stay counted in closed elections, but nothing links them to you.</p>
    </article>
  </div>;
}
