import React from "react";
import Category from "./Category/Category";
import BookView from "./Main/BookView";
import "./MainBody.scss";
const MainBody = () => {
  return (
    <div className="MainBody">
      <Category />
      <BookView />
    </div>
  );
};

export default MainBody;
