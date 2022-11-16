import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;
    height: 100vh;
    width: 100%;
    background-color: ${({color})=> color}; 

`;

export const BottomImg = styled.img`
    width: 100%;

`