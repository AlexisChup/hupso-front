// BookDetail.tsx
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Book, tagColors } from "./BookList";

// Function to format publication date as "Month Year"
export const formatDate = (dateString: number): string => {
  const options: Intl.DateTimeFormatOptions = {
    month: "long",
    year: "numeric",
  };
  return new Date(dateString).toLocaleDateString(undefined, options);
};

const BookDetail: React.FC = () => {
  const location = useLocation();
  const book: Book = location.state;

  return (
    <div>
      {book ? (
        <div className="max-w-xl mx-auto mt-8 p-4 bg-white rounded-lg shadow-md">
          <h1 className="text-3xl font-bold mb-4">{book.title}</h1>
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
          <p className="text-gray-600 mb-2">
            <strong>Description:</strong> {book.description}
          </p>
        </div>
      ) : null}
    </div>
  );
};

export default BookDetail;
