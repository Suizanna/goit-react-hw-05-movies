import React, { useState, useEffect, lazy, Suspense } from "react";
import {
  Route,
  NavLink,
  useLocation,
  useHistory,
  useRouteMatch,
} from "react-router-dom";

// helpers
import { getFilmById } from "../../services/apiService";

// material-ui
import Button from "@material-ui/core/Button";

import s from "../MovieDetailsPage/MovieDetails.module.css";

// Components
const Cast = lazy(() =>
  import("../../components/Cast/Cast" /* webpackChunkName: "cast-subview"*/)
);

const Reviews = lazy(() =>
  import(
    "../../components/Reviews/Reviews" /* webpackChunkName: "reviews-subview"*/
  )
);

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
        console.log(resp);
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
    <main className={s.main}>
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
        &#9754; go back
      </Button>
      <>
        <div className={s.wrapper}>
          <img
            className={s.poster}
            src={
              state.film?.poster_path !== null &&
              state.film?.poster_path !== undefined
                ? imgUrl + state.film.poster_path
                : defaultPoster
            }
            alt={state.film?.tagline}
          />
          <div className={s.description}>
            <h1 className={s.filmTitle}>{state.film?.original_title}</h1>
            <h3 className={s.title}>User Score</h3>
            <p className={s.info}>{state.film?.vote_average}</p>
            <h3 className={s.title}>Release Date</h3>
            <p className={s.info}>{state.film?.release_date}</p>
            <h3 className={s.title}>Production Countries</h3>
            <p className={s.info}>{state.film?.production_countries.name}</p>

            <h3 className={s.title}>Overview</h3>
            <p className={s.info}>{state.film?.overview}</p>
            <h3 className={s.title}>Genres</h3>
            <ul className={s.genre}>
              {state.film?.genres.map((genre) => (
                <li className={s.info} key={genre.id}>
                  {genre.name}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <ul className={s.nav}>
          <NavLink
            to={{
              pathname: `${match.url}/cast`,
              state: location.state,
            }}
            className={s.link}
            activeClassName={s.activeLink}
          >
            {/* <Button style={{ fontSize: "28px" }} color="primary"> */}
            Cast
            {/* </Button> */}
          </NavLink>

          <NavLink
            to={{
              pathname: `${match.url}/reviews`,
              state: location.state,
            }}
            className={s.link}
            activeClassName={s.activeLink}
          >
            {/* <Button style={{ fontSize: "28px" }} color="primary"> */}
            Reviews
            {/* </Button> */}
          </NavLink>
        </ul>
        <Suspense fallback={<h1>Loading...</h1>}>
          <Route path={`${match.path}/reviews`} exact component={Reviews} />
          <Route path={`${match.path}/cast`} exact component={Cast} />
        </Suspense>
      </>
    </main>
  );
}
