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
      <div>
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
      </div>

      <img
        src="/Group.png"
        alt="group"
        width={15}
        height={15}
        style={{ cursor: "pointer" }}
      />
    </CustomCategory>
  );
};

const CustomCategory = styled.div`
  margin-top: 50px;
  margin-bottom: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export default Category;
