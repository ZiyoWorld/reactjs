import { ReactComponent as home } from "../assets/icons/home.svg";
import { ReactComponent as subscribe } from "../assets/icons/subscribe.svg";

import styled from "styled-components";

const Icons = styled.div``;

Icons.Home = styled(home)`
   width: 16px;
   height: 16px; 
   color: white;
`;


export const sidebar = [
    {
        id: 1, 
        data: [
            {id: 1, title: "Home", icon: home },
            {id: 2, title: "Explore", icon: home},
            {id: 3, title: "Subscription", icon: subscribe},
        ]
    },
    {
        id: 2, 
        data: [
            {id: 1, title: "Library", icon: home},
            {id: 2, title: "History", icon: home},
            {id: 3, title: "Your Videos", icon: home},
            {id: 4, title: "Watch later", icon: home},
            {id: 5, title: "Liked Videos", icon: home},
            {id: 6, title: "Show more", icon: home},
        ]
    },
    {
        id: 3, 
        title: "Subscriptions",
        data: [
            {id: 2, title: "Mirziyod Sunatillayev", icon: home},
            {id: 1, title: "Mirziyod Sunatillayev", icon: home},
            {id: 3, title: "Mirziyod Sunatillayev", icon: home},
            {id: 4, title: "Mirziyod Sunatillayev", icon: home},
            {id: 5, title: "Mirziyod Sunatillayev", icon: home},
            {id: 6, title: "Mirziyod Sunatillayev", icon: home},
            {id: 7, title: "Mirziyod Sunatillayev", icon: home},
            {id: 8, title: "Mirziyod Sunatillayev", icon: home},
        ]
    },
    {
        id: 4, 
        title: "More from You Tube",
        data: [
            {id: 1, title: "You Tube Premium", icon: home},
            {id: 2, title: "Settings", icon: home},
            {id: 3, title: "Help", icon: home},
            {id: 4, title: "Report Issue", icon: home},
            
        ]
    },


]