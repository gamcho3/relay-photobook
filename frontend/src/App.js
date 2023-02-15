// import Button from "react-bootstrap/Button";
// import Button from "./Category/Button";

import DefaultLayout from "./layout/DefaultLayout";
import Main from "./Main/Main";
import SimpleSlider from "./Main/Slider";

import MainBody from "./MainBody";

function App() {
  return (
    <DefaultLayout>
      <Main>
        <SimpleSlider />
        <MainBody />
      </Main>
    </DefaultLayout>
  );
}

export default App;
