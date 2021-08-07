import FilmListItem from "../FilmListItem/FilmListItem";
import s from "../FilmList/FilmList.module.css";

const FilmList = ({ films, query }) => {
  return (
    <>
      <ul className={s.filmsList}>
        {films.map((film) => (
          <FilmListItem query={query} key={film.id} film={film} />
        ))}
      </ul>
    </>
  );
};

export default FilmList;
