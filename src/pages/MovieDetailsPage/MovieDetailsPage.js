/* eslint-disable no-undef */
// страница с детальной информацией о кинофильме.
import React, { useEffect, useState } from "react";
import {
  Route,
  NavLink,
  useLocation,
  useHistory,
  useRouteMatch,
} from "react-router-dom";

// Components
import Cast from "../../components/Cast/Cast";
import Reviews from "../../components/Reviews/Reviews";

// helpers
import { getFilmById } from "../../services/apiService";

// material-ui
import Button from "@material-ui/core/Button";

//css
import s from "../MovieDetailsPage/MovieDetails.module.css";

const imgUrl = "https://image.tmdb.org/t/p/w500/";
const defaultPoster = "https://media.comicbook.com/files/img/default-movie.png";

export default function MovieDetails() {
  const [state, setState] = useState({});
  const location = useLocation();
  const history = useHistory();
  const match = useRouteMatch();

  useEffect(() => {
    let cleanupFunction = false;
    if (location.state?.id) {
      getFilmById(location.state.id).then((resp) => {
        if (!cleanupFunction) {
          setState((prev) => ({
            ...prev,
            film: resp.data,
          }));
        }
      });
    }
    return () => (cleanupFunction = true);
  }, [location.state.id]);

  return (
    <div>
      <Button
        className={s.btn}
        variant="contained"
        color="primary"
        onClick={() => {
          history.push(location.state.from, {
            search: location.state.search,
          });
        }}
      >
        go back
      </Button>

      <h1 className={s.filmTitle}>{state.film?.original_title}</h1>

      <img //className={s.poster}
        src={
          state.film?.poster_path !== null &&
          state.film?.poster_path !== undefined
            ? imgUrl + state.film.poster_path
            : defaultPoster
        }
        alt={state.film?.tagline}
        width="300"
      />

      <h3 className={s.info}>Film info</h3>
      <h3 className={s.title}>Overview</h3>
      <p className={s.info}>{state.film?.overview}</p>
      <NavLink
        style={{
          textDecoration: "none",
        }}
        to={{
          pathname: `${match.url}/cast`,
          state: location.state,
        }}
      >
        <Button style={{ fontSize: "28px" }} color="primary">
          Cast
        </Button>
      </NavLink>

      <NavLink
        style={{
          textDecoration: "none",
        }}
        to={{
          pathname: `${match.url}/reviews`,
          state: location.state,
        }}
      >
        <Button style={{ fontSize: "28px" }} color="primary">
          Reviews
        </Button>
      </NavLink>
      <Route path={`${match.path}/reviews`} exact component={Reviews} />
      <Route path={`${match.path}/cast`} exact component={Cast} />
    </div>
  );
}
