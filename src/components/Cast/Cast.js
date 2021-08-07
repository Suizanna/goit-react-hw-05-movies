// компонент < Cast >, информация о актерском составе.
// Рендерится на странице < MovieDetailsPage >.
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

// libraries
import shortId from "shortid";

// helpers
import { getCastInfo } from "../../services/apiService";

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
          state.map(({ original_name, profile_path }) => (
            <li
              key={shortId.generate()}
              style={{
                padding: "20px",
                width: "140px",
              }}
            >
              <h4>{original_name}</h4>
              <img
                src={
                  profile_path !== null ? imgUrl + profile_path : defaultAvatar
                }
                alt={original_name}
                width="80"
              />
            </li>
          ))
        ) : (
          <li
            style={{
              padding: "20px",
              margin: "0 auto",
            }}
          >
            <p>Список актеров по данному фильму отсутствует.</p>
          </li>
        )}
      </ul>
    </div>
  );
}
