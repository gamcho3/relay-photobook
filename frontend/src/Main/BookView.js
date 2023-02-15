import React from "react";
import BookCard from "./BookCard";

import "./BookView.css";

const BookView = () => {
  const cards = [];

  for (var i = 0; i < 50; i++) {
    cards.push(<BookCard />);
  }

  return <div className="bookView">{cards}</div>;
};

export default BookView;
