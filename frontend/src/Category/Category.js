import Button from "./Button";
import styled from "styled-components";

const Category = () => {
  return (
    <CustomCategory>
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
