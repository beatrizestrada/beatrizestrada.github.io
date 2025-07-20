import { useState } from "react";
import { NavLink } from "./NavLink";
import { MenuButton } from "./MenuButton";

export function Menu() {
  const [expanded, setExpanded] = useState(false);

  const toggleMenu = () => {
    setExpanded((prev) => !prev);
  };

  return (
    <div className="flex items-center">
      <MenuButton expanded={expanded} toggleMenu={toggleMenu} />
      {expanded && (
        <>
          <nav
            id="radix-«Rmplb»"
            className="absolute top-16 right-0 z-50 w-full bg-white dark:bg-zinc-900 p-4"
          >
            <ul className="space-y-2">
              <li>
                <NavLink href="/" onClick={toggleMenu}>
                  about
                </NavLink>
              </li>
              <li>
                <NavLink href="/publications" onClick={toggleMenu}>
                  publications
                </NavLink>
              </li>
              <li>
                <NavLink href="/CamposEstrada_CV.pdf" onClick={toggleMenu}>
                  cv
                </NavLink>
              </li>
              <li>
                <NavLink href="/CamposEstrada_thesis.pdf" onClick={toggleMenu}>
                  thesis
                </NavLink>
              </li>
            </ul>
          </nav>
          <div
            className="fixed top-16 inset-0 z-40 bg-black/40 dark:bg-black/60"
            aria-hidden="true"
            onClick={toggleMenu}
          />
        </>
      )}
    </div>
  );
}
