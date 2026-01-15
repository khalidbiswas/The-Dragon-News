import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout";
import Home from "../components/Pages/Home";
import CategoryNews from "../components/Pages/CategoryNews";
import Login from "../components/Pages/Login";
import AuthLayout from "../layouts/AuthLayout";
import Register from "../components/Pages/Register";
const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout></HomeLayout>,
        children: [
            {
                index: true,
                Component: Home
            },
            {
                path: "/category/:id",
                Component: CategoryNews,
                loader: async () => {
                    const res = await fetch('/news.json')
                    return res.json()
                }
            }
        ]
    },
    {
        path: "/auth",
        element: <AuthLayout></AuthLayout>,
        children: [
            {
                index:true,
                path:'/auth/login/',
                element:<Login></Login>
            },
            {
                path:'/auth/register/',
                element:<Register></Register>
            }
        ]
    },
    {
        path: "/news",
        element: <h1>News</h1>
    },
    {
        path: "/*",
        element: <h1> 404 <br />  Not found</h1>
    }

])
export default router;    