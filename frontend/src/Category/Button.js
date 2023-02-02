import styled from "styled-components";





function Button({ children, index , activeButton,state}) {
  
  return <StyledButton onClick={() => activeButton(index)} clicked={state}>{children}</StyledButton>;
}

export default Button;

const StyledButton = styled.button`
  border-radius: var(--button-radius, 30px);
  background: ${props => props.clicked ? "black" : "white" };
  color:  ${props => props.clicked ? "white" : "black" };
  padding: var(--button-padding, 8px 16px);
  border-color: #dcdcdc;
  border-style: solid;
  border-width: 0.5px thin;
  display: inline;
  margin: 0px 15px 0px 0px;

  &:hover {
    cursor: pointer;
  }
`;
