import { useState } from "react";
import { landingPageLinks } from "../constants";
import { HashLink } from "react-router-hash-link";

interface NavProps {
  navIsOpen: boolean;
  onSetNavIsOpen: () => void;
}

const MobileNav = ({ navIsOpen, onSetNavIsOpen }: NavProps) => {
  const [currentPath, setCurrentPath] = useState("home");

  return (
    <div
      className={`bg-my_white lg:hidden fixed inset-x-0 z-40 top-16 flex flex-col justify-center shadow-md gap-5 transition-all duration-500 overflow-hidden ${
        navIsOpen ? "h-fit py-5" : "h-0 py-0"
      }`}
    >
      <nav className="flex flex-col">
        {landingPageLinks.map(({ name, path }) => (
          <HashLink
            smooth
            to={`#${path}`}
            className={`${
              currentPath == path
                ? "bg-[#ececec] text-light_primary font-semibold"
                : "text-gray-500"
            } p-5 text-[16px] font-medium`}
            onClick={() => {
              setCurrentPath(path);
              onSetNavIsOpen();
            }}
          >
            {name}
          </HashLink>
        ))}
      </nav>
    </div>
  );
};

export default MobileNav;
