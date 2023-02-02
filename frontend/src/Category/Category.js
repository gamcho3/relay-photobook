import Button from "./Button";
import styled from "styled-components";

const dummyData = { category: ["호러", "판타지", "전체"] };

const Category = () => {
  return (
    <CustomCategory>
      {dummyData["category"].map((value, index) => (
        <Button>{value}</Button>
      ))}
      <Button>전체</Button>
      <Button>판타지</Button>
      <Button>로맨스</Button>
    </CustomCategory>
  );
};

const CustomCategory = styled.div`
  background-color: black;
  padding: 10px 10px 10px 10px;
`;
export default Category;
