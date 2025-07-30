import { logo } from "../assets/logos";

interface LogoProps {
  boxStyles?: string;
  imgStyles?: string;
  textStyles?: string;
}

const Logo = ({ boxStyles, imgStyles, textStyles }: LogoProps) => {
  return (
    <div
      className={`${boxStyles} flex justify-center items-center w-fit -space-x-2`}
    >
      <div
        className={`${imgStyles} overflow-hidden flex items-center justify-center`}
      >
        {" "}
        <img src={logo} alt="logo" />
      </div>

      <div className={`${textStyles} font-semibold text-white leading-4 mt-1`}>
        Forgiveness <br /> Grants
      </div>
    </div>
  );
};

export default Logo;
