import { SITE, NAV } from "@/data/site";

export default function Footer() {
  return (
    <footer className="relative border-t border-line">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="flex flex-col justify-between gap-12 md:flex-row">
          {/* brand + status */}
          <div className="max-w-xs">
            <div className="flex items-center gap-2.5">
              <span className="relative grid h-6 w-6 place-items-center">
                <span className="absolute h-2 w-2 rounded-full bg-accent shadow-[0_0_12px_2px_var(--color-accent)]" />
                <span className="absolute h-6 w-6 rounded-full border border-accent/40" />
              </span>
              <span className="font-display text-lg font-semibold tracking-tight">
                {SITE.name}
              </span>
            </div>
            <p className="mt-4 font-mono text-xs leading-relaxed text-muted">
              {SITE.tagline}
            </p>
            <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-line px-3 py-1.5">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
              </span>
              <span className="font-mono text-[10px] uppercase tracking-widest text-muted">
                {SITE.domain} · {SITE.status}
              </span>
            </div>
          </div>

          {/* links */}
          <div className="grid grid-cols-2 gap-12 sm:grid-cols-3">
            <FooterCol
              title="Platform"
              links={NAV.map((n) => ({ label: n.label, href: n.href }))}
            />
            <FooterCol
              title="Product"
              links={[
                { label: "Launch App", href: SITE.appUrl },
                { label: "Request Access", href: "#waitlist" },
                { label: "Documentation", href: SITE.github },
              ]}
            />
            <FooterCol
              title="Company"
              links={[
                { label: "GitHub", href: SITE.github, external: true },
                { label: "Status", href: "#" },
                { label: "Security", href: "#" },
              ]}
            />
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-line pt-7 sm:flex-row sm:items-center">
          <p className="font-mono text-[11px] text-muted">
            © {new Date().getFullYear()} {SITE.name}. Authorised security testing
            only.
          </p>
          <a
            href={SITE.github}
            target="_blank"
            rel="noreferrer"
            data-cursor
            className="font-mono text-[11px] text-muted transition-colors hover:text-accent"
          >
            github.com/xxxoff/Kryx ↗
          </a>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string; external?: boolean }[];
}) {
  return (
    <div>
      <h4 className="font-mono text-[10px] uppercase tracking-widest text-muted">
        {title}
      </h4>
      <ul className="mt-4 space-y-2.5">
        {links.map((l) => (
          <li key={l.label}>
            <a
              href={l.href}
              data-cursor
              {...(l.external ? { target: "_blank", rel: "noreferrer" } : {})}
              className="font-mono text-xs text-text/80 transition-colors hover:text-accent"
            >
              {l.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
