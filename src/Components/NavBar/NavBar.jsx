import MobileMenu from "./MobileMenu/MobileMenu";
import './NavBar.css'
import DesktopMenu from "./DesktopMenu/DesktopMenu";

const NavBar = () => {
  return (
    <>
        {/* desktop menu  */}
        <DesktopMenu/>

        {/* mobile menu  */}
        <MobileMenu/>

    </>
  );
};

export default NavBar;
