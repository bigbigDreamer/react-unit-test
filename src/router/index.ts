import { RouteConfig } from 'react-router-config';
import Home from "../pages/home";
import DndPage from "../pages/dnd";
import ReduxContainer from "../pages/redux";

const routes: Array<RouteConfig> = [
    {
        path: '/',
        component: Home,
        routes: [],
        exact: true,
    }, {
        path: '/dnd-demo',
        component: DndPage,
        routes: []
    }, {
        path: '/redux-demo',
        component: ReduxContainer
    }
];

export default routes;