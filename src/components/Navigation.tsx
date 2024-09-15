import { NavLink } from "react-router-dom";
import { Container } from "./Container";
import { NavItem } from "../types";

type NavigationProps = {
  ariaLabelVal?: "primary navigation" | "secondary navigation";
  navLinks: NavItem[];
};

export const Navigation: React.FC<NavigationProps> = ({
  ariaLabelVal = "primary navigation",
  navLinks,
}) => {
  return (
    <nav
      className="flex py-section-padding bg-neutral-50 shadow-md"
      aria-label={ariaLabelVal}
    >
      <Container>
        <ul
          role="list"
          aria-label="Main navigation"
          className="flex justify-start items-center gap-x-4"
        >
          {navLinks.map((link) => (
            <li key={link.label} role="listitem">
              <NavLink
                className={({ isActive, isPending }) => {
                  return isActive
                    ? "font-bold text-accent"
                    : isPending
                    ? "font-[#ccc]"
                    : "font-medium transition-colors hover:text-accent-hover";
                }}
                to={link.to}
                end={link.to === "/todos"}
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </Container>
    </nav>
  );
};
