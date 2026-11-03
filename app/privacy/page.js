import LegalArticle, { legalMetadata } from "../../components/LegalArticle";

export const metadata = legalMetadata("privacy");

export default function Page() {
  return <LegalArticle doc="privacy" />;
}
