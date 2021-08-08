// информация об обзорах. Рендерится на странице <MovieDetailsPage>.
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import ShowMore from "react-simple-show-more";

// helpers
import { getReviewsInfo } from "../../services/apiService";

// libraries
import shortId from "shortid";

import s from "./Reviews.module.css";

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
      <ul className={s.item}>
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
                <img src={img} alt={author} width="80" />
                <h4 className={s.author}>{author}</h4>
                {/* <p>{content}</p> */}
                <p className={s.content}>
                  <ShowMore
                    text={content}
                    length={700}
                    showMoreLabel=" Show more >>"
                    showLessLabel=" Show less <<"
                    style={{
                      cursor: "pointer",
                      color: "#fa7584",
                      fontWeight: "bold",
                    }}
                  />
                </p>
              </li>
            );
          })
        ) : (
          <li>
            <p className={s.textReviews}>
              We don't have any reviews for this film.
            </p>
          </li>
        )}
      </ul>
    </div>
  );
}
