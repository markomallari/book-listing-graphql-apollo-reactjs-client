import React from "react";
import BookList from "./components/BookList";
import AddBook from "./components/AddBook";

const App = () => {
  return (
    <div id="main">
      <h1>GraphQL Book Sample</h1>
      <BookList />
      <AddBook />
    </div>
  );
};

export default App;
