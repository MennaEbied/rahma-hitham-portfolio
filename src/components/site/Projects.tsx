import { useMemo, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Plus, ChevronLeft, ChevronRight } from "lucide-react";

type Category = "Residential" | "Commercial" | "Interior Design";

type Project = {
  id: number;
  title: string;
  category: Category;
  image: string;
  images: string[];
  software: string;
  description: string;
};

const PROJECTS: Project[] = [
  // ==========================================
  // RESIDENTIAL CATEGORY
  // ==========================================
  {
    id: 1,
    title: "Old Egyptian-Style House",
    category: "Residential",
    image: "/projects/residential/old-egyptian-house/cover.jpeg",
    images: [
      "/projects/residential/old-egyptian-house/cover.jpeg",
      "/projects/residential/old-egyptian-house/view-2.jpeg",
      "/projects/residential/old-egyptian-house/view-3.jpeg",
      "/projects/residential/old-egyptian-house/view-4.jpeg",
      "/projects/residential/old-egyptian-house/view-5.jpeg",
      "/projects/residential/old-egyptian-house/view-6.jpeg",
    ],
    software: "Revit + Corona",
    description:
      "An interior design for a vintage Egyptian-style house ",
  },
  {
    id: 5,
    title: "Residential Building Façade",
    category: "Residential",
    image: "/projects/residential/residential-building/cover.jpeg",
    images: [
      "/projects/residential/residential-building/cover.jpeg",
      "/projects/residential/residential-building/view-2.jpeg",
    ],
    software: "Revit + Lumion",
    description:
      "Façade study for a mid-rise residential block — balcony rhythm, shading fins, and a restrained material palette.",
  },
  {
    id: 10,
    title: "Premium Villa in Aswan — Hassan Fathy Style",
    category: "Residential",
    image: "/projects/residential/villa-in-aswan/cover.jpeg",
    images: [
      "/projects/residential/villa-in-aswan/cover.jpeg",
      "/projects/residential/villa-in-aswan/view-2.jpeg",
      "/projects/residential/villa-in-aswan/view-3.jpeg",
      "/projects/residential/villa-in-aswan/view-4.jpeg",
    ],
    software: "Revit + Lumion",
    description:
      "A villa rooted in Hassan Fathy's language — mudbrick vaults, domes, and shaded courtyards tuned to Aswan's climate.",
  },
  {
    id: 12,
    title: "Garden Design",
    category: "Residential",
    image: "/projects/residential/garden-design/cover.png",
    images: [
      "/projects/residential/garden-design/cover.png",
      "/projects/residential/garden-design/view-2.png",
    ],
    software: "Lumion + Photoshop",
    description:
      "A garden with layered planting and a shaded seating area — designed for relaxation and social gatherings.",
  },

  // ==========================================
  // COMMERCIAL CATEGORY
  // ==========================================
  {
    id: 2,
    title: "Arbella Mall Terrace — New Cairo",
    category: "Commercial",
    image: "/projects/commercial/arabella-mall-terrace/cover.jpeg",
    images: [
      "/projects/commercial/arabella-mall-terrace/cover.jpeg",
      "/projects/commercial/arabella-mall-terrace/view-2.jpeg",
      "/projects/commercial/arabella-mall-terrace/view-3.jpeg",
      "/projects/commercial/arabella-mall-terrace/view-4.jpeg",
      "/projects/commercial/arabella-mall-terrace/view-5.jpeg",
    ],
    software: "3Ds Max + V-Ray",
    description:
      "Rooftop terrace concept for Arbella Mall, blending planted zones with retail-friendly circulation and warm evening lighting.",
  },
  {
    id: 11,
    title: "Shop Exterior Design",
    category: "Commercial",
    image: "/projects/commercial/shop-exterior-design/cover.png",
    images: [
      "/projects/commercial/shop-exterior-design/cover.png",
      "/projects/commercial/shop-exterior-design/view-2.png",
      "/projects/commercial/shop-exterior-design/view-3.png",
      "/projects/commercial/shop-exterior-design/view-4.png",
      "/projects/commercial/shop-exterior-design/view-5.png",
    ],
    software: "3Ds Max + Corona",
    description:
      "Storefront concept balancing brand identity with a soft, human-scaled entry sequence and warm signage.",
  },

  // ==========================================
  // INTERIOR DESIGN CATEGORY
  // ==========================================
  {
    id: 3,
    title: "Children's Room — Concept A",
    category: "Interior Design",
    image: "/projects/interior/childrens-room-a/cover.jpeg",
    images: [
      "/projects/interior/childrens-room-a/cover.jpeg",
      "/projects/interior/childrens-room-a/view-2.jpeg",
      "/projects/interior/childrens-room-a/view-3.jpeg",
      "/projects/interior/childrens-room-a/view-4.jpeg",
    ],
    software: "SketchUp + V-Ray",
    description:
      "A playful, softly-lit room organized around modular storage — every surface designed to grow with the child.",
  },
  {
    id: 4,
    title: "Children's Room — Concept B",
    category: "Interior Design",
    image: "/projects/interior/childrens-room-b/cover.jpeg",
    images: [
      "/projects/interior/childrens-room-b/cover.jpeg",
      "/projects/interior/childrens-room-b/view-2.jpeg",
      "/projects/interior/childrens-room-b/view-3.jpeg",
      "/projects/interior/childrens-room-b/view-4.jpeg",
      "/projects/interior/childrens-room-b/view-5.jpeg",
      "/projects/interior/childrens-room-b/view-6.jpeg",
    ],
    software: "SketchUp + V-Ray",
    description:
      "A quieter, nature-inspired alternative with soft sage tones, oak accents, and a reading nook framed in daylight.",
  },
  {
    id: 6,
    title: "Modern Bathroom",
    category: "Interior Design",
    image: "/projects/interior/modern-bathroom/cover.jpeg",
    images: [
      "/projects/interior/modern-bathroom/cover.jpeg",
      "/projects/interior/modern-bathroom/view-2.jpeg",
      "/projects/interior/modern-bathroom/view-3.jpeg",
    ],
    software: "3Ds Max + Corona",
    description:
      "Spa-inspired bathroom with a neutral palette, natural stone textures, and a focus on daylight and privacy.",
  },
  {
    id: 9,
    title: "Modern Bedroom",
    category: "Interior Design",
    image: "/projects/interior/modern-bedroom/cover.jpeg",
    images: [
      "/projects/interior/modern-bedroom/cover.jpeg",
      "/projects/interior/modern-bedroom/view-2.jpeg",
      "/projects/interior/modern-bedroom/view-3.jpeg",
      "/projects/interior/modern-bedroom/view-4.jpeg",
    ],
    software: "SketchUp + V-Ray",
    description:
      "A calm, low-contrast bedroom with a linen headboard wall and hidden linear lighting for a restful atmosphere.",
  },
  {
    id: 8,
    title: "Modern Living Room",
    category: "Interior Design",
    image: "/projects/interior/modern-living-room/cover.jpeg",
    images: [
      "/projects/interior/modern-living-room/cover.jpeg",
      "/projects/interior/modern-living-room/view-2.jpeg",
      "/projects/interior/modern-living-room/view-3.jpeg",
      "/projects/interior/modern-living-room/view-4.jpeg",
    ],
    software: "3Ds Max + V-Ray",
    description:
      "A modern living room with a neutral palette, layered textures, and a focus on natural light and open circulation.",
  },
  {
    id: 7,
    title: "Neo-Classical Living Room",
    category: "Interior Design",
    image: "/projects/interior/neo-classical-living-room/cover.jpeg",
    images: [
      "/projects/interior/neo-classical-living-room/cover.jpeg",
      "/projects/interior/neo-classical-living-room/view-2.jpeg",
      "/projects/interior/neo-classical-living-room/view-3.jpeg",
    ],
    software: "3Ds Max + Corona",
    description:
      "Neo-classical proportions with modern comfort — coffered ceilings, tailored millwork, and layered lighting.",
  },
];

