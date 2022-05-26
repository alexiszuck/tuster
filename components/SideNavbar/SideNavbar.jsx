import NavLink from "../Navbar/NavLink/NavLink";
import { Burger } from "@mantine/core";
import { useSelector, useDispatch } from "react-redux";
import { toggleNavbar } from "../../context/navbarSlice/navbarSlice";

const SideNavbar = () => {
  const isOpen = useSelector((state) => state.navbar.isOpen);

  return (
    <div
      className={`h-screen sticky bg-white top-0 w-3/5 max-w-xs ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } transition-transform duration-300`}
    >
      <div className="flex justify-between mr-4 h-full">
        <ul className="flex flex-col justify-around pt-20 h-1/3">
          <NavLink href="/">Home</NavLink>
          <NavLink href="/">About</NavLink>
          <NavLink href="/">Contact</NavLink>
          <NavLink href="/">Become a tutor</NavLink>
        </ul>
      </div>
    </div>
  );
};

export default SideNavbar;
