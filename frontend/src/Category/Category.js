import Button from "./Button";
import styled from "styled-components";
import { useState } from "react";

const dummyData = { category: ["전체", "호러", "판타지", "코미디", "액션"] };

const Category = () => {
  const [state, setState] = useState(
    Array(dummyData["category"].length).fill(false)
  );

  const activeButton = (index) => {
    const newArr = Array(state.length).fill(false);
    newArr[index] = true;
    setState(newArr);
  };
  return (
    <CustomCategory>
      {dummyData["category"].map((value, index) => (
        <Button
          key={index}
          index={index}
          activeButton={activeButton}
          state={state[index]}
        >
          {value}
        </Button>
      ))}
    </CustomCategory>
  );
};

const CustomCategory = styled.div`
  padding: 10px 10px 10px 10px;
`;
export default Category;
