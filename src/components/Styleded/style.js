import styled, {css, keyframes} from "styled-components";

export const Container = styled.div`
    width: 100%;
    background-color: coral;
    padding: 25px;
    display: flex;
`;

const getHeight = ({height})=>{
    switch(height){
        case "large" : return "250px";
        case "middle" : return "200px";
        case "small" : return "150px";
        default: return "150px"
    }
}

export const Card = styled.div`
    width: ${getHeight};
    height: ${getHeight};
    border: 1px solid black;
    margin: 0 25px;
`;
const common = css`
    font-weight: 400;
    font-family: bold;
    padding: 10px;
    border: 1px solid black;
    height: fit-content;
`

export const Title = styled.h1`
    color: blue;
    ${common}
`;
export const T = styled("div")`
  color: red;
`

export const Desc = styled.h1`
    ${common};
    color: ${({left})=> left ? "red" : "green"};
`;

const rotate = keyframes`
from{
    transform: rotate(0deg);
}
to{
    transform: rotate(360deg);
}
`
const commons = css`
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
   ${commons}
`;

export const AcctiveButton = styled('div')`
   ${commons}
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
`;