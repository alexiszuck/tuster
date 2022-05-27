import Link from "next/link";
import { motion } from "framer-motion";
const SideNavLink = ({ children, href }) => {
  return (
    <motion.li
      whileHover={{ x: 6 }}
      className="text-lg text-gray-600 text-center cursor-pointer rounded-md py-2 w-4/5 hover:bg-blue-100 hover:text-blue-500"
    >
      <Link href={href}>
        <a>{children}</a>
      </Link>
    </motion.li>
  );
};

export default SideNavLink;
