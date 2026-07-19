import { useMemo, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Plus } from "lucide-react";

type Category = "Residential" | "Commercial" | "Interior Design";

type Project = {
  id: number;
  title: string;
  category: Category;
  /**
   * Path to swap with your own image later. Map matches your Drive folder structure.
   * e.g. put files at /public/projects/residential/old-egyptian-house.jpg
   */
  image: string;
  software: string;
  description: string;
};

const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Old Egyptian-Style House",
    category: "Residential",
    image: "/projects/residential/old-egyptian-house.jpg",
    software: "Revit + Corona",
    description:
      "A tribute to vernacular Egyptian architecture — mashrabiya screens, courtyards, and passive cooling reinterpreted for a contemporary family home.",
  },
  {
    id: 2,
    title: "Arbella Mall Terrace — New Cairo",
    category: "Commercial",
    image: "/projects/commercial/arbella-mall-terrace.jpg",
    software: "3Ds Max + V-Ray",
    description:
      "Rooftop terrace concept for Arbella Mall, blending planted zones with retail-friendly circulation and warm evening lighting.",
  },
  {
    id: 3,
    title: "Children's Room — Concept A",
    category: "Interior Design",
    image: "/projects/interior/childrens-room-a.jpg",
    software: "SketchUp + V-Ray",
    description:
      "A playful, softly-lit room organized around modular storage — every surface designed to grow with the child.",
  },
  {
    id: 4,
    title: "Children's Room — Concept B",
    category: "Interior Design",
    image: "/projects/interior/childrens-room-b.jpg",
    software: "SketchUp + V-Ray",
    description:
      "A quieter, nature-inspired alternative with soft sage tones, oak accents, and a reading nook framed in daylight.",
  },
  {
    id: 5,
    title: "Residential Building Façade",
    category: "Residential",
    image: "/projects/residential/residential-facade.jpg",
    software: "Revit + Lumion",
    description:
      "Façade study for a mid-rise residential block — balcony rhythm, shading fins, and a restrained material palette.",
  },
  {
    id: 6,
    title: "Modern Bathroom",
    category: "Interior Design",
    image: "/projects/interior/modern-bathroom.jpg",
    software: "3Ds Max + Corona",
    description:
      "Spa-inspired bathroom in matte stone and brushed brass — a study in materiality and controlled reflections.",
  },
  {
    id: 7,
    title: "Neo-Classical Living Room",
    category: "Interior Design",
    image: "/projects/interior/neoclassical-living.jpg",
    software: "3Ds Max + Corona",
    description:
      "Neo-classical proportions with modern comfort — coffered ceilings, tailored millwork, and layered lighting.",
  },
  {
    id: 8,
    title: "Modern Living Room",
    category: "Interior Design",
    image: "/projects/interior/modern-living.jpg",
    software: "3Ds Max + V-Ray",
    description:
      "Warm minimalism: a monolithic fireplace, sculptural seating, and a curated palette of oak, linen and travertine.",
  },
  {
    id: 9,
    title: "Modern Bedroom",
    category: "Interior Design",
    image: "/projects/interior/modern-bedroom.jpg",
    software: "SketchUp + V-Ray",
    description:
      "A calm, low-contrast bedroom with a linen headboard wall and hidden linear lighting for a restful atmosphere.",
  },
  {
    id: 10,
    title: "Premium Villa in Aswan — Hassan Fathy Style",
    category: "Residential",
    image: "/projects/residential/aswan-villa-hassan-fathy.jpg",
    software: "Revit + Lumion",
    description:
      "A villa rooted in Hassan Fathy's language — mudbrick vaults, domes, and shaded courtyards tuned to Aswan's climate.",
  },
  {
    id: 11,
    title: "Shop Exterior Design",
    category: "Commercial",
    image: "/projects/commercial/shop-exterior.jpg",
    software: "3Ds Max + Corona",
    description:
      "Storefront concept balancing brand identity with a soft, human-scaled entry sequence and warm signage.",
  },
  {
    id: 12,
    title: "Garden Design",
    category: "Residential",
    image: "/projects/residential/garden-design.jpg",
    software: "Lumion + Photoshop",
    description:
      "A biophilic garden with layered planting, a shaded seating pergola, and a reflective water feature as the focal point.",
  },
];

const FILTERS = ["All", "Residential", "Commercial", "Interior Design"] as const;

export function Projects() {
  const [filter, setFilter] = useState<(typeof FILTERS)[number]>("All");
  const [active, setActive] = useState<Project | null>(null);

  const items = useMemo(
    () =>
      filter === "All"
        ? PROJECTS
        : PROJECTS.filter((p) => p.category === filter),
    [filter],
  );

  return (
    <section id="projects" className="relative bg-secondary/40 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-xl">
            <span className="text-[10px] font-medium uppercase tracking-[0.3em] text-accent">
              Selected Work
            </span>
            <h2 className="mt-3 font-serif text-4xl leading-tight text-foreground md:text-5xl">
              Projects & <span className="italic">visualization</span>.
            </h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {FILTERS.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`rounded-full border px-4 py-2 text-xs font-medium uppercase tracking-widest transition-all ${
                  filter === f
                    ? "border-accent bg-accent text-accent-foreground"
                    : "border-border bg-card text-muted-foreground hover:border-accent hover:text-accent"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((p) => (
            <button
              key={p.id}
              onClick={() => setActive(p)}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card text-left animate-scale-in"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-gradient-to-br from-secondary to-accent/10">
                <img
                  src={p.image}
                  alt={p.title}
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).style.display = "none";
                  }}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/85 via-primary/20 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <div className="absolute inset-x-0 bottom-0 translate-y-4 p-5 text-primary-foreground opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                  <p className="text-[10px] font-medium uppercase tracking-widest text-accent-foreground/80">
                    {p.software}
                  </p>
                  <p className="mt-1 font-serif text-lg">View project</p>
                </div>
                <div className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-background/80 text-foreground opacity-0 backdrop-blur transition-opacity duration-300 group-hover:opacity-100">
                  <Plus className="h-4 w-4" />
                </div>
              </div>
              <div className="flex items-start justify-between gap-4 p-5">
                <div className="min-w-0">
                  <h3 className="truncate font-serif text-lg text-foreground">
                    {p.title}
                  </h3>
                  <p className="mt-1 text-[10px] font-medium uppercase tracking-widest text-muted-foreground">
                    {p.category}
                  </p>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      <Dialog open={!!active} onOpenChange={(o) => !o && setActive(null)}>
        <DialogContent className="max-w-3xl overflow-hidden p-0">
          {active && (
            <>
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-gradient-to-br from-secondary to-accent/10">
                <img
                  src={active.image}
                  alt={active.title}
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).style.display = "none";
                  }}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="p-6 md:p-8">
                <DialogHeader className="text-left">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-accent">
                    {active.category}
                  </p>
                  <DialogTitle className="mt-2 font-serif text-2xl md:text-3xl">
                    {active.title}
                  </DialogTitle>
                  <DialogDescription className="pt-2 text-base leading-relaxed">
                    {active.description}
                  </DialogDescription>
                </DialogHeader>
                <div className="mt-5 flex flex-wrap items-center gap-2">
                  <span className="text-[10px] font-medium uppercase tracking-widest text-muted-foreground">
                    Software
                  </span>
                  {active.software.split("+").map((s) => (
                    <span
                      key={s}
                      className="rounded-full border border-accent/40 bg-accent/5 px-3 py-1 text-xs text-accent"
                    >
                      {s.trim()}
                    </span>
                  ))}
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
