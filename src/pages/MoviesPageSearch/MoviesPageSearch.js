import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { getFilmsByQuery } from "../../services/apiService";
import FilmList from "../../components/FilmList/FilmList";
import { toast } from "react-toastify";
import s from "./MoviesPageSearch.module.css";
import PageHeading from "../../components/PageHeading/PageHeading";

function MoviesPageSearch() {
  const history = useHistory();
  const [input, setInput] = useState("");
  const [films, setFilms] = useState([]);

  const handleChangeQuery = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (input.trim() === "") {
      setInput("");
      return toast.info("😱 Please enter a value for search movies!");
    } else {
      // history.push({
      //   pathname: history.location.pathname,
      //   search: `?q=${input}`,
      // });
      // history.push(`?q=${input}`);
      getFilmsByQuery(input).then((resp) => setFilms(resp.data.results));

      //   if (resp.data.results.length < 1) {
      //     setInput("");
      //     return toast.error(`Your search - ${input} - did not match any images`);
      //   }
    }
  };

  useEffect(() => {
    //оператор опц-ной последовательности.если у state{} есть search он его возьмет. если нет- nul и в if не зайдет
    if (history.location.state?.search) {
      getFilmsByQuery(history.location.state?.search).then((resp) => {
        // console.log(resp);
        setFilms(resp.data.results);
        setInput(history.location.state?.search);
      });
    }
  }, [history]);

  return (
    <>
      <PageHeading text="Movies" />
      <form className={s.form} onSubmit={handleSubmit}>
        <input
          className={s.input}
          name="query"
          value={input} //value нашего input зависит от стейта.конторолируемый input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movies..."
          onChange={handleChangeQuery}
        />
        <button type="submit" className={s.btn}></button>
      </form>

      <FilmList query={input} films={films} />
    </>
  );
}

export default MoviesPageSearch;
