import {Route, Switch} from 'react-router-dom';
import HomeView from "../views/HomeView";
import CoursesView from "../views/CoursesView";
import CourseDetailsView from "../views/CourseDetailsView";
import AllQuizzesView from "../views/AllQuizzesView.js";
import QuizDetailsView from "../views/QuizDetailsView"
import LectureView from  "../views/LectureView"
import Forum from "../views/Forum"
import Exam from "../views/Exam"
import Login from "../views/Login"
import Register from "../views/Register";

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
    },
    {
        component: AllQuizzesView,
        path: '/quizzes',
        title: 'AllQuizzesView',
        exact: true
    },
    {
        component: QuizDetailsView,
        path: '/quizzes/:id',
        title: 'QuizDetailsView',
        exact: true
    },
    {
        component: LectureView,
        path: '/lecture',
        title: 'LectureView',
        exact: true
    },
    {
        component: Forum,
        path: '/forum',
        title: 'Forum',
        exact: true
    },
    {
        component: Exam,
        path: '/exam/:id',
        title: 'Exam',
        exact: true
    },
    {
        component: AllQuizzesView,
        path: '/quizzes/result/:id',
        title: 'ExamView',
        exact: true
    },
    {
        component: Login,
        path: '/login',
        title: 'Login',
        exact: true
    },
    {
        component: Register,
        path: '/register',
        title: 'Register',
        exact: true
    },



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