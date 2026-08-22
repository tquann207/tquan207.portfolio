import type { Metadata } from "next";
import { withBasePath } from "@/content/site-config";
import "./globals.css";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  "https://quan-tran-engineering.tvmquan-us.chatgpt.site";
const socialImageUrl = `${siteUrl.replace(/\/$/, "")}/og.png`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Quan Tran — Mechanical Engineering Portfolio",
    template: "%s — Quan Tran",
  },
  description:
    "Mechanical Engineering student at the University of Cincinnati focused on design, testing, validation, prototyping, and physical product development.",
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
      <body className="antialiased">{children}</body>
    </html>
  );
}
