import './layout.scss'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import HomePage from "./routes/homePage/homePage.jsx";
import ListPage from "./routes/listPage/listPage.jsx";

function App() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <HomePage/>
        },
        {
            path: "/list",
            element: <ListPage/>
        },
    ])

    return (
        // <div className="layout">
        //     <div className="navbar">
        //         <Navbar/>
        //     </div>
        //     <div className="content">
        //         <HomePage/>
        //     </div>
        // </div>
        <RouterProvider router={router}/>
    )
}

export default App