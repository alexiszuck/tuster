import { useSelector, useDispatch } from "react-redux";
import SideNavLink from "./SideNavLink/SideNavLink";

const SideNavbar = () => {
  const isOpen = useSelector((state) => state.navbar.isOpen);

  return (
    <div
      className={`min-h-screen fixed bg-white top-15 w-3/5 max-w-xs ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } transition-transform duration-300 shadow-sm z-20`}
    >
      <div className="flex justify-between mr-4 h-full">
        <ul className="flex flex-col w-full items-center justify-around pt-20 h-1/3">
          <SideNavLink href="/">Home</SideNavLink>
          <SideNavLink href="/">About</SideNavLink>
          <SideNavLink href="/">Contact</SideNavLink>
          <SideNavLink href="/">Become a tutor</SideNavLink>
        </ul>
      </div>
    </div>
  );
};

export default SideNavbar;
