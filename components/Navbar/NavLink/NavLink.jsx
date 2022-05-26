import { motion } from "framer-motion";
import Link from "next/link";

const NavLink = ({ children, href }) => {
  return (
    <motion.li
      whileHover={{ y: -3 }}
      className="tracking-wide mx-2 md:mx-4 font-roboto font-semibold text-sm"
    >
      <Link href={href}>
        <a>{children}</a>
      </Link>
    </motion.li>
  );
};

export default NavLink;
