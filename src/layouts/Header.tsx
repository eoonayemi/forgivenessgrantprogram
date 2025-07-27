import { logo } from "../assets/logos";
import NavBar from "./NavBar";

const Header = () => {
  return (
    <header>
      <div>
        <img src={logo} alt="Forgiveness Grant Program" />
      </div>
      <div>
        <NavBar />
      </div>
      <div>
        <div></div>
      </div>
    </header>
  );
};

export default Header;
