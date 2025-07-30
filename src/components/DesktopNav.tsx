import { landingPageLinks } from "../constants";
import { HashLink } from "react-router-hash-link";
import { useAppContext } from "@/contexts/AppContext";
import { useLocation, useNavigate } from "react-router-dom";

const DesktopNav = () => {
  const { activePath, setActivePath } = useAppContext();
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const handleNavClick = (path: string) => {
    setActivePath(path);

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
    <div className={`flex gap-16 overflow-hidden items-center`}>
      <nav className="flex gap-14 max-lg:hidden">
        {landingPageLinks.map(({ name, path }, i) => (
          <div key={i} className="flex flex-col">
            <HashLink
              smooth
              to={pathname === "/" ? `#${path}` : `/#${path}`}
              className={`${
                activePath == path ? "text-white" : "text-white"
              }  text-[14px]`}
              onClick={() => handleNavClick(path)}
            >
              {name}
            </HashLink>

            <span
              className={`bg-light_primary ${
                activePath == path
                  ? "w-full opacity-100 translate-x-0"
                  : `w-0 opacity-0 translate-x-10`
              } h-[3px] rounded-3xl mt-1 transition-all duration-500`}
            ></span>
          </div>
        ))}
      </nav>
    </div>
  );
};

export default DesktopNav;
