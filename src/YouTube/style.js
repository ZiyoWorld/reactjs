import styled from "styled-components";

import { ReactComponent as burger } from "../assets/icons/burger.svg";
import { ReactComponent as search } from "../assets/icons/search.svg";
import { ReactComponent as bell } from "../assets/icons/bell.svg";
import { ReactComponent as menu } from "../assets/icons/menu.svg";
import { ReactComponent as videos } from "../assets/icons/videos.svg";


export const Container = styled.div`
    display: flex;
    flex-direction: ${({flex})=> !flex &&   "column"};
    background-color: #212121;
    color: #fff;
    height: 100%;
    padding: ${({flex})=> !flex &&   "0 30px"};
`;
export const Wrapper = styled.div`
   /* border: 1px solid yellow; */
   min-height: 60px;
   height: 60px;
   display: flex;
   align-items: center;
   justify-content: space-between;
   position: sticky;
   top: 0;
   background-color: #212121;
`;

export const Category = styled.div` 
    display: flex;
    flex: 1;
    /* border: 1px solid green; */
    align-items: center;
    justify-content: ${({end})=> end && 'flex-end'};
`;
export const Icons = styled.div`
`

Icons.Burger = styled(burger)`
    width: 26px;
    height: 26px;
    margin-right: 20px;
    margin-left: 2px;
    cursor: pointer;
`;

Icons.Bell = styled(bell)`
    width: 28px;
    height: 28px;
    margin-left: 20px;
    cursor: pointer;
`;

Icons.Menu = styled(menu)`
    width: 24px;
    height: 24px;
    margin-left: 20px;
    cursor: pointer;
`;

Icons.Video = styled(videos)`
    width: 28px;
    height: 28px;
    margin-left: 20px;
    cursor: pointer;
`;

Icons.Logo = styled.img`
    height: 22px;
    cursor: pointer;
`;

Icons.Search = styled(search)`
    min-width: 30px;
    width: 65px;
    height: 40px;
    padding: 10px 20px;
    border: 0 2px 2px 0;
    background-color: rgba(255, 255, 255, 0.2);
    cursor:pointer;
    color: #fff;
`

export const Input = styled.input`
    height: 40px;
    background-color: #000;
    border: 1px solid rgba(255, 255, 255, 0.2);
    box-sizing: border-box;
    border-radius: 2px 0 0 2px; 
    color: rgba(255, 255, 255, 0.6);
    font-size: 18px;
    max-width: 500px;
    width: 100%;
    min-width: 100px;
    padding-left: 10px;
    :focus{
        outline: none;
    }
`;

export const User = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-left: 20px;
    padding: 1px;
    margin-right: 5px;
`;
    















































































































































































