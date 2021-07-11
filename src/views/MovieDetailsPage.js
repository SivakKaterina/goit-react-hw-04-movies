import { Component } from "react";
import { Link, Route } from "react-router-dom";
import { getFilmById } from "../services/fetchApi";
import Cast from "../components/Cast";
import Reviews from "../components/Reviews";
import PropTypes from "prop-types";

class MovieDetailsPage extends Component {
  static propTypes = {
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
    match: PropTypes.object.isRequired,
  };

  state = {
    film: {},
  };

  async componentDidMount() {
    // if (this.props.location.state?.id !== undefined) {
    const id = this.props.match.params.id;
    const response = await getFilmById(id);
    this.setState({ film: response.data });
    // }
    // const id = this.props.match.params.id
  }

  handleGoBack = () => {
    const { history, location } = this.props;
    history.push(location?.state?.from || "/", {
      query: this.props.location.state?.query,
    });
    // this.props.history.push(this.props.location.state.from,

    // );
  };

  render() {
    const { film } = this.state;
    return (
      <>
        <button type="button" onClick={this.handleGoBack}>
          Go back
        </button>

        <h1>{film.title}</h1>
        <img
          src={`https://image.tmdb.org/t/p/w500/${
            film.poster_path || film.profile_path
          }`}
        ></img>
        <p>{film.overview}</p>
        <ul>
          <li>
            <Link
              to={{
                pathname: `${this.props.match.url}/cast`,
                state: this.props.history.location.state,
              }}
            >
              Cast
            </Link>
          </li>
          <li>
            <Link
              to={{
                pathname: `${this.props.match.url}/reviews`,
                state: this.props.history.location.state,
              }}
            >
              Reviews
            </Link>
          </li>
        </ul>
        <Route exact path={`${this.props.match.path}/cast`} component={Cast} />
        <Route
          exact
          path={`${this.props.match.path}/reviews`}
          component={Reviews}
        />
      </>
    );
  }
}

export default MovieDetailsPage;
