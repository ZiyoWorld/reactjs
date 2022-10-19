import styled from "styled-components";

export const Container = styled.div`
    width: 315px;
    height: 310px;
    margin-right:20px;
    margin-bottom: 40px;
`;
export const Video = styled.img`
    width: 100%;
    height: 200px;
    
`;
export const Wrapper = styled.div`
    display:flex;
    justify-content: flex-start;
    align-items: center;
`;
export const User = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-right: 15px;
`;
export const Title = styled.div`
   font-family: "Roboto";
   font-weight: normal;
   font-style: normal;
   font-size: 16px;
   line-height: 22px;
   clear: both;
   color: ${({desc})=> (desc ? "rgba(255,255,255, 0.6)": "#fff")};

`;

export const Button = styled.div`
   margin-left: auto;
   margin-right: 15px;
`;
export const Ul =styled.ul`
list-style: none;
`
export const Li = styled.li`
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background-color: #fff;
    margin: 7px 0;
`














































































































































































