import React from "react";
import BookCard from "./BookCard";
import "./BookView.css";

const BookView = () => {
  return (
    <div className="bookView">
      <BookCard />
      <BookCard />
      <BookCard />
      <BookCard />
      <BookCard />
    </div>
  );
};

export default BookView;
