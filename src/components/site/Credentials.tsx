import {
  GraduationCap,
  Briefcase,
  BookOpen,
  Cpu,
  Award,
  Music,
} from "lucide-react";

const software = [
  "Revit",
  "AutoCAD",
  "SketchUp",
  "3Ds Max",
  "V-Ray",
  "Corona",
  "Lumion",
  "Photoshop",
  "Illustrator",
  "InDesign",
  "ArcGIS",
];

export function Credentials() {
  return (
    <section id="experience" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-14 max-w-2xl">
          <span className="text-[10px] font-medium uppercase tracking-[0.3em] text-accent">
            Credentials
          </span>
          <h2 className="mt-3 font-serif text-4xl leading-tight text-foreground md:text-5xl">
            Education, experience & <span className="italic">craft</span>.
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-6 md:grid-rows-[auto_auto_auto]">
          {/* Education */}
          <Card className="md:col-span-3 md:row-span-1">
            <Header icon={<GraduationCap className="h-5 w-5" />} label="Education" />
            <h3 className="font-serif text-2xl text-foreground">
              B.Sc. Architecture Engineering
            </h3>
            <p className="mt-1 text-sm text-muted-foreground">
              Zagazig University · Very Good with Honors (83%)
            </p>
            <div className="mt-5 rounded-xl border border-accent/30 bg-accent/5 p-4">
              <p className="text-[10px] font-semibold uppercase tracking-widest text-accent">
                Graduation Project · Graded Excellent
              </p>
              <p className="mt-1 text-sm text-foreground">
                Investment Valley with a Biophilic Hospital
              </p>
            </div>
          </Card>

          {/* Experience */}
          <Card className="md:col-span-3">
            <Header icon={<Briefcase className="h-5 w-5" />} label="Professional Experience" />
            <ul className="space-y-4">
              <li>
                <p className="font-serif text-lg text-foreground">
                  Full-Time Remote Architect
                </p>
                <p className="text-xs uppercase tracking-widest text-accent">
                  WE DO Office
                </p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Architectural visualization for major Saudi commercial concepts —
                  Half Million, Sign, Qandorah, and residential villas.
                </p>
              </li>
              <li className="border-t border-border pt-4">
                <p className="font-serif text-lg text-foreground">
                  Part-Time BIM Architect
                </p>
                <p className="text-xs uppercase tracking-widest text-accent">
                  Buildix Back Office
                </p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Qiddiya North East Transport Hub & Parking, KSA.
                </p>
              </li>
            </ul>
          </Card>

          {/* Training */}
          <Card className="md:col-span-2">
            <Header icon={<BookOpen className="h-5 w-5" />} label="Training & Internships" />
            <ul className="space-y-3 text-sm text-foreground">
              <TrainingItem title="Arab Architecture School" meta="240 hrs" />
              <TrainingItem
                title="Hassan Allam Construction"
                meta="Site Internship"
              />
              <TrainingItem
                title="KAITECH BIM Diploma"
                meta="100 hrs · Architectural"
              />
              <TrainingItem
                title="KAITECH Digital Engineering"
                meta="Program"
              />
            </ul>
          </Card>

          {/* Software */}
          <Card className="md:col-span-2">
            <Header icon={<Cpu className="h-5 w-5" />} label="Software Ecosystem" />
            <div className="flex flex-wrap gap-2">
              {software.map((s) => (
                <span
                  key={s}
                  className="rounded-full border border-border bg-secondary/60 px-3 py-1 text-xs font-medium tracking-wide text-foreground transition-colors hover:border-accent hover:text-accent"
                >
                  {s}
                </span>
              ))}
            </div>
          </Card>

          {/* Honors */}
          <Card className="md:col-span-2 bg-primary text-primary-foreground border-primary">
            <div className="mb-3 flex items-center gap-2 text-[10px] font-medium uppercase tracking-[0.25em] opacity-70">
              <Award className="h-4 w-4" />
              Honors & Craft
            </div>
            <h3 className="font-serif text-2xl">3rd Place · Roots of Pride</h3>
            <p className="mt-2 text-sm opacity-80">
              Recognized in the Roots of Pride design competition for cultural
              storytelling through architecture.
            </p>
            <div className="mt-6 flex items-center gap-3 border-t border-white/10 pt-4">
          
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}

function Card({
  className = "",
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={`hover-lift group rounded-2xl border border-border bg-card p-6 md:p-7 ${className}`}
    >
      {children}
    </div>
  );
}

function Header({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <div className="mb-4 flex items-center gap-2 text-accent">
      {icon}
      <span className="text-[10px] font-semibold uppercase tracking-[0.25em]">
        {label}
      </span>
    </div>
  );
}

function TrainingItem({ title, meta }: { title: string; meta: string }) {
  return (
    <li className="flex items-start justify-between gap-3 border-b border-border/60 pb-3 last:border-0 last:pb-0">
      <span className="min-w-0">{title}</span>
      <span className="shrink-0 text-xs uppercase tracking-widest text-muted-foreground">
        {meta}
      </span>
    </li>
  );
}
