import Home from '../components/Home';
import Pages from '../components/Pages';
import Templates from '../components/Templates';
import Elements from '../components/Elements';
import Single from "../components/Single";
export const navbar =[
    {
        id: 1,
        title: 'Home',
        path: "/home",
        elements: <Home />,
        isPrivate: false,

    },
    {
        id: 5,
        title: 'Home',
        path: "/home/:id  ",
        elements: <Single />,
        isPrivate: false,

    },
    {
        id: 2,
        title: 'Elements',
        path: "/elements",
        elements: <Elements />,
        isPrivate: false,
    },
    {
        id: 3,
        title: 'Pages',
        path: "/pages",
        elements: <Pages />,
        isPrivate: true,
    },
    {
        id: 4,
        title: 'Templates',
        path: "/templates",
        elements: <Templates />,
        isPrivate: false,
    },
]