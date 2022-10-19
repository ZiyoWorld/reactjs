import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 250px;
    height: 100vh;
    overflow-y: scroll;

    ::-webkit-scrollbar{
    width: 6px;
    height: 15px;
    }
    ::-webkit-scrollbar-track{
    background: transparent;
    }
    ::-webkit-scrollbar-thumb{
    background-color: #c7c7c7;
    border: 0;
    border-radius: 20px;
    }
`;

export const Wrapper = styled.div`
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
    margin: 10px 0;

`;
export const Title = styled.div`
    display: flex;
    align-items: center;
    font-family: "Roboto";
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 20px;
    height: 40px;
    color: ${({title}) => (title ? "rgba(255, 255, 255, 0.6)" : "#fff")};
    margin-left: 24px;
`;

export const ItemWrapper = styled.div`
   display: flex;
   align-items: center;
`;
export const Images = styled.img`
    width: 16px;
    height: 16px;
`
    















































































































































































