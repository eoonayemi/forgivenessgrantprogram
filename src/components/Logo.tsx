import { forgiveness_logo1, forgiveness_logo2 } from "../assets/logos";

interface LogoProps {
  isWhite?: boolean;
  boxStyles?: string;
  imgStyles?: string;
}

const Logo = ({ isWhite, boxStyles, imgStyles }: LogoProps) => {
  return (
    <div className={`${boxStyles}`}>
      <img
        src={isWhite ? forgiveness_logo1 : forgiveness_logo2}
        alt="logo"
        className={`${imgStyles} h-[11rem]`}
      />
    </div>
  );
};

export default Logo;
