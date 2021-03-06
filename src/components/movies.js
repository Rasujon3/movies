import React, { Component } from "react";
import Pagination from "./common/pagination";
import { getGenres, getMovies } from "../services/movies.service";
import Filter from "./common/filtering";

class Movies extends Component {
  state = {
    movies: getMovies(),
    genres: [{ name: "All Genres" }, ...getGenres()],
    activePage: 1,
    pageCount: 10,
    selectedGenre: "All Genres",
  };
  handleClickPage = (page) => {
    this.setState({ ...this.state, activePage: page });
  };

  paginatedMovies = (movies) => {
    const { activePage, pageCount } = this.state;
    const start = (activePage - 1) * pageCount;
    const paginatedMovies = movies.slice(start, start + pageCount);
    return paginatedMovies;
  };

  handleClickGenre = (genre) => {
    this.setState({ ...this.state, selectedGenre: genre, activePage: 1 });
  };

  filterMovie = () => {
    const { movies, selectedGenre } = this.state;

    const filterMovies = movies.filter((movie) => {
      if (selectedGenre === "All Genres") return true;
      if (movie.genres.includes(selectedGenre)) return true;
      return false;
    });
    return filterMovies;
  };

  render() {
    const filtered = this.filterMovie();
    const movies = this.paginatedMovies(filtered);
    return (
      <>
        <div className="row">
          <h3 className="text-center">Top Movies List</h3>
          <Filter
            genres={this.state.genres}
            onClickGenre={this.handleClickGenre}
            selectedGenre={this.state.selectedGenre}
          />
          <div className="col-lg-8 col-sm-6 col-md-6">
            <h3>Showing {filtered.length} movies</h3>
            <br />
            <table class="table">
              <thead>
                <tr>
                  {/* <th scope="col">SL</th>
              <th scope="col">Id</th> */}
                  <th scope="col">Title</th>
                  {/* <th scope="col">Ranking</th> */}
                  <th scope="col">Image</th>
                  <th scope="col">Rating</th>
                  <th scope="col">Your Rating</th>
                </tr>
              </thead>
              <tbody>
                {movies.map((movie, idx) => (
                  <tr>
                    {/* <td>{idx + 1}</td> */}
                    {/* <td>{movie.id}</td> */}
                    <td>{movie.title}</td>
                    {/* <td>{movie.rank}</td> */}
                    <td>
                      <img src={movie.posterurl} width="50" />
                    </td>
                    <td>
                      <i class="bi bi-star"></i> {movie.imdbRating}
                    </td>
                    <td>
                      {movie.your_rating ? (
                        <i class="bi bi-star-fill"></i>
                      ) : (
                        <i class="bi bi-star"></i>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <Pagination
          totalItems={filtered.length}
          pageCount={this.state.pageCount}
          activePage={this.state.activePage}
          onClickPage={this.handleClickPage}
        />
      </>
    );
  }
}

export default Movies;
