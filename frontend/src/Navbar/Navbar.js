import "./Navbar.css";

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
          d<i class="fa-light fa-user"></i>
        </button>
      </div>
    </div>
  );
};

export default NavBar;
