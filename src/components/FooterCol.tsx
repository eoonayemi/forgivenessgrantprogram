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
  return (
    <div className="text-white text-sm">
      <h3 className="font-bold mb-3">{heading}</h3>
      <div className="flex flex-col gap-3 text-xs">
        {links.map(({ name, path }, i) => (
          <HashLink key={i} to={path}>
            {name}
          </HashLink>
        ))}
      </div>
    </div>
  );
};

export default FooterCol;
