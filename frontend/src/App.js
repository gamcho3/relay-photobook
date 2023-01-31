// import Button from "react-bootstrap/Button";
import Button from "./Category/Button";
import NavBar from "./Navbar/Navbar";
import Category from "./Category/Category";

function App() {
  return (
    <div>
      <NavBar>
        <div className="color:yellow">릴레이북 잘 될까요</div>
      </NavBar>
      <Category />
    </div>
  );
}

export default App;
