// Site-wide settings. Edit these, then rebuild.
export const LINKS = {
  webApp: "https://naija-campus.expo.app",
  // The Android APK from your EAS build (expo.dev → your build → Install). Empty hides the download button.
  android: "",
};

// Must match the live price list in the app (public.prices table).
export const FEES = {
  listing: "₦500", listingDays: 30,
  boost: "₦300", boostDays: 3,
  premium: "₦1,500", premiumDays: 30,
  adFrom: "₦1,000",
};

// Prefix for files in public/ (Next adds it to links automatically, but not to plain <img> paths).
export const asset = p => `${process.env.NEXT_PUBLIC_BASE_PATH || ""}${p}`;
