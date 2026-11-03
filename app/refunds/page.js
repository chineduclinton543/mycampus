import LegalArticle, { legalMetadata } from "../../components/LegalArticle";

export const metadata = legalMetadata("refunds");

export default function Page() {
  return <LegalArticle doc="refunds" />;
}
