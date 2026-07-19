export function Footer() {
  return (
    <footer className="border-t border-border py-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 sm:px-6 md:flex-row lg:px-8">
        <p className="text-xs uppercase tracking-widest text-muted-foreground">
          © {new Date().getFullYear()} Rahma Hitham. All rights reserved.
        </p>
        <p className="text-xs uppercase tracking-widest text-muted-foreground">
          Architect · BIM Specialist
        </p>
      </div>
    </footer>
  );
}
