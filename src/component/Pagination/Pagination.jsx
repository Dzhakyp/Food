import React from "react";
import styles from "./Pagination.module.scss";
import ReactPaginate from "react-paginate";

export default function Pagination({ onChangePage }) {
  return (
    <div>
      <ReactPaginate
        className={styles.root}
        breakLabel="..."
        nextLabel=" >"
        onPageChange={(e) => onChangePage(e.selected + 1)}
        pageRangeDisplayed={3}
        pageCount={3}
        previousLabel="< "
        renderOnZeroPageCount={null}
      />
    </div>
  );
}
