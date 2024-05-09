import React, { useState } from "react";

export interface BookSearchFormData {
  title: string;
  category: string;
  publishedAt: string;
}

interface Props {
  onSubmit: (formData: BookSearchFormData) => void;
}

const BookSearchForm: React.FC<Props> = ({ onSubmit }) => {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [publishedAt, setPublishedAt] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit({ title, category, publishedAt });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="p-4 bg-gray-100 rounded-md shadow-md"
    >
      <h2 className="text-lg font-semibold mb-4">Search Books</h2>
      <div className="mb-4">
        <label htmlFor="title" className="block mb-1">
          Title
        </label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-indigo-500"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="category" className="block mb-1">
          Genre
        </label>
        <input
          type="text"
          id="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-indigo-500"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="publishedAt" className="block mb-1">
          Publication Year
        </label>
        <input
          type="text"
          id="publishedAt"
          value={publishedAt}
          onChange={(e) => setPublishedAt(e.target.value)}
          className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-indigo-500"
        />
      </div>
      <button
        type="submit"
        className="bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600 transition duration-300"
      >
        Search
      </button>
    </form>
  );
};

export default BookSearchForm;
