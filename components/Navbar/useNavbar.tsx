import { NavbarProps } from "./types";

export const useNavbar = () => {
  const navList = [
    { text: "Products", link: "/" },
    { text: "Partnership", link: "/products" },
    { text: "About us", link: "/about" },
    { text: "Blog", link: "/contact" },
    { text: "Contact", link: "/contact" },
    { text: "Eng", link: "/contact" },
  ];

  return { navList };
};
