import { Link, useLocation } from "react-router-dom";
import s from "../FilmList/FilmList.module.css";

const FilmListItem = ({ film, query }) => {
  const location = useLocation();
  // const { path } = useRouteMatch();
  // console.log(path);
  const imgUrl = "https://image.tmdb.org/t/p/w500/";
  const defaultPoster =
    "https://media.comicbook.com/files/img/default-movie.png";

  return (
    <li className={s.itemFilm}>
      <Link
        to={{
          pathname: `/movies/${film.id}`, //наш раут фильма
          //записываем в state. если приходит prop search - записываем query, который в пропсах принимаем
          //когда переходим из стр поиска фильмов prop search приходит. когда из home - нет
          state: {
            search: query !== undefined ? query : "",
            id: film.id,
            from: location.pathname, //откуда, с какой страницы перешли
          },
        }}
      >
        <img
          className={s.poster}
          src={
            film?.poster_path !== null && film?.poster_path !== undefined
              ? imgUrl + film.poster_path
              : defaultPoster
            // film.poster_path
            //   ? `https://image.tmdb.org/t/p/w500${film.poster_path}`
            //   : "https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg"
          }
          alt={film.title}
        ></img>
        {/* {film.title} */}
      </Link>
      <span className={s.filmTitle}>{film.title}</span>
    </li>
  );
};

export default FilmListItem;
