import LegalArticle, { legalMetadata } from "../../components/LegalArticle";

export const metadata = legalMetadata("terms");

export default function Page() {
  return <LegalArticle doc="terms" />;
}
