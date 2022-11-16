import styled from "styled-components";


export const Container = styled.div`
    width: 350px;
    height: 450px;
    margin-top: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

export const Wrap = styled.div`
    margin-left: auto;
    margin-right: 35px;
`;

export const Title = styled.div`
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 64px;
    line-height: 80px;
    text-align: center;
    color: ${({color})=> color};
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
    color: ${({color})=> color};
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
    color: ${({color})=> color};
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
    color: ${({color})=>color};
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