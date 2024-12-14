import { Link, NavLink } from "react-router-dom";
import '../NavBar.css'

const DesktopMenu = () => {
  return (
    <div className="max-w-screen-lg mx-auto flex items-center justify-between w-full desktop_navigation">
      {/* logo wrapper  */}
      <div>
        <Link to={"/"}>
          <h3 className="text-3xl text-[#D3E97A] font-normal uppercase">
            LIFEONTHECODE
          </h3>
        </Link>
      </div>
      {/* navigation bar  */}
      <nav className="flex items-center gap-7 navigation_bar">
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
      </nav>
    </div>
  );
};

export default DesktopMenu;
