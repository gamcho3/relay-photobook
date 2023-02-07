import React from "react";
import "./BookCard.css";

const BookCard = () => {
  return (
    <>
      <div className="bookCard">
        소설제목보이는카드컨테이너
        <div className="bookCover">책표지 보이는 곳</div>
        <div className="bookInfo">
          <div className="bookTitle">책제목</div>
          <div className="bookAuthor">최초작가 이름</div>
          <div className="bookOtherAuthor">외 5명</div>
          <div>
            <div className="bookRate">별점</div>
            <div className="bookViewCount">조회수</div>
          </div>
          <div className="bookGenre">#장르</div>
        </div>
      </div>
    </>
  );
};

export default BookCard;
