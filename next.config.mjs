// Static export: `npm run build` writes plain HTML for every page into out/, so the pages show their full text
// without JavaScript (Google's OAuth review checks this) and can be hosted anywhere, including GitHub Pages.
// BASE_PATH is the folder the site lives under: "/mycampus" for https://<user>.github.io/mycampus/, "" for its own domain.
const basePath = process.env.BASE_PATH ?? "/mycampus";

/** @type {import('next').NextConfig} */
export default {
  output: "export",
  trailingSlash: true,
  basePath,
  images: { unoptimized: true },
  env: { NEXT_PUBLIC_BASE_PATH: basePath },
};
