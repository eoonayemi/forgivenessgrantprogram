import { useAppContext } from "@/contexts/AppContext";
import { HashLink } from "react-router-hash-link";

interface LinkProps {
  name: string;
  path: string;
}

interface FooterColProps {
  links: LinkProps[];
  heading: string;
}

const FooterCol = ({ links, heading }: FooterColProps) => {
  const { activePath, setActivePath } = useAppContext();

  return (
    <div className="text-white text-sm">
      <h3 className="font-bold mb-3">{heading}</h3>
      <div className="flex flex-col gap-3 text-xs">
        {links.map(({ name, path }, i) => (
          <HashLink
            key={i}
            smooth
            to={`#${path}`}
            onClick={() => {
              setActivePath(path);
            }}
            className={`${
              path === activePath ? "text-light_primary font-medium" : ""
            }`}
          >
            {name}
          </HashLink>
        ))}
      </div>
    </div>
  );
};

export default FooterCol;
