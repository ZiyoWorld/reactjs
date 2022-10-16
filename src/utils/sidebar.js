import { ReactComponent as home } from "../assets/icons/home.svg";
import { ReactComponent as trending } from "../assets/icons/trending.svg";
import { ReactComponent as subscribe } from "../assets/icons/subscribe.svg";
import { ReactComponent as library } from "../assets/icons/library.svg";
import { ReactComponent as history } from "../assets/icons/history.svg";
import { ReactComponent as video } from "../assets/icons/video.svg";
import { ReactComponent as watchlater } from "../assets/icons/watchlater.svg";
import { ReactComponent as like } from "../assets/icons/like.svg";
import { ReactComponent as arrow } from "../assets/icons/arrow.svg";
import { ReactComponent as youtube } from "../assets/icons/youtube.svg";
import { ReactComponent as settings } from "../assets/icons/settings.svg";
import { ReactComponent as help } from "../assets/icons/help.svg";
import { ReactComponent as report } from "../assets/icons/report.svg";





import styled from "styled-components";

const Icons = styled.div``;

Icons.Home = styled(home)`
   width: 16px;
   height: 16px; 
`;


export const sidebar = [
    {
        id: 1, 
        data: [
            {id: 1, title: "Home", icon: home },
            {id: 2, title: "Trending", icon: trending},
            {id: 3, title: "Subscription", icon: subscribe},
        ]
    },
    {
        id: 2, 
        data: [
            {id: 1, title: "Library", icon: library},
            {id: 2, title: "History", icon: history},
            {id: 3, title: "Your Videos", icon: video},
            {id: 4, title: "Watch later", icon: watchlater},
            {id: 5, title: "Liked Videos", icon: like},
            {id: 6, title: "Show more", icon: arrow},
        ]
    },
    {
        id: 3, 
        title: "Subscriptions",
        data: [
            {id: 2, title: "Mirziyod Sunatillayev", icon: youtube},
            {id: 1, title: "Mirziyod Sunatillayev", icon: youtube},
            {id: 3, title: "Mirziyod Sunatillayev", icon: youtube},
            {id: 4, title: "Mirziyod Sunatillayev", icon: youtube},
            {id: 5, title: "Mirziyod Sunatillayev", icon: youtube},
            {id: 6, title: "Mirziyod Sunatillayev", icon: youtube},
            {id: 7, title: "Mirziyod Sunatillayev", icon: youtube},
            {id: 8, title: "Mirziyod Sunatillayev", icon: youtube},
        ]
    },
    {
        id: 4, 
        title: "More from You Tube",
        data: [
            {id: 1, title: "You Tube Premium", icon: youtube},
            {id: 2, title: "Settings", icon: settings},
            {id: 3, title: "Help", icon: help},
            {id: 4, title: "Report Issue", icon: report},
            
        ]
    },


]