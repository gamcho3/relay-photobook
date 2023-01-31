import styled from "styled-components";

// Button.jsx

function Button({ disabled, children }) {
  return <StyledButton disabled={disabled}>{children}</StyledButton>;
}

export default Button;

const StyledButton = styled.button`
  border-radius: var(--button-radius, 30px);
  background: var(--button-bg-color, #ffffff);
  color: var(--button-color, #000000);
  padding: var(--button-padding, 8px 16px);
  border-color: #dcdcdc;
  border-style: solid;
  border-width: 0.5px thin;
  display: inline;
  margin: 0px 15px 0px 0px;
`;
