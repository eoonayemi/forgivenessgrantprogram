import { landingPageLinks } from "../constants";
import { HashLink } from "react-router-hash-link";
import { useAppContext } from "@/contexts/AppContext";
import { useLocation, useNavigate } from "react-router-dom";

interface NavProps {
  navIsOpen: boolean;
  onSetNavIsOpen: () => void;
}

const MobileNav = ({ navIsOpen, onSetNavIsOpen }: NavProps) => {
  const { activePath, setActivePath } = useAppContext();
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const handleNavClick = (path: string) => {
    setActivePath(path);
    onSetNavIsOpen();

    // If we're not on the landing page, navigate there first
    if (pathname !== "/") {
      navigate("/");
      // Small delay to ensure page loads before scrolling
      setTimeout(() => {
        const element = document.getElementById(path);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
  };

  return (
    <div
      className={`bg-my_white lg:hidden fixed inset-x-0 z-40 top-16 flex flex-col justify-center shadow-md gap-5 transition-all duration-500 overflow-hidden ${
        navIsOpen ? "h-fit py-5" : "h-0 py-0"
      }`}
    >
      <nav className="flex flex-col">
        {landingPageLinks.map(({ name, path }) => (
          <HashLink
            key={path}
            smooth
            to={pathname === "/" ? `#${path}` : `/#${path}`}
            className={`${
              activePath == path
                ? "bg-[#ececec] text-light_primary font-semibold"
                : "text-gray-500"
            } p-5 text-[16px] font-medium`}
            onClick={() => handleNavClick(path)}
          >
            {name}
          </HashLink>
        ))}
      </nav>
    </div>
  );
};

export default MobileNav;
