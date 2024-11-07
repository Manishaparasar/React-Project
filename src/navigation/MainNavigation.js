import { NavLink } from "react-router-dom";
import classes from "./mainNavigation.module.css";
function MainNavigation() {
  return (
    <header className={classes.header}>
      <nav>
        <ul>
          <li>
            <NavLink
              to="login"
              className={({ isActive }) => (isActive ? classes.active : "")}
            >
              Login
            </NavLink>
          </li>
          <li>
            <NavLink
              to="otp"
              className={({ isActive }) => (isActive ? classes.active : "")}
            >
              OtpInput
            </NavLink>
          </li>
          <li>
            <NavLink
              to="auth"
              className={({ isActive }) => (isActive ? classes.active : "")}
            >
              AuthPage
            </NavLink>
          </li>
          <li>
            <NavLink
              to="brandIdentity"
              className={({ isActive }) => (isActive ? classes.active : "")}
            >
              BrandIdentity
            </NavLink>
          </li>
          <li>
            <NavLink
              to="productCategory"
              className={({ isActive }) => (isActive ? classes.active : "")}
            >
              ProductCategory
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
