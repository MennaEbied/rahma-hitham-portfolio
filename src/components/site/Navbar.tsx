import { useEffect, useState } from "react";
import { Menu, X, FileText } from "lucide-react";
import logoAsset from "@/assets/logo.svg.asset.json";

const links = [
  { href: "#home", label: "Home" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

const CERTIFICATES_URL =
  "https://drive.google.com/drive/folders/1N1_VUw5NNgCa3c15uTHOtV6rP7NR--g9";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 glass transition-all duration-300 ${
        scrolled ? "py-2" : "py-3"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <a href="#home" className="flex items-center gap-3 group">
          <img
            src={logoAsset.url}
            alt="Rahma Hitham monogram"
            className="h-10 w-auto transition-transform duration-300 group-hover:scale-105"
          />
          <span className="hidden text-xs font-medium uppercase tracking-widest text-foreground sm:inline">
            Rahma Hitham
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-xs font-medium uppercase tracking-widest text-muted-foreground transition-colors hover:text-accent"
            >
              {l.label}
            </a>
          ))}
          <a
            href={CERTIFICATES_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-accent px-4 py-2 text-xs font-medium uppercase tracking-widest text-accent transition-all hover:bg-accent hover:text-accent-foreground"
          >
            <FileText className="h-3.5 w-3.5" />
            View Certificates
          </a>
        </nav>

        <button
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-md text-foreground md:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-background/95 backdrop-blur md:hidden animate-fade-in-slow">
          <div className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2 text-sm font-medium uppercase tracking-widest text-foreground hover:bg-secondary"
              >
                {l.label}
              </a>
            ))}
            <a
              href={CERTIFICATES_URL}
              target="_blank"
              rel="noreferrer"
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full border border-accent px-4 py-2 text-xs font-medium uppercase tracking-widest text-accent"
            >
              <FileText className="h-3.5 w-3.5" /> View Certificates
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
