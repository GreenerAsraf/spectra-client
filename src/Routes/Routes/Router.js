import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import About from "../../Pages/About/About";
import Home from "../../Pages/Home/Home";
import Media from "../../Pages/Media/Media";
import MyMedia from "../../Pages/Media/MyMedia";
import Message from "../../Pages/Message/Message";
import Profile from "../../Pages/Profile/Profile";
import DisplayError from "../../Shared/DisplayError/DisplayError";
import Login from "../../Shared/Login/Login";
import Signup from "../../Shared/Signup/Signup";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>, 
        errorElement: <DisplayError></DisplayError>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/about',
                element:<About></About>
            },
            {
                path: '/media',
                element:<Media></Media>
            },
            {
                path: '/myMedia',
                loader: async ()=>{
                    return fetch('https://spectra-server-two.vercel.app/create');
                } ,
               
                element:<MyMedia></MyMedia> 
            },
            {
                path: '/message',
                element:<Message></Message>
            },
            {
                path: '/profile',
                element:<Profile></Profile>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <Signup></Signup>
            },
        ]
    },
  
])
export default router;