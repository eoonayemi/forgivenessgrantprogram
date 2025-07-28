import { landingPageLinks } from "../constants";
import { HashLink } from "react-router-hash-link";
import { useAppContext } from "@/contexts/AppContext";

const DesktopNav = () => {
  const { activePath, setActivePath } = useAppContext();

  return (
    <div className={`flex gap-16 overflow-hidden items-center`}>
      <nav className="flex gap-14 max-lg:hidden">
        {landingPageLinks.map(({ name, path }, i) => (
          <div key={i} className="flex flex-col">
            <HashLink
              smooth
              to={`#${path}`}
              className={`${
                activePath == path ? "text-white" : "text-white"
              }  text-[14px]`}
              onClick={() => {
                setActivePath(path);
              }}
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
