// компонент < Cast >, информация о актерском составе.
// Рендерится на странице < MovieDetailsPage >.
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

// libraries
import shortId from "shortid";

// helpers
import { getCastInfo } from "../../services/apiService";

//css
import s from "./Cast.module.css";

const imgUrl = "https://image.tmdb.org/t/p/w500/";
const defaultAvatar =
  "https://premiumt.ru/wp-content/uploads/2019/02/avatar.png";

export default function Cast() {
  const [state, setState] = useState([]);
  const location = useLocation();

  useEffect(() => {
    getCastInfo(location.state.id).then((resp) => {
      setState(resp.data.cast);
    });
  }, [location.state.id]);
  return (
    <div>
      <ul className={s.cast}>
        {state.length > 0 ? (
          state.map(({ original_name, profile_path, character }) => (
            <li key={shortId.generate()} className={s.item}>
              <img
                src={
                  profile_path !== null ? imgUrl + profile_path : defaultAvatar
                }
                alt={original_name}
                className={s.photo}
              />
              <h4 className={s.name}>{original_name}</h4>
              <p className={s.character}>{character}</p>
            </li>
          ))
        ) : (
          <li>
            <p className={s.textReviews}>
              We don't have any Series Cast for this film.
            </p>
          </li>
        )}
      </ul>
    </div>
  );
}
