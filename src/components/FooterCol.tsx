import { useAppContext } from "@/contexts/AppContext";
import { HashLink } from "react-router-hash-link";
import { useLocation, useNavigate } from "react-router-dom";

interface LinkProps {
  name: string;
  path: string;
  isExLink?: boolean;
}

interface FooterColProps {
  links: LinkProps[];
  heading: string;
}

const FooterCol = ({ links, heading }: FooterColProps) => {
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
    <div className="text-white text-sm">
      <h3 className="font-bold mb-3">{heading}</h3>
      <div className="flex flex-col gap-3 text-xs">
        {links.map(({ name, path, isExLink }, i) => (
          <>
            {" "}
            {isExLink ? (
              <HashLink
                key={i}
                smooth
                to={path}
                className={`${
                  path === activePath ? "text-light_primary font-medium" : ""
                }`}
              >
                {name}
              </HashLink>
            ) : (
              <HashLink
                key={i}
                smooth
                to={pathname === "/" ? `#${path}` : `/#${path}`}
                onClick={() => handleNavClick(path)}
                className={`${
                  path === activePath ? "text-light_primary font-medium" : ""
                }`}
              >
                {name}
              </HashLink>
            )}
          </>
        ))}
      </div>
    </div>
  );
};

export default FooterCol;
