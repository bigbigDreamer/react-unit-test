import { RouteConfig } from 'react-router-config';
import Home from "../pages/home";
import DndPage from "../pages/dnd";

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
    }
];

export default routes;