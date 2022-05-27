import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { toggleNavbar } from "../../context/navbarSlice/navbarSlice";
import { Burger } from "@mantine/core";
import NavLink from "./NavLink/NavLink";

const Navbar = () => {
  const isOpen = useSelector((state) => state.navbar.isOpen);
  const title = isOpen ? "Close Navigation" : "Open Navigation";
  const dispatch = useDispatch();
  return (
    <nav className="flex justify-between px-4 md:px-10 py-3 bg-white shadow-sm ">
      <div>
        <Burger
          opened={isOpen}
          onClick={() => {
            dispatch(toggleNavbar());
          }}
          title={title}
        />
      </div>
      <ul className="flex items-center">
        <NavLink href="/">Log In</NavLink>
        <NavLink href="/">Log Out</NavLink>
        <li>
          <button className="text-white bg-blue-500 py-2 px-6 rounded-xl hover:bg-blue-600 transition-all font-roboto">
            Sign Up
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
