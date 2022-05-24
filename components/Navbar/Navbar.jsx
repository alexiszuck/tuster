import Link from "next/link";

import { motion } from "framer-motion";
const NavLink = ({ children, href }) => {
  return (
    <motion.li
      whileHover={{ y: -3 }}
      className="tracking-wide mx-4 font-roboto font-semibold text-sm"
    >
      <Link href={href}>
        <a>{children}</a>
      </Link>
    </motion.li>
  );
};

const Navbar = () => {
  return (
    <nav className="flex justify-between px-10 py-3 bg-white">
      <ul className="flex items-center">
        <NavLink href="/">Home</NavLink>
        <NavLink href="/">About</NavLink>
        <NavLink href="/">Contact</NavLink>
        <NavLink href="/">Become a tutor</NavLink>
      </ul>

      <ul className="flex items-center">
        <NavLink href="/">Log In</NavLink>
        <NavLink href="/">Log Out</NavLink>
        <li>
          <button className="text-white bg-blue-500 py-2 px-6 rounded-full hover:bg-blue-600 transition-all font-roboto">
            Sign Up
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
