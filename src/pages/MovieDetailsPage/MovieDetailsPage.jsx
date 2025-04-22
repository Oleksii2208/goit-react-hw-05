import { NavLink, Outlet } from "react-router-dom";
import clsx from "clsx";
import s from "./MovieDetailsPage.module.css";

const MovieDetailsPage = () => {
  const setActiveClass = ({ isActive }) => {
    return clsx(s.link, isActive && s.active);
  };
  return (
    <div>
      <nav>
        <NavLink className={setActiveClass} to="cast">
          Cast
        </NavLink>
        <NavLink className={setActiveClass} to="reviews">
          Reviews
        </NavLink>
        <Outlet />
      </nav>
    </div>
  );
};

export default MovieDetailsPage;
