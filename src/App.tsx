import { useState } from "react";
import { AXIOS } from "./app/axios-http";
import "./App.css";
import BookSearchForm, { BookSearchFormData } from "./app/BookSearchForm";

import BookList, { Book } from "./app/BookList";

const initalBooks: Book[] = [];

function App() {
  const [books, setBooks] = useState(initalBooks);

  const onSubmitForm = (formData: BookSearchFormData) => {
    AXIOS.get<Book[]>("/book/filter", { params: formData })
      .then((res) => {
        setBooks(res.data);
      })
      .catch((e) => {
        console.log(e);
      })
      .finally(() => {});
  };

  return (
    <>
      <div>
        <BookSearchForm onSubmit={onSubmitForm} />
      </div>
      <div>
        <BookList books={books} />
      </div>
    </>
  );
}

export default App;
