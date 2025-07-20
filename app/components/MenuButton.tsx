export function MenuButton({
  expanded,
  toggleMenu,
}: {
  expanded: boolean;
  toggleMenu: () => void;
}) {
  return (
    <button
      data-slot="popover-trigger"
      className="whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg:not([class*='size-'])]:size-4 shrink-0 [&amp;_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive hover:text-accent-foreground px-4 py-2 has-[>svg]:px-3 extend-touch-target h-8 touch-manipulation items-center justify-start gap-2.5 !p-0 hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 active:bg-transparent dark:hover:bg-transparent flex lg:hidden"
      type="button"
      aria-haspopup="dialog"
      aria-expanded={expanded}
      aria-controls="radix-«Rmplb»"
      data-state="closed"
      onClick={toggleMenu}
      data-expanded={expanded}
    >
      <div className="relative flex h-8 w-4 items-center justify-center">
        <div className="relative size-4">
          <span
            className={`bg-black dark:bg-white absolute left-0 block h-0.5 w-4 transition-all duration-100 ${
              expanded ? " top-[0.4rem] -rotate-45" : "top-1"
            }`}
          />
          <span className=""></span>
          <span
            className={`bg-black dark:bg-white absolute left-0 block h-0.5 w-4 transition-all duration-100 ${
              expanded ? " top-[0.4rem] rotate-45" : "top-2.5"
            }`}
          />
        </div>
        <span className="sr-only">Toggle Menu</span>
      </div>
    </button>
  );
}
