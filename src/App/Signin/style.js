import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 350px;
    height: 600px;
    margin-right: 30px;
    border-radius: 20px;
`;
export const ImgWrapper = styled.div`
  width: 100%;
  height: 100%;
  background-size: cover;
  //background-position: 75% 25%;
  border-radius: 25px;
  background: url(${(props)=>props.imgUrl});  
  padding: 35px;
`;

export const Header = styled.h1`
   color: #fff;
   margin-top: 15px;
   font-size: 35px;
`;
export const Parag = styled.div`
    margin: 10px 10px;
    color: #fff;
    font-size: 14px;
`;
export const Input = styled.input`
    width: 100%;
    margin-top: ${({margintop})=> margintop ? "35px": "15px"};
    padding: 15px 10px;
    //border: 1px solid black;
    border-radius: 5px;
    outline: none;
    color: #fff;
    background: rgba(255, 255, 255, 0.6);
    opacity: 0.8;
`;
export const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 10px 0;
`;
export const Item = styled.div`
    color: #fff;
`;


