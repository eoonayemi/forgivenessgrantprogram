import { Outlet } from "react-router";
import { DesktopNav, FooterCol, Logo, MobileNav } from "../components";
import { Menu } from "../assets/icons";
import { useState } from "react";
import { footerLinks } from "../constants";

const Layout = () => {
  const [navIsOpen, setNavIsOpen] = useState(false);

  return (
    <>
      <header className="bg-dark_primary fixed top-0 inset-x-0 z-50 h-16 flex justify-between items-center px-[16px] sm:px-[20px] md:px-[32px] xl:px-[120px] overflow-hidden">
        <Logo imgStyles="h-[65px] w-[65px]" />
        <div className="flex gap-3 items-center">
          <DesktopNav />
          <Menu
            className="text-white text-3xl lg:hidden"
            onClick={() => setNavIsOpen(!navIsOpen)}
          />
        </div>
      </header>
      <MobileNav
        navIsOpen={navIsOpen}
        onSetNavIsOpen={() => setNavIsOpen(false)}
      />

      <Outlet />
      <footer className="flex flex-col bg-dark_primary footer-res-p">
        <div className="flex items-center justify-center overflow-hidden h-[150px]">
          <Logo imgStyles="h-[65px] w-[65px]" />
        </div>

        <div className="flex flex-row md:gap-40 gap-20 justify-center overflow-hidden flex-wrap">
          {footerLinks.map((link, i) => (
            <FooterCol key={i} {...link} />
          ))}
        </div>

        <div className="bg-white w-full h-[0.005rem] mt-20"></div>

        <div className="text-white text-xs flex flex-col md:flex-row items-center justify-center gap-10 overflow-hidden h-[100px]">
          <span className="flex items-center justify-center">
            <span>© copyright {new Date().getFullYear()}</span>
            <Logo
              imgStyles="h-[40px] w-[40px]"
              textStyles="leading-[11px] text-[10px]"
              boxStyles="-space-x-1"
            />
          </span>
        </div>
      </footer>
    </>
  );
};

export default Layout;
