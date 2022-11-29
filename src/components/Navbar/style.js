import styled from "styled-components";
import { NavLink } from "react-router-dom";
export const Container = styled.div`
    display: flex;
    height: 55px;
    background-color: #000;
    justify-content: space-evenly; 
    align-items: center;
`;

export const Link = styled(NavLink)`
    color: ${(props)=> props.active ? "red" : "white"};
    font-weight: 600;
    font-size: 24px;
    text-decoration: none;
`;