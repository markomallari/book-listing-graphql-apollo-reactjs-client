import React, { useState } from "react";
import { useQuery } from "@apollo/client";
import { getBooksQuery } from "../queries/queries";
import BookDetails from "./BookDetails";

function BookItems({ stateChanger }) {
  const { data } = useQuery(getBooksQuery);
  if (data) {
    return data.books.map((book) => {
      return (
        <li
          key={book.id}
          onClick={(e) => {
            e.preventDefault();
            stateChanger(book.id);
          }}
        >
          {book.name}
        </li>
      );
    });
  }
}

const BookList = () => {
  const [selected, setSelected] = useState(null);
  return (
    <div>
      <ul id="book-list">
        <BookItems stateChanger={setSelected} />
      </ul>
      <BookDetails bookId={selected} />
    </div>
  );
};

export default BookList;
