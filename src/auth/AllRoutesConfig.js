import {Route, Switch} from 'react-router-dom';
import HomeView from "../views/HomeView";
import CoursesView from "../views/CoursesView";
import CourseDetailsView from "../views/CourseDetailsView";

export const routesConfig = [
    {
        component: HomeView,
        path: '/home',
        title: 'HomeView',
        exact: true
    },
    {
        component: CoursesView,
        path: '/courses',
        title: 'CoursesView',
        exact: true
    },
    {
        component: CourseDetailsView,
        path: '/courses/:id',
        title: 'CoursesDetailsView',
        exact: true
    }
]

const AllRoutes = () => {
    return (
        <Switch>
            {
                routesConfig.map(route =>
                    <Route key={route.path} path={route.path} exact component={route.component} />
                )
            }
        </Switch>
    )
}

export default AllRoutes;