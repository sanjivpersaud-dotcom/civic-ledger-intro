import type { Metadata } from "next";
import "./style.css";

export const metadata: Metadata = {
  title: "Civic Ledger — Follow the public record",
  description: "A source-led guide to public actions, legislation, votes, campaign finance, and endorsements.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