const FILTERS = ["All", "Residential", "Commercial", "Interior Design"] as const;

export function Projects() {
  const [filter, setFilter] = useState<(typeof FILTERS)[number]>("All");
  const [active, setActive] = useState<Project | null>(null);
  const [currentImgIndex, setCurrentImgIndex] = useState<number>(0);

  const items = useMemo(
    () => (filter === "All" ? PROJECTS : PROJECTS.filter((p) => p.category === filter)),
    [filter],
  );

  // Safely open project and reset slide position back to start
  const handleOpenProject = (project: Project) => {
    setActive(project);
    setCurrentImgIndex(0);
  };

  const nextImage = (total: number) => {
    setCurrentImgIndex((prev) => (prev + 1) % total);
  };

  const prevImage = (total: number) => {
    setCurrentImgIndex((prev) => (prev - 1 + total) % total);
  };

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
              onClick={() => handleOpenProject(p)}
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
                  <h3 className="truncate font-serif text-lg text-foreground">{p.title}</h3>
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
        <DialogContent className="max-w-3xl overflow-hidden p-0 [&>button]:right-4 [&>button]:top-4 [&>button]:h-10 [&>button]:w-10 [&>button]:rounded-full [&>button]:bg-background/70 [&>button]:text-foreground [&>button]:backdrop-blur [&>button]:transition-opacity [&>button]:hover:bg-background [&>button]:border [&>button]:flex [&>button]:items-center [&>button]:justify-center [&>button]:shadow-md">
          {active && (
            <>
              {/* Image Viewport Container */}
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-gradient-to-br from-secondary to-accent/10 group/carousel">
                <img
                  src={active.images[currentImgIndex]}
                  alt={`${active.title} view ${currentImgIndex + 1}`}
                  className="h-full w-full object-cover transition-all duration-500"
                  onError={(e) => {
                    // Fallback configuration if a subfolder image path fails
                    (e.currentTarget as HTMLImageElement).src = active.image;
                  }}
                />

                {/* Left and Right Chevron Navigation Buttons */}
                {active.images && active.images.length > 1 && (
                  <>
                    <button
                      onClick={() => prevImage(active.images.length)}
                      className="absolute left-4 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-background/70 text-foreground shadow-md backdrop-blur opacity-0 group-hover/carousel:opacity-100 transition-opacity duration-300 hover:bg-background"
                      aria-label="Previous image"
                    >
                      <ChevronLeft className="h-5 w-5" />
                    </button>
                    <button
                      onClick={() => nextImage(active.images.length)}
                      className="absolute right-4 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-background/70 text-foreground shadow-md backdrop-blur opacity-0 group-hover/carousel:opacity-100 transition-opacity duration-300 hover:bg-background"
                      aria-label="Next image"
                    >
                      <ChevronRight className="h-5 w-5" />
                    </button>

                    {/* Navigation Progress Indicators / Mini Dots */}
                    <div className="absolute bottom-4 inset-x-0 flex justify-center gap-1.5 pointer-events-none">
                      {active.images.map((_, idx) => (
                        <div
                          key={idx}
                          className={`h-1.5 rounded-full transition-all duration-300 ${
                            currentImgIndex === idx ? "w-4 bg-white" : "w-1.5 bg-white/50"
                          }`}
                        />
                      ))}
                    </div>
                  </>
                )}
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
