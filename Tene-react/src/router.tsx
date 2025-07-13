import { createBrowserRouter } from "react-router";
import AppLayout from "./components/appLayout";
import HomePage from "./components/pages/homePage";
import About from "./components/pages/about";
import MovingDetailsForm from "./components/forms/movingDetailsForm";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <AppLayout />,
        children: [
            { index: true, element: <HomePage /> },
            { path: '/about', element: <About/> },
            { path: '/sendRequest', element: <MovingDetailsForm/> },
          
        ]
    }
])
