import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { getCastInfo } from "../services/fetchApi";

const Cast = ({ match }) => {
  const history = useHistory();
  console.log("history", history);
  const [cast, setCast] = useState([]);

  useEffect(() => {
    getCastInfo(match.params.id).then((resp) => setCast(resp.data.cast));
  }, [match.params.id]);

  return (
    <>
      <h1>Cast</h1>
      <ul>
        {cast.length > 0 ? (
          cast.map(({ name, cast_id }) => <li key={cast_id}>{name}</li>)
        ) : (
          <li>Not found any cast</li>
        )}
      </ul>
    </>
  );
};

export default Cast;
