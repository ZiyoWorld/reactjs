import  home  from "../assets/icons/home.svg";
import trending  from "../assets/icons/trending.svg";
import subscribe  from "../assets/icons/subscribe.svg";
import  library  from "../assets/icons/library.svg";
import  history  from "../assets/icons/history.svg";
import  videos  from "../assets/icons/videos.svg";
import  watchlater  from "../assets/icons/watchlater.svg";
import  like  from "../assets/icons/like.svg";
import arrow  from "../assets/icons/arrow.svg";
import  youtube  from "../assets/icons/youtube.svg";
import  settings  from "../assets/icons/settings.svg";
import  help  from "../assets/icons/help.svg";
import  report  from "../assets/icons/report.svg";
import prof from '../assets/imgs/profil.png';








import styled from "styled-components";

const Icons = styled.div``;

Icons.Home = styled(home)`
   width: 16px;
   height: 16px; 
`;




 const sidebar = [
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
            {id: 3, title: "Your Videos", icon: videos},
            {id: 4, title: "Watch later", icon: watchlater},
            {id: 5, title: "Liked Videos", icon: like},
            {id: 6, title: "Show more", icon: arrow},
        ]
    },
    {
        id: 3, 
        title: "Subscriptions",
        data: [
            {id: 2, title: "Mirziyod Sunatillayev", icon: prof },
            {id: 1, title: "Mirziyod Sunatillayev", icon: prof},
            {id: 3, title: "Mirziyod Sunatillayev", icon: prof},
            {id: 4, title: "Mirziyod Sunatillayev", icon: prof},
            {id: 5, title: "Mirziyod Sunatillayev", icon: prof},
            {id: 6, title: "Mirziyod Sunatillayev", icon: prof},
            {id: 7, title: "Mirziyod Sunatillayev", icon: prof},
            {id: 8, title: "Mirziyod Sunatillayev", icon: prof},
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


];

export default sidebar;