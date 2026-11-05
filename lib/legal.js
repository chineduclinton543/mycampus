// Terms of Service, Privacy Notice and Refund Policy shown at /legal/terms, /legal/privacy and /legal/refunds.
// DRAFT for the owner to approve, ideally after a Nigerian lawyer has reviewed it. Fill in OPERATOR before launch:
// it's the legal identity students are agreeing with and that the Nigeria Data Protection Act requires us to name.
// Prices are read from the live price list in the app, so they stay in step with what's charged.

export const OPERATOR = {
  name: "mycampusapp",                          // the business name behind My campus (use the CAC-registered name once registered)
  address: "",                                  // registered business address; left out of the text while empty
  email: "support@mycampusapp.com.ng",                   // where students write about their account, data and refunds
  privacyEmail: "support@mycampusapp.com.ng",            // can be the same as email; NDPA requests go here
};

export const UPDATED = "3 November 2026";

// Each document: { title, intro, sections: [{ h, p: [paragraph, …] }] }. `fees` fills in current prices.
export function legalDoc(key, fees) {
  const o = OPERATOR, f = fees;
  const at = o.address ? `, ${o.address}` : "";
  const docs = {
    terms: {
      title: "Terms of Service",
      intro: `These terms are an agreement between you and ${o.name} ("My campus", "we"), the operator of the My campus app and website. By creating an account or using My campus, you agree to them. If you don’t agree, don’t use the app.`,
      sections: [
        { h: "1. Who can use My campus", p: [
          "My campus is for students of Nigerian universities, polytechnics and colleges of education. You must be at least 18, or have the permission of a parent or guardian, to create an account.",
          "You must give accurate details, including the school you attend. Your school is fixed once you join. You’re responsible for keeping your password safe and for everything done with your account.",
        ] },
        { h: "2. Verified students", p: [
          "You can ask to be verified by sending your registration number and a photo of your student ID card. We check it by hand. A registration number can only belong to one account. We may refuse or remove verification if details don’t match or appear false.",
          "Some features, such as voting in elections and creating polls, are only for verified students.",
        ] },
        { h: "3. Your content and conduct", p: [
          "You own what you post, but you give My campus permission to show it to other students and to store, copy and display it as needed to run the service.",
          "Don’t post anything illegal, threatening, hateful, harassing, sexually explicit, defamatory or that shares someone’s private information; don’t impersonate others, spam, scam or sell prohibited items (such as drugs, weapons, stolen or counterfeit goods, exam papers or anything illegal in Nigeria).",
          "Rants are shown without your name, but we keep a private record of who wrote them so we can act on abuse and comply with the law.",
        ] },
        { h: "4. Reports, removal and suspension", p: [
          "Students can report rants and listings. Our moderators review reports and may remove content that breaks these terms. If 20 different students’ reports against your rants are upheld, your account is suspended for 14 days. We may also suspend or close accounts for serious or repeated breaches, or where the law requires it.",
        ] },
        { h: "5. Marketplace", p: [
          "Sellers pay My campus a fee to post a listing. Buyers pay sellers directly, outside the app (for example cash or bank transfer). My campus is not a party to any sale, doesn’t hold or handle the money for items, and doesn’t guarantee items, sellers or buyers.",
          "Meet in a public place on campus and inspect items before you pay. Disputes about an item are between the buyer and the seller, but please report scams so moderators can act. Ratings and reviews must be honest and based on a real dealing with the seller.",
        ] },
        { h: "6. Elections and contests", p: [
          "Votes are secret and final. Election admins appointed for each campus create official elections. My campus provides the voting tool but isn’t responsible for how a students’ union or department runs or recognises an election.",
        ] },
        { h: "7. Paid services and fees", p: [
          `Current prices: posting a listing ${f.listing} for ${f.listingDays} days; a boost ${f.boost} for ${f.boostDays} days; Premium ${f.premium} for ${f.premiumDays} days; campus ads from ${f.adFrom} (every-campus ads cost 3 times as much). Prices are shown before you pay and may change; a change doesn’t affect anything you’ve already paid for.`,
          "Payments are processed by our payment provider, Bachs. We don’t see or store your card details. Premium, boosts and listings run for the period you paid for and don’t renew automatically. Refunds follow our Refund Policy.",
        ] },
        { h: "8. The service", p: [
          "We work to keep My campus available and safe, but we provide it “as is” and can’t promise it will always be available, error-free or that content posted by students is accurate. We may change, add or remove features.",
        ] },
        { h: "9. Liability", p: [
          "To the extent the law allows, My campus isn’t liable for indirect or consequential losses, for anything students post, or for dealings between students (including marketplace sales). Our total liability to you for any claim is limited to the fees you paid us in the 12 months before the claim. Nothing in these terms limits rights you have under Nigerian consumer protection law.",
        ] },
        { h: "10. Ending your account", p: [
          `You can stop using My campus at any time and ask us to delete your account by writing to ${o.email}. We may suspend or close accounts as described in section 4.`,
        ] },
        { h: "11. Changes and law", p: [
          "We may update these terms. We’ll tell you about important changes in the app; continuing to use My campus after a change means you accept it. These terms are governed by the laws of the Federal Republic of Nigeria.",
          `Questions? Contact ${o.name}${at}, ${o.email}.`,
        ] },
      ],
    },

    privacy: {
      title: "Privacy Notice",
      intro: `This notice explains what personal data My campus collects, why, who we share it with and your rights under the Nigeria Data Protection Act 2023 (NDPA). The data controller is ${o.name}${at}. Contact: ${o.privacyEmail}.`,
      sections: [
        { h: "1. What we collect", p: [
          "Account: your name, email address, password (stored scrambled) or Google sign-in details, and profile photo.",
          "Student details: school, department, level and, if you choose, your WhatsApp number (kept private and shown only on your marketplace listings).",
          "Verification (only if you ask to be verified): your registration number and a photo of your student ID card.",
          "What you create: posts, stories, comments, likes, rants and replies (shown without your name, but linked to your account privately), marketplace listings, reviews, polls and votes (we record that you voted so you can’t vote twice; other students can’t see how you voted), chats and reports.",
          "Payments: what you paid for, amount and status. Card and bank details are handled by Bachs, not us.",
          "Technical: app activity needed to run the service, such as when you’re online (shown to students at your campus) and basic logs.",
        ] },
        { h: "2. Why we use it, and our lawful basis", p: [
          "To provide My campus to you, including your campus feed, marketplace, chats, elections and payments (performance of our contract with you).",
          "To verify students and keep the community safe: moderating reports, preventing fraud, duplicate accounts and abuse (legitimate interests, and to comply with the law).",
          "To process payments and keep financial records (contract and legal obligation).",
          "To send you account emails such as confirmations and password reset codes (contract).",
          "Where we rely on your consent (for example, your optional profile photo or WhatsApp number), you can withdraw it at any time.",
        ] },
        { h: "3. Who we share it with", p: [
          "Other students see what you choose to share, such as your profile, posts and listings. Rants never show your name.",
          "Service providers who process data for us under contract: Supabase (database and file storage, hosted in the European Union, Frankfurt), Bachs (payments), Google (if you sign in with Google), Resend (email delivery) and Expo (app delivery and web hosting).",
          "Authorities, where Nigerian law requires it or to protect someone’s safety.",
          "We don’t sell your personal data.",
        ] },
        { h: "4. Transfers outside Nigeria", p: [
          "Some providers store or process data outside Nigeria (for example in the European Union). We use providers that protect data to a standard at least equivalent to the NDPA, as the Act requires.",
        ] },
        { h: "5. How long we keep it", p: [
          "Account and profile data: while your account is open, then deleted when you close it, except what we must keep by law.",
          "ID card photos: deleted after a moderator has reviewed your verification request. We keep the registration number to stop it being used on another account.",
          "Payment records: as long as Nigerian tax and accounting law requires (generally up to 6 years).",
          "Chats and content you delete are removed from the app; copies may remain in backups for a short time.",
        ] },
        { h: "6. Your rights", p: [
          "Under the NDPA you can ask to access your data, correct it, delete it, receive a copy in a portable format, object to or restrict how we use it, and withdraw consent. Write to us at the address below; we’ll reply within the time the law sets.",
          "If you’re unhappy with how we handle your data, you can complain to the Nigeria Data Protection Commission (NDPC).",
        ] },
        { h: "7. Security", p: [
          "We use access controls, encryption in transit and private storage for sensitive items such as ID cards. No system is perfectly secure, so please use a strong password and keep it to yourself.",
        ] },
        { h: "8. Children", p: [
          "My campus is for students aged 18 and over, or younger students with the permission of a parent or guardian. If you believe a child is using My campus without permission, contact us.",
        ] },
        { h: "9. Changes and contact", p: [
          `We may update this notice and will tell you about important changes in the app. Contact: ${o.name}${at}, ${o.privacyEmail}.`,
        ] },
      ],
    },

    refunds: {
      title: "Refund Policy",
      intro: "This policy covers fees you pay to My campus. It doesn’t cover items you buy from other students, because those payments go directly to the seller.",
      sections: [
        { h: "Listing fees", p: [
          "Refunded if your listing couldn’t go live because of a problem on our side, or if moderators removed it by mistake. Not refunded once the listing has gone live, or if it was removed for breaking our Terms.",
        ] },
        { h: "Boosts and Premium", p: [
          "Not refundable once active, except if you were charged twice for the same thing or what you paid for wasn’t delivered.",
        ] },
        { h: "Campus ads", p: [
          "Refundable before the ad goes live. After it goes live, refunded only if moderators removed it by mistake.",
        ] },
        { h: "Items bought from other students", p: [
          "Not covered. My campus isn’t part of the sale. Meet and inspect before you pay, and report scams so moderators can act.",
        ] },
        { h: "How to ask, and how long it takes", p: [
          `Write to ${o.email} within 14 days of the payment with the email on your account and what you paid for. Approved refunds go back to the card or wallet you paid with, usually within 5 to 7 working days. Payments made by bank transfer are refunded by bank transfer to an account in your name.`,
        ] },
      ],
    },
  };
  return docs[key] || null;
}
