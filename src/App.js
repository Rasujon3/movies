import Movies from "./components/movies";
import "./App.css";
import Navbar from "./components/common/navbar";
import { Route, Switch } from "react-router-dom";
import Login from "./components/login";
import MovieForm from "./components/movie-form";

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route path="/movies" component={Movies} />
        <Route path="/login" component={Login} />
        <Route path="/add-movie" component={MovieForm} />
        <Route exact to="/" component={Movies} />
      </Switch>
    </>
  );
}

export default App;
