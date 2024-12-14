import { Link, NavLink } from "react-router-dom";
import "../NavBar.css";
import { RiMenuFold2Fill } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";

const MobileMenu = () => {
    const [menu, setMenu] = useState(false)
    return (
        <div className="mobile_navigation flex items-center justify-between w-full">
        {/* logo wrapper  */}
        <div>
            <Link to={"/"}>
            <h3 className="text-3xl text-[#D3E97A] font-normal uppercase">
                LIFEONTHECODE
            </h3>
            </Link>
        </div>

        {/* navigation bar  */}
        <nav className={menu ? 'mobileMenu_navbar show' : 'mobileMenu_navbar'}>
            <NavLink
            to={"/"}
            className={({ isActive }) =>
                isActive
                ? "text-base font-medium capitalize active"
                : "text-base text-[#C7C7C7] font-medium capitalize"
            }
            >
            work
            </NavLink>

            <NavLink
            to={"/about"}
            className={({ isActive }) =>
                isActive
                ? "text-base font-medium capitalize active"
                : " text-base text-[#C7C7C7] font-medium capitalize"
            }
            >
            About
            </NavLink>

            <NavLink
            to={"/contact"}
            className={({ isActive }) =>
                isActive
                ? "text-base font-medium capitalize active"
                : "text-base text-[#C7C7C7] font-medium capitalize"
            }
            >
            Contact
            </NavLink>

            {/* close menu icon */}
            <button onClick={() => setMenu(false)} className="close"><IoMdClose size="30px" color="#D3E97A" /></button>
        </nav>

        {/* menu bar icon  */}
        <button onClick={() => setMenu(true)}><RiMenuFold2Fill size="30px" color="#D3E97A" /></button>
        </div>
    );
};

export default MobileMenu;
