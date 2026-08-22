type TechnicalLabelProps = { children: React.ReactNode; tone?: "default" | "inverse" | "accent"; className?: string };

export function TechnicalLabel({ children, tone = "default", className = "" }: TechnicalLabelProps) {
  return <span className={`technical-label technical-label--${tone} ${className}`}>{children}</span>;
}
