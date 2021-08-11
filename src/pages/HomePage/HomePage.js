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
                  pathname: `/movies/${film.id}`,
                  state: {
                    // search: query !== undefined ? query : "",
                    id: film.id,
                    from: location.pathname, 
                  },
                }}
              >
                <img
                  src={
                    film?.poster_path !== null &&
                    film?.poster_path !== undefined
                      ? imgUrl + film.poster_path
                      : defaultPoster
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
