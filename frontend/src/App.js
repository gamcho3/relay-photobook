// import Button from "react-bootstrap/Button";
// import Button from "./Category/Button";
import NavBar from "./Navbar/Navbar";
import Category from "./Category/Category";
import Main from "./Main/Main";
import SimpleSlider from "./Main/Slider";
import BookView from "./Main/BookView";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  return (
    <div>
      <NavBar>
        <div className="color:yellow">릴레이북 잘 될까요</div>
      </NavBar>
      <Main>
        <Category />
        <SimpleSlider />
        <BookView />
      </Main>
    </div>
  );
}

export default App;
