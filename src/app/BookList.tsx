import React from "react";
import { Link } from "react-router-dom";
import { formatDate } from "./BookDetail";

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

const DESCRIPTION_LENGTH = 50;

export const tagColors = [
  "bg-blue-200",
  "bg-green-200",
  "bg-yellow-200",
  "bg-red-200",
  "bg-purple-200",
];

const BookList: React.FC<Props> = ({ books }) => {
  // Function to truncate description to 100 characters
  const truncateDescription = (description: string): string => {
    if (description.length > DESCRIPTION_LENGTH) {
      return description.slice(0, DESCRIPTION_LENGTH) + "...";
    }
    return description;
  };

  // Function to render "See more..." link if description exceeds DESCRIPTION_LENGTH characters
  const renderSeeMoreLink = (description: string): JSX.Element | null => {
    if (description.length > DESCRIPTION_LENGTH) {
      return <span className="text-blue-500 cursor-pointer">See more...</span>;
    }
    return null;
  };

  // Predefined array of colors for genre tags

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {books.map((book) => (
        <Link to={`/books/${book.id}`} state={book} key={book.id}>
          <div
            key={book.id}
            className="bg-white rounded-lg shadow-md p-4 cursor-pointer hover:bg-gray-100 transition duration-300"
          >
            <h2 className="text-3xl font-bold mb-4">{book.title}</h2>
            <p className="text-gray-600 mb-2">Author: {book.author}</p>
            <p className="text-gray-600 mb-2">
              Publication Date: {formatDate(book.publishedAt)}
            </p>
            <div
              className={`inline-block text-gray-700 rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2 ${
                tagColors[book.category.length % tagColors.length]
              }`}
            >
              {book.category}
            </div>
            <p className="text-gray-700 mb-2">
              {truncateDescription(book.description)}
            </p>
            {renderSeeMoreLink(book.description)}
          </div>
        </Link>
      ))}
    </div>
  );
};

export default BookList;
