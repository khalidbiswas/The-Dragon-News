import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout";

const router = createBrowserRouter([
    {
        path:"/",
        element: <HomeLayout></HomeLayout>
    },
    {
        path:"/auth",
        element: <h1>Auth</h1>
    },
    {
        path:"/news",
        element: <h1>News</h1>
    },
    {
        path:"/*",
        element: <h1> 404 <br />  Not found</h1>
    }

])     
export default router;    