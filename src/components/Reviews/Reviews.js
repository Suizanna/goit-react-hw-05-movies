// информация об обзорах. Рендерится на странице <MovieDetailsPage>.
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

// helpers
import { getReviewsInfo } from "../../services/apiService";

// libraries
import shortId from "shortid";

const imgUrl = "https://image.tmdb.org/t/p/w500";
const defaultAvatar =
  "https://premiumt.ru/wp-content/uploads/2019/02/avatar.png";

export default function Reviews() {
  const [state, setState] = useState([]);
  const location = useLocation();

  useEffect(() => {
    let cleanUp = false;
    getReviewsInfo(location.state.id).then((resp) => {
      if (!cleanUp) {
        setState(resp.data.results);
      }
    });
    return () => (cleanUp = true);
  }, [location.state.id]);
  return (
    <div>
      <ul
        style={{
          listStyle: "none",
          display: "flex",
          paddingLeft: 0,
          justifyContent: "space-between",
          flexWrap: "wrap",
          margin: "0 auto",
          width: "80%",
          alignItems: "center",
        }}
      >
        {state.length > 0 ? (
          state.map(({ author, author_details: { avatar_path }, content }) => {
            //если avatar_path есть
            const img = avatar_path?.includes("http")
              ? avatar_path.slice(1, avatar_path.length - 1)
              : avatar_path //если false, null. тогда defaultAvatar
              ? imgUrl + avatar_path
              : defaultAvatar;
            return (
              <li key={shortId.generate()}>
                <h4>{author}</h4>
                <img src={img} alt={author} width="80" />
                <p>{content}</p>
              </li>
            );
          })
        ) : (
          <li
            style={{
              padding: "20px",
              margin: "0 auto",
            }}
          >
            <p>Отзывы по данному фильму отсутствуют.</p>
          </li>
        )}
      </ul>
    </div>
  );
}
