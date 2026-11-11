import OpenInApp from "../../components/OpenInApp";

export const metadata = { title: "Open in the app", description: "Open this in the My campus app." };

// Shared links from the app land here (/open/?to=item/<id>), then hand over to the app if it's installed.
export default function Page() {
  return <div className="wrap"><OpenInApp /></div>;
}
