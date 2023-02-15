import "./Navbar.scss";
import { Routes, Route, Link } from "react-router-dom";
import MyPage from "../MyPage/MyPage";

const NavBar = (props) => {
  return (
    <div className="navbar">
      <div>{props.children}</div>
      <div>
        <input type="text" className="custom_input"></input>
        <button type="submit">검색</button>
      </div>
      <div>
        <button>다크모드</button>
        <button>
          <Link to="/MyPage">마이페이지</Link>
        </button>

        <Routes>
          <Route path="/MyPage" element={<MyPage />}></Route>
        </Routes>
      </div>
    </div>
  );
};

export default NavBar;
