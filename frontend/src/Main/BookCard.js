import React from "react";
import "./BookCard.css";
import StarIcon from "../assets/Star.svg";
import viewIcon from "../assets/view.png";
import bookCover from "../assets/react_image.jpeg";

const BookCard = () => {
  return (
    <>
      <div className="bookCard">
        <img src={bookCover} alt="bookCover" className="bookCover"></img>
        <div className="bookInfo">
          <div>
            <div className="bookTitle">책제목</div>
            <div className="bookAuthor">최초작가 이름</div>
            <div className="bookOtherAuthor">외 5명</div>
          </div>

          <div>
            <div className="bookRateAndViewContainer">
              <div className="bookContainer">
                <img src={StarIcon} alt="star"></img>
                <div className="bookRate">4.5</div>
              </div>
              <div className="bookContainer">
                <img src={viewIcon} alt="view"></img>
                <div className="bookViewCount">1.5만</div>
              </div>
            </div>

            <div className="bookGenre">#장르 #판타지 #로맨스</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BookCard;
