import { Switch, Route, Redirect } from "react-router-dom";
import { Suspense, lazy } from "react";
import AppBar from "./components/AppBar/AppBar";
import Container from "./components/Container/Container";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
// import HomePage from "./pages/HomePage/HomePage";

const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const MoviesPageSearch = lazy(() =>
  import("./pages/MoviesPageSearch/MoviesPageSearch")
);
const MovieDetailsPage = lazy(() =>
  import("./pages/MovieDetailsPage/MovieDetailsPage")
);

//навигация по всем раутам на страницах

export default function App() {
  return (
    <Container>
      <AppBar />
      <Suspense fallback={<h1>Loading...</h1>}>
        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>

          <Route path="/movies" exact>
            <MoviesPageSearch />
          </Route>

          <Route path="/movies/:id">
            <MovieDetailsPage />
          </Route>
        </Switch>
      </Suspense>
      <Redirect to="/" />

      <ToastContainer autoClose={3700} position="top-center" />
    </Container>
  );
}
