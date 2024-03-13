import React, { useState } from "react";
import { useQuery, useMutation } from "@apollo/client";
import {
  addBookMutation,
  getAuthorsQuery,
  getBooksQuery,
} from "../queries/queries";

function Authoritems() {
  const { data } = useQuery(getAuthorsQuery);
  if (data) {
    return data?.authors.map((author) => {
      return (
        <option key={author.id} value={author.id}>
          {author.name}
        </option>
      );
    });
  }
}

const AddBook = () => {
  const [book, setBook] = useState({
    name: "",
    genre: "",
    authorId: "",
  });

  const [AddBookItem] = useMutation(addBookMutation, {
    variables: book,
    refetchQueries: [{ query: getBooksQuery }],
    onCompleted: (data) => {
      document.getElementById("add-book").reset();
    },
  });

  return (
    <form
      id="add-book"
      onSubmit={(e) => {
        e.preventDefault();
        AddBookItem();
      }}
    >
      <div className="field">
        <label>Book name:</label>
        <input
          type="text"
          onChange={(e) => {
            setBook({ ...book, name: e.target.value });
          }}
        />
      </div>
      <div className="field">
        <label>Genre:</label>
        <input
          type="text"
          onChange={(e) => {
            setBook({ ...book, genre: e.target.value });
          }}
        />
      </div>
      <div className="field">
        <label>Author:</label>
        <select
          onChange={(e) => {
            setBook({ ...book, authorId: e.target.value });
          }}
        >
          <option>Select author</option>
          <Authoritems />
        </select>
      </div>
      <button>+</button>
    </form>
  );
};

export default AddBook;
