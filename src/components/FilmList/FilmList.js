import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

const FilmList = ({ movies, history, query }) => {
  console.log("FilmList", query);
  return (
    <ul>
      {movies.map(({ id, title, poster_path }) => (
        <li key={id}>
          <NavLink
            to={{
              pathname: `/movies/${id}`,
              state: { id, from: history.location.pathname, query },
            }}
          >
            <img
              src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
              width="200"
            ></img>
            <p>{title}</p>
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default FilmList;
