import React from "react";
import { useQuery } from "@apollo/client";
import { getBookQuery } from "../queries/queries";

function BookData({ bookId }) {
  const { data } = useQuery(getBookQuery, {
    variables: {
      id: bookId,
    },
  });

  if (data) {
    return (
      <div>
        <h2>{data.book.name}</h2>
        <p>{data.book.genre}</p>
        <p>{data.book.author.name}</p>
        <p>All books by this author:</p>
        <ul className="other-books">
          {data.book.author.books.map((item) => {
            return <li key={item.id}>{item.name}</li>;
          })}
        </ul>
      </div>
    );
  } else {
    return <div>No Book Selected</div>;
  }
}

const BookDetails = ({ bookId }) => {
  return (
    <div id="book-details">
      <p>Output book details here</p>
      {bookId ? <BookData bookId={bookId} /> : null}
    </div>
  );
};

export default BookDetails;
