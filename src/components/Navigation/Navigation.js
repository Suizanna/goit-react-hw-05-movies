import { NavLink } from "react-router-dom";
import Button from "@material-ui/core/Button";
import s from "./Navigation.module.css";
//главная навигация по страницам
//prop exact - точное совпадение, чтоб подсвечивать только одну ссылку

const Navigation = () => {
  return (
    <div>
      <header>
        <nav className={s.nav}>
          <ul className={s.navList}>
            <li>
              <NavLink
                exact
                to="/"
                className={s.link}
                // activeClassName={s.activeLink}
              >
                <Button variant="contained" color="primary">
                  Home
                </Button>
              </NavLink>
            </li>
            <li>
              <NavLink
                className={s.link}
                // activeClassName={s.activeLink}
                to="/movies"
              >
                <Button variant="contained" color="primary">
                  Movies
                </Button>
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Navigation;
