import { createBrowserRouter, Navigate } from "react-router";
import AppLayout from "./components/appLayout";
import HomePage from "./components/pages/homePage";
import About from "./components/pages/about";
import MovingDetailsForm from "./components/forms/movingDetailsForm";
import AdminLogin from "./components/admin/adminLogin";
import AdminProductPanel from "./components/admin/adminProductPanel";
import PrivateRoute from "./privateRoute";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <AppLayout />,
        children: [
            { index: true, element: <HomePage /> },
            { path: '/about', element: <About/> },
            // { path: '/sendRequest', element: <MovingDetailsForm/> },
           {
        path: "sendRequest",
        element: <MovingDetailsForm />,
        children: [
          { index: true, element: <Navigate to="customer" replace /> },
          { path: "customer", element: <MovingDetailsForm /> },
          { path: "moving", element: <MovingDetailsForm /> },
          { path: "categories", element: <MovingDetailsForm /> },
          { path: "summary", element: <MovingDetailsForm /> },
        ],
      },

            { path: '/admin', element: <AdminLogin/> },
            // { path: '/', element: <AdminLogin/> },

            { path: '/adminProductPanel', element: (
    <PrivateRoute>
      <AdminProductPanel />
    </PrivateRoute>
  ),},
          
        ]
    }
])
