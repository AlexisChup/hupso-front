import { useState } from "react";
import { AXIOS } from "./app/axios-http";

import BookList, { Book } from "./app/BookList";
import BookSearchForm, { BookSearchFormData } from "./app/BookSearchForm";

const initalBooks: Book[] = [];

function App() {
  const [books, setBooks] = useState(initalBooks);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const onSubmitForm = (formData: BookSearchFormData) => {
    setLoading(true);
    setError(null);
    AXIOS.get<Book[]>("/book/filter", { params: formData })
      .then((res) => {
        setBooks(res.data);
      })
      .catch((e) => {
        console.log(e);
        setError(e.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <>
      <BookSearchForm onSubmit={onSubmitForm} />
      {loading ? (
        <div className="flex justify-center items-center h-screen">
          <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-gray-900"></div>
        </div>
      ) : error ? (
        <div className="flex justify-center items-center h-screen">
          <div className="text-red-600">{error}</div>
        </div>
      ) : (
        <BookList books={books} />
      )}
    </>
  );
}

export default App;
