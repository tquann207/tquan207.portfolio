import type { Metadata } from "next";
import { PortfolioHome } from "@/components/portfolio-home";

export const metadata: Metadata = { alternates: { canonical: `${process.env.NEXT_PUBLIC_SITE_URL ?? "https://tquann207.github.io/tquan207.portfolio"}/` } };
export default function Home() { return <PortfolioHome />; }
