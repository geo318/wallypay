import Link from "next/link";
import { NavItemProps } from "./types";

export const NavItem: React.FC<NavItemProps> = ({ text, link }) => (
  <li className="list-none font-medium text-sm">
    <Link href={link}>{text}</Link>
  </li>
);
