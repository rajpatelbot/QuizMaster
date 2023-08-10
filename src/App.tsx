import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { useDispatch } from "react-redux";
import { ToastContainer } from "react-toastify";
import { setLoggedInUser } from "./store/slice/baseSlice";

import Navbar from "./layouts/Navbar";
import HomePage from "./pages/Home.page";
import QuizConfig from "./pages/QuizConfig.page";
import Quiz from "./pages/Quiz.page";

import Signup from "./features/auth/Signup";
import Login from "./features/auth/Login";

import ProtectedRoute from "./components/authRoutes/ProtectedRoute";
import PrivateRoute from "./components/authRoutes/PrivateRoute";

import { getCookie } from "./helper";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const dispatch = useDispatch();

  const isLoggedIn = getCookie();

  useEffect(() => {
    if (!isLoggedIn) {
      dispatch(setLoggedInUser(null));
    }
  }, [isLoggedIn, dispatch]);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route
          path="/quiz-config"
          element={
            <PrivateRoute>
              <QuizConfig />
            </PrivateRoute>
          }
        />

        <Route
          path="/quiz"
          element={
            <PrivateRoute>
              <Quiz />
            </PrivateRoute>
          }
        />

        <Route
          path="/signup"
          element={
            <ProtectedRoute>
              <Signup />
            </ProtectedRoute>
          }
        />
        <Route
          path="/login"
          element={
            <ProtectedRoute>
              <Login />
            </ProtectedRoute>
          }
        />
      </Routes>

      <ToastContainer position="bottom-right" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} draggable pauseOnHover theme="light" />
    </>
  );
};

export default App;
