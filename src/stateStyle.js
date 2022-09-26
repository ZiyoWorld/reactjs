import styled, {css} from "styled-components";

export const Container = styled('div')`
display: flex;
background-color: coral;
color: black;
padding: 20px;
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

export const Desc = styled.h1`
    ${common};
    color: ${({left})=> left ? "red" : "green"};

`;

const getSize = (props)=>{
    switch(props.type){
        case 'large' : return '200px';
        case 'medium' : return '150px';
        case 'small' : return '100px';
        default : return "150px"
    }
}

export const Box = styled.div`
background-color: ${(props)=> props.bg};
display: flex;
justify-content: center;
align-items: center;
/* width: ${(props) => props.type === 'large' ? '200px': '150px'};
height: ${(props) => props.type === 'large' ? '200px': '150px'}; */
width: ${getSize};
height: ${getSize};
border: 2px solid black;
margin: 0 10px;
font-size: 24px;
`;


