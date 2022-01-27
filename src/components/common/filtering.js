import React, { Component } from "react";

class Filter extends Component {
  render() {
    const { genres } = this.props;

    return (
      <div className="col-lg-4 col-sm-6 col-md-6">
        <ul class="list-group">
          {genres.map((genre) => (
            <li class="list-group-item">{genre}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Filter;
