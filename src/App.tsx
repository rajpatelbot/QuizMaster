import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import Navbar from "./layouts/Navbar";
import HomePage from "./pages/Home.page";
import QuizConfig from "./pages/QuizConfig.page";
import Quiz from "./pages/Quiz.page";

import Signup from "./features/auth/Signup";
import Login from "./features/auth/Login";

import PostQuestionsPage from "./features/questionModule";

import ProtectedRoute from "./components/authRoutes/ProtectedRoute";
import PrivateRoute from "./components/authRoutes/PrivateRoute";

import "react-toastify/dist/ReactToastify.css";

const App = () => {
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
          path="/post-questions"
          element={
            <PrivateRoute>
              <PostQuestionsPage />
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

      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        draggable
        pauseOnFocusLoss={false}
        pauseOnHover
        theme="light"
      />
    </>
  );
};

export default App;
