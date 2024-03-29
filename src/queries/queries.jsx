import { gql } from "@apollo/client";

const getBooksQuery = gql`
  query {
    books {
      id
      name
      genre
    }
  }
`;

const getAuthorsQuery = gql`
  query {
    authors {
      id
      name
    }
  }
`;

const addBookMutation = gql`
  mutation ($name: String!, $genre: String!, $authorId: ID!) {
    addBook(name: $name, genre: $genre, authorId: $authorId) {
      id
      name
      genre
      author {
        name
        age
      }
    }
  }
`;

const getBookQuery = gql`
  query ($id: ID!) {
    book(id: $id) {
      id
      name
      genre
      author {
        id
        name
        age
        books {
          id
          name
        }
      }
    }
  }
`;

export { getBooksQuery, getBookQuery, getAuthorsQuery, addBookMutation };
