import styled from "styled-components";


export const Container = styled.div`
    width: 350px;
    height: 450px;
    border: 1px solid #000;
    margin-top: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

export const Wrap = styled.div`
    width: 30px;
    height: 12px;
    border: 1px solid #000;
    border-radius: 12px;
`;
export const Cycle = styled.div`
   width: 10px;
   height: 10px;
   background-color: #000;
   border-radius: 50%;
   animation-name: anim1;
   animation-duration: 1s;
   animation-fill-mode: forwards;
   cursor: pointer;
   @keyframes anim1 {
    0%{
        margin-left:${({checked})=> checked ? "0px" : "18px" };
        width: 10px;
        background-color: dark;
    }
    50%{
        margin-left: ${({checked})=> checked ? "18px" : "0px" };
        width: 10px;
        background-color: yellow;
    }
   }
`

export const Title = styled.div`

    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 64px;
    line-height: 80px;
    text-align: center;
    color: #224957;
    margin: 15px 0;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

export const Desc = styled.div`
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    text-align: center;
    color: #224957;
`;
export const Input = styled.input`
    background: #224957;
    width: 300px;
    border-radius: 10px;
    padding: 0px 20px;
    margin: 10px 0;
    height: 45px;
    border: none;
    outline: none;
    color: #fff;
    font-size: 16px;
    ::placeholder{
        color: #fff;
    };

`;

export const Wrapper = styled.div`
    width: 300px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 10px 0;
    padding: 0 3px;
`;
export const Check = styled.input`
    width: 18px;
    height: 17px;
    background: #224957;
    border-radius: 5px;
    margin-right: 10px;
    cursor: pointer;
`;
export const Span = styled.div`
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 17px;
    /* identical to box height */
    color: #093545;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

`;
export const Forget = styled.div`
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 17px;
    color: #000;
    cursor: pointer;
`;

export const Button = styled.div`
    width: 300px;
    height: 45px;
    background: #20DF7F;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.3);
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    color:  #224957;
    font-size: 18px;
    transition: all 0.1s linear;
    cursor: pointer;
    :hover{
        transform: scale(1.015);
    }
`