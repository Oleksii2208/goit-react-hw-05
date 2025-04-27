import { NavLink, Outlet } from "react-router-dom";
import s from "./Navigation.module.css";
import clsx from "clsx";

const Navigation = () => {
  const setActiveClass = ({ isActive }) => {
    return clsx(s.link, isActive && s.active);
  };
  return (
    <div>
      <nav>
        <NavLink className={setActiveClass} to="/">
          Home
        </NavLink>
        <NavLink className={setActiveClass} to="/movies">
          Movies
        </NavLink>
      </nav>
      <Outlet />
    </div>
  );
};

export default Navigation;
