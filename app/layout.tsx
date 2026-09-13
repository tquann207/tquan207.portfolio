import type { Metadata } from "next";
import { withBasePath } from "@/content/site-config";
import "./globals.css";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  "https://tquann207.github.io/tquan207.portfolio";
const socialImageUrl = `${siteUrl.replace(/\/$/, "")}/og.png`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Quan Tran — Mechanical Engineering Portfolio",
    template: "%s — Quan Tran",
  },
  description:
    "Quan Tran, University of Cincinnati Mechanical Engineering student and Bosch Testing & Validation Engineer Intern. Projects in mechanical design, prototyping, and product development for internship and co-op opportunities.",
  openGraph: {
    type: "website",
    title: "Quan Tran — Mechanical Engineering Portfolio",
    description: "Design. Build. Test. Analyze. Improve.",
    images: [{ url: socialImageUrl, width: 1200, height: 630, alt: "Quan Tran Mechanical Engineering Portfolio" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Quan Tran — Mechanical Engineering Portfolio",
    description: "Design. Build. Test. Analyze. Improve.",
    images: [socialImageUrl],
  },
  icons: {
    icon: withBasePath("/favicon.svg"),
    shortcut: withBasePath("/favicon.svg"),
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body id="top" className="antialiased"><a className="skip-link" href="#main-content">Skip to main content</a><noscript><style>{"@media(max-width:760px){.menu-button{display:none}.navbar{position:static;height:auto}.navbar-inner{flex-wrap:wrap;padding-block:12px}.nav-links{display:flex;flex-wrap:wrap;gap:8px 20px}}"}</style></noscript>{children}</body>
    </html>
  );
}
