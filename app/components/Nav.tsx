import { NavLink } from "@remix-run/react";
import cx from "classix";

const prefetch = "viewport";

const NAV = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

/* <Link
  to={{
    pathname: "/some/path",
    search: "?query=string",
    hash: "#hash",
  }}
/>; */

export function Nav() {
  return (
    <nav className="fixed left-0 top-0 z-10 flex min-h-[10vh] w-full items-center px-gx">
      <ul className="flex gap-2">
        {NAV.map((nav) => (
          <li key={nav.href}>
            <NavLink
              prefetch={prefetch}
              to={nav.href}
              className={({ isActive, isPending }) =>
                cx(
                  isActive && "text-pink",
                  isPending && "text-blue",
                  "underline",
                )
              }
            >
              {nav.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
