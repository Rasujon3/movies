import React, { Component } from "react";

class Filter extends Component {
  render() {
    const { genres, onClickGenre, selectedGenre } = this.props;

    return (
      <div className="col-lg-4 col-sm-6 col-md-6">
        <ul className="list-group">
          {genres.map((genre) => (
            <li
              key={genre.id}
              className={
                selectedGenre == genre.name
                  ? "list-group-item active"
                  : "list-group-item"
              }
              onClick={() => onClickGenre(genre.name)}
            >
              {genre.name}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Filter;
