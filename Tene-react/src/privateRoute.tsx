import type { JSX } from "react";
import { Navigate, useLocation } from "react-router";

const PrivateRoute = ({ children }: { children: JSX.Element }) => {
  const token = sessionStorage.getItem("token");
  const location = useLocation();

  if (!token) {
    // Redirect to login with memory of the intended page
    return <Navigate to="/admin" state={{ from: location }} replace />;
  }

  return children;
};

export default PrivateRoute;
