import { NavItem } from "./types";

export const baseUrl = "https://jsonplaceholder.typicode.com/todos";

export const navLinks: NavItem[] = [
  {
    label: "Home",
    to: "/",
  },
  {
    label: "About",
    to: "/about",
  },
  {
    label: "Todos",
    to: "/todos",
  },
];
