// домашняя страница со списком популярных кинофильмов.
import { useEffect, useState } from "react";
import { getTrendingFilms } from "../../services/apiService";
import FilmList from "../../components/FilmList/FilmList";
import PageHeading from "../../components/PageHeading/PageHeading";
// import { Link, useLocation } from "react-router-dom";

// const imgUrl = "https://image.tmdb.org/t/p/w500/";
// const defaultPoster = "https://media.comicbook.com/files/img/default-movie.png";

const HomePage = () => {
  const [films, setFilms] = useState([]);
  // const location = useLocation();
  // const [query, setQuery] = useState("");

  useEffect(() => {
    const fn = async () => {
      const {
        data: { results },
      } = await getTrendingFilms();
      setFilms(results);
    };
    fn();
  }, []);
  //
  return (
    <>
      <PageHeading text="Trending Today" />
      {films && <FilmList films={films} />}

      {/* {films && (
        <ul>
          {films.map((film) => (
            <li key={film.id}>
              <Link
                to={{
                  pathname: `/movies/${film.id}`, //наш раут фильма
                  //записываем в state. если приходит prop search - записываем query, который в пропсах принимаем
                  //когда переходим из стр поиска фильмов prop search приходит. когда из home - нет
                  state: {
                    // search: query !== undefined ? query : "",
                    id: film.id,
                    from: location.pathname, //откуда, с какой страницы перешли
                  },
                }}
              >
                <img
                  src={
                    film?.poster_path !== null &&
                    film?.poster_path !== undefined
                      ? imgUrl + film.poster_path
                      : defaultPoster
                    // film.poster_path
                    //   ? `https://image.tmdb.org/t/p/w500${film.poster_path}`
                    //   : "https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg"
                  }
                  alt={film.title}
                ></img>
                {film.title}
              </Link>
            </li>
          ))}
        </ul>
      )} */}
    </>
  );
};

export default HomePage;
//
//useRouteMatc возвращ. объект, как текущий компонент совпал с маршрутов в адресной строке
//*для состав. вложенной навигации используем значение свойства url.это всегда текущий путь
//динамические url-параметры. вложенная навигация.
//  c match берем  url свойство
//   const { url } = useRouteMatch();
