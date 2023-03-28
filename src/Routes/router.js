import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Categories from "../Pages/Categories/Categories";
import Home from "../Pages/Home/Home";
import News from "../Pages/News/News";

export const router = createBrowserRouter([
    {
        path: '/', element: <Main />, children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: 'categories/:id',
                element: <Categories />
            },
            {
                path: 'news/:id',
                element: <News />
            }
        ]
    }
])