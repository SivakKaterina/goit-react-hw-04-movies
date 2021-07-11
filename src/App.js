import { Route, Switch, Redirect } from "react-router";
// views
import Home from "./views/Home";
import MovieDetailsPage from "./views/MovieDetailsPage";
import MoviesPage from "./views/MoviesPage";
// components
import Navigation from "./components/Navigation";

function App() {
  return (
    <>
      <Navigation />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/movies" component={MoviesPage} />
        <Route path="/movies/:id" component={MovieDetailsPage} />
        <Redirect to={{ pathname: "/" }} />
      </Switch>
    </>
  );
}

export default App;
