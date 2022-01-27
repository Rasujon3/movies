import React, { Component } from "react";
import _ from "lodash";

class Pagination extends Component {
  render() {
    const { totalItems, pageCount, activePage, onClickPage } = this.props;
    const totalPages = Math.ceil(totalItems / pageCount) + 1;
    const pages = _.range(1, totalPages, 1);
    return (
      <nav aria-label="Page navigation example d-flex flex-wrap">
        <ul class="pagination">
          <li
            class="page-item"
            onClick={() =>
              activePage - 1 >= 1 ? onClickPage(activePage - 1) : null
            }
          >
            <a class="page-link" style={{ cursor: "pointer" }}>
              Previous
            </a>
          </li>
          {pages.map((page) => (
            <li
              class={activePage === page ? "page-item active" : "page-item"}
              onClick={() => onClickPage(page)}
            >
              <a class="page-link" style={{ cursor: "pointer" }}>
                {page}
              </a>
            </li>
          ))}

          <li
            class="page-item"
            onClick={() =>
              activePage + 1 <= totalPages - 1
                ? onClickPage(activePage + 1)
                : null
            }
          >
            <a class="page-link" style={{ cursor: "pointer" }}>
              Next
            </a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Pagination;
