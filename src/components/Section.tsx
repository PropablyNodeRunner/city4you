import type { PropsWithChildren } from "react";

export function PageHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <header className="border-b border-foreground/10 px-6 lg:px-20 pt-16 lg:pt-24 pb-12 lg:pb-20">
      <span className="font-mono text-xs uppercase tracking-[0.2em] text-foreground/50">
        / {eyebrow}
      </span>
      <h1 className="mt-6 text-5xl lg:text-7xl font-extrabold tracking-tighter leading-[0.95] text-balance uppercase">
        {title}
      </h1>
      {description && (
        <p className="mt-8 max-w-2xl text-lg text-foreground/70 leading-relaxed">{description}</p>
      )}
    </header>
  );
}

export function Section({ children, className = "" }: PropsWithChildren<{ className?: string }>) {
  return <section className={`px-6 lg:px-20 py-16 lg:py-24 ${className}`}>{children}</section>;
}
