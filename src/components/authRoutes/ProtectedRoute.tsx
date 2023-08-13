import { Navigate } from "react-router-dom";
import { getCookie } from "../../helper";

const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
  const isLoggedIn = getCookie();

  if (isLoggedIn) {
    return <Navigate to="/" />;
  }
  return children;
};

export default ProtectedRoute;
