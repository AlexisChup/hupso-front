import React from "react";

export interface Book {
  id: number;
  title: string;
  author: string;
  category: string;
  description: string;
  publishedAt: number;
}

interface Props {
  books: Book[];
}

const BookList: React.FC<Props> = ({ books }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {books.map((book) => (
        <div key={book.id} className="bg-white rounded-lg shadow-md p-4">
          <h2 className="text-lg font-semibold mb-2">{book.title}</h2>
          <p className="text-gray-600 mb-2">{book.author}</p>
          <p className="text-gray-600 mb-2">{book.category}</p>
          <p className="text-gray-600 mb-2">{book.description}</p>
          <p className="text-gray-600">Publication Year: {book.publishedAt}</p>
        </div>
      ))}
    </div>
  );
};

export default BookList;
