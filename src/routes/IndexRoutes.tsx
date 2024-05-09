import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "../App";
import BookDetail from "../app/BookDetail";

export default function IndexRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/books/:id" element={<BookDetail />} />
      </Routes>
    </BrowserRouter>
  );
}
