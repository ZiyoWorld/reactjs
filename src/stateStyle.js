import styled, {css, keyframes} from "styled-components";

export const Container = styled('div')`
display: flex;
background-color: coral;
color: black;
padding: 20px;
`;
const rotate = keyframes`
from{
    transform: rotate(0deg);
}
to{
    transform: rotate(360deg);
}
`
const common = css`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 200px;
    height: 40px;
    border-radius:5px;
    border: none;
    background-color: blue;
    cursor: pointer;
    color: white;
    :active{
        transform: scale(0.97);
    }
`
export const Button = styled.button`
   ${common}
`;

export const AcctiveButton = styled('div')`
   ${common}
   height: 50px;
`;
export const Rotate = styled.div`
width: 100px;
height: 100px;
border-radius: 50%;
display: flex;
justify-content: center;
align-items: center;
background-color: transparent;
border: 2px solid red;
animation: ${rotate} 2s linear infinite;

`