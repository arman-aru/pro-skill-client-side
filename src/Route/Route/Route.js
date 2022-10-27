import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Blog from '../../Components/Blog/Blog';
import Course from '../../Components/Courses/Course';
import CourseDetails from '../../Components/Courses/CourseDetails';
import Courses from '../../Components/Courses/Courses';
import ErrorPage from '../../Components/ErrorPage/ErrorPage';
import FAQ from '../../Components/FAQ/FAQ';
import Home from '../../Components/Home/Home';
import Login from '../../Components/Login/Login';
import Registration from '../../Components/Login/Registration';
import Main from '../../layout/Main';
import PrivateRoute from './PrivateRoute/PrivateRoute';


  export const route = createBrowserRouter([
        {path:'/',element:<Main></Main>,children:[
            {path:'/',element:<Home></Home>},
           
            {path:'/courses',  
            loader:()=> fetch('https://pro-skill-server.vercel.app/course'),     
            element:<Courses></Courses>,children:[
                {path:'/courses/course/:id',loader:({params})=> fetch(`https://pro-skill-server.vercel.app/course/${params.id}`),
                element:<Course></Course>}
            ]
        },
            {path:'details/:id',loader:({params})=> fetch(`https://pro-skill-server.vercel.app/course/${params.id}`), element:<PrivateRoute><CourseDetails></CourseDetails> </PrivateRoute>},
            {path:'/blog',element:<Blog></Blog>},
            {path:'/faq',element:<FAQ></FAQ>},
            {path:'/login',element:<Login></Login>},
            {path:'/register',element:<Registration></Registration>}
        ]},
        {path:'*', element:<ErrorPage></ErrorPage>}
    ])
       

