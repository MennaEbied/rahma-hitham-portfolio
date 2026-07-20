import { useEffect, useState } from "react";
import { Linkedin, Palette, ArrowDown, Leaf } from "lucide-react";

// Reusable micro-component for smooth calculation/interpolation counting
function CountUp({ end, duration = 3500 }: { end: number; duration?: number }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number | null = null;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;

      // Calculate linear progression mapped against duration limits
      const progressRatio = Math.min(progress / duration, 1);

      // Apply an out-quad easing curve to slow down the count at the end
      const easeOutQuad = progressRatio * (2 - progressRatio);

      setCount(Math.floor(easeOutQuad * end));

      if (progress < duration) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [end, duration]);

  return <>{count}</>;
}

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28">
      {/* Subtle background flourish */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.06]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, var(--slate-deep) 1px, transparent 0)",
          backgroundSize: "28px 28px",
        }}
      />
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <div className="animate-fade-up">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/5 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.25em] text-accent">
            <Leaf className="h-3 w-3" />
            Biophilic · Sustainable · BIM
          </div>
          <h1 className="font-serif text-5xl font-semibold leading-[1.05] tracking-tight text-foreground sm:text-6xl md:text-7xl">
            Rahma
            <br />
            <span className="italic text-accent">Hitham.</span>
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
            Junior Architect & BIM Specialist bridging technical precision with biophilic,
            sustainable design — from Egyptian heritage homes to large-scale commercial concepts
            across the Gulf.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-xs font-medium uppercase tracking-widest text-primary-foreground transition-all hover:bg-accent hover:text-accent-foreground"
            >
              Explore Work
              <ArrowDown className="h-4 w-4" />
            </a>

            <div className="flex items-center gap-2">
              <a
                href="https://www.linkedin.com/in/rahma-hitham"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border text-foreground transition-all hover:border-accent hover:text-accent"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href="https://www.behance.net/rahmahitham"
                target="_blank"
                rel="noreferrer"
                aria-label="Behance"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border text-foreground transition-all hover:border-accent hover:text-accent"
              >
                <Palette className="h-4 w-4" />
              </a>
            </div>
          </div>

          <dl className="mt-14 grid max-w-md grid-cols-3 gap-6 border-t border-border pt-8">
            <div>
              <dt className="text-[10px] font-medium uppercase tracking-widest text-muted-foreground">
                Grade
              </dt>
              <dd className="mt-1 font-serif text-2xl text-foreground">
                <CountUp end={83} />%
              </dd>
            </div>
            <div>
              <dt className="text-[10px] font-medium uppercase tracking-widest text-muted-foreground">
                Honors
              </dt>
              <dd className="mt-1 font-serif text-2xl text-foreground">V. Good</dd>
            </div>
            <div>
              <dt className="text-[10px] font-medium uppercase tracking-widest text-muted-foreground">
                Projects
              </dt>
              <dd className="mt-1 font-serif text-2xl text-foreground">
                <CountUp end={12} />+
              </dd>
            </div>
          </dl>
        </div>

        {/* Right frame */}
        <div className="relative animate-fade-up [animation-delay:150ms]">
          <div className="absolute -left-4 -top-4 hidden h-full w-full rounded-3xl border border-accent/40 lg:block" />
          <div className="relative overflow-hidden rounded-3xl border border-border bg-card shadow-[0_30px_60px_-30px_rgba(30,41,59,0.35)]">
            <div className="relative aspect-[4/5] w-full bg-slate-100">
              {/* Project Image Render */}
              <img
                src="/hero.png"
                alt="Biophilic Hospital Graduation Project"
                className="h-full w-full object-cover"
                onError={(e) => {
                  e.currentTarget.src =
                    "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80";
                }}
              />

              {/* Text Badge Overlaid on the Top Left */}
              <div className="absolute top-0 left-0 right-0 bg-gradient-to-b from-black/60 via-black/20 to-transparent p-6 pt-7 text-white">
                <p className="font-serif text-xl font-medium tracking-tight md:text-2xl">
                  Biophilic Hospital
                </p>
                <p className="text-[10px] font-medium uppercase tracking-widest text-white/80 mt-0.5">
                  Graduation Project · Graded Excellent
                </p>
              </div>
            </div>

            <div className="flex items-center justify-between border-t border-border px-6 py-4">
              <span className="text-[10px] font-medium uppercase tracking-widest text-muted-foreground">
                Featured Render
              </span>
              <span className="text-[10px] font-medium uppercase tracking-widest text-accent">
                Revit · Corona
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
