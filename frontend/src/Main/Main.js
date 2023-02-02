import styled from 'styled-components'

const Main = (props) => {
    return <StyledContainer>{props.children}</StyledContainer>
 }

const StyledContainer = styled.div`
background-color: #ffffff;
width: 600px;
margin: auto;
`;

export default Main;