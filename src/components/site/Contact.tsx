import { useState } from "react";
import { MapPin, Mail, Phone, Send } from "lucide-react";

export function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <section id="contact" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-14 max-w-2xl">
          <span className="text-[10px] font-medium uppercase tracking-[0.3em] text-accent">
            Get in touch
          </span>
          <h2 className="mt-3 font-serif text-4xl leading-tight text-foreground md:text-5xl">
            Let's design <span className="italic">together</span>.
          </h2>
          <p className="mt-4 text-muted-foreground">
            Open to full-time roles, freelance visualization, and BIM
            collaborations across Egypt and the Gulf.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-5">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
              setTimeout(() => setSent(false), 3000);
            }}
            className="lg:col-span-3 rounded-2xl border border-border bg-card p-6 md:p-8"
          >
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
              <Field label="Name" name="name" placeholder="Your name" />
              <Field
                label="Email"
                name="email"
                type="email"
                placeholder="you@studio.com"
              />
            </div>
            <div className="mt-5">
              <label className="text-[10px] font-semibold uppercase tracking-[0.25em] text-muted-foreground">
                Message
              </label>
              <textarea
                required
                rows={6}
                placeholder="Tell me about your project…"
                className="mt-2 w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-accent"
              />
            </div>
            <button
              type="submit"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-xs font-medium uppercase tracking-widest text-primary-foreground transition-colors hover:bg-accent"
            >
              {sent ? "Message sent" : "Send message"}
              <Send className="h-4 w-4" />
            </button>
          </form>

          <aside className="lg:col-span-2 rounded-2xl border border-border bg-primary p-6 text-primary-foreground md:p-8">
            <p className="text-[10px] font-semibold uppercase tracking-[0.3em] opacity-70">
              Contact Details
            </p>
            <h3 className="mt-3 font-serif text-2xl">Rahma Hitham</h3>
            <p className="mt-1 text-sm opacity-70">
              Architect & BIM Specialist
            </p>

            <ul className="mt-8 space-y-5">
              <Detail
                icon={<MapPin className="h-4 w-4" />}
                label="Location"
                value="El Obour City, Egypt"
              />
              <Detail
                icon={<Mail className="h-4 w-4" />}
                label="Email"
                value="rahmahitham91@gmail.com"
                href="mailto:rahmahitham91@gmail.com"
              />
              <Detail
                icon={<Phone className="h-4 w-4" />}
                label="Phone"
                value="+20 102 362 4634"
                href="tel:+201023624634"
              />
            </ul>
          </aside>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="text-[10px] font-semibold uppercase tracking-[0.25em] text-muted-foreground"
      >
        {label}
      </label>
      <input
        required
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        className="mt-2 w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-accent"
      />
    </div>
  );
}

function Detail({
  icon,
  label,
  value,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
}) {
  const content = (
    <div className="flex items-start gap-4">
      <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/10">
        {icon}
      </div>
      <div className="min-w-0">
        <p className="text-[10px] font-medium uppercase tracking-widest opacity-60">
          {label}
        </p>
        <p className="mt-1 break-words text-sm">{value}</p>
      </div>
    </div>
  );
  return (
    <li>
      {href ? (
        <a href={href} className="block transition-opacity hover:opacity-80">
          {content}
        </a>
      ) : (
        content
      )}
    </li>
  );
}
