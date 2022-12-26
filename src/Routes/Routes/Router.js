import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import About from "../../Pages/About/About";
import Home from "../../Pages/Home/Home";
import DisplayError from "../../Shared/DisplayError/DisplayError";

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
            }
            // {
            //     path: '/login',
            //     element: <Login></Login>
            // },
            // {
            //     path: '/signup',
            //     element: <SignUp></SignUp>
            // },
        ]
    },
  
])
export default router;