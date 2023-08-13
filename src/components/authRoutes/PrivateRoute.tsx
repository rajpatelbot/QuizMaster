import { Navigate } from "react-router-dom";
import { getCookie } from "../../helper";

const PrivateRoute = ({ children }: { children: JSX.Element }) => {
  const isLoggedIn = getCookie();

  if (isLoggedIn) {
    return children;
  } else {
    return <Navigate to="/login" />;
  }
};

export default PrivateRoute;
