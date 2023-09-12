import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import Navbar from "./layouts/Navbar";
import HomePage from "./pages/Home.page";
import Quiz from "./pages/AllQuiz";
import AllQuizzes from "./pages/AllQuiz";

import Signup from "./features/auth/Signup";
import Login from "./features/auth/Login";

import PostQuestionsPage from "./features/questionModule";

import ProtectedRoute from "./components/authRoutes/ProtectedRoute";
import PrivateRoute from "./components/authRoutes/PrivateRoute";
import Dashboard from "./components/Dashboard";

import "react-toastify/dist/ReactToastify.css";
import QuizPlay from "./pages/QuizPlay.page";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="/all-quizzes" element={<AllQuizzes />} />

        <Route
          path="/dashboard/:id"
          element={
            <PrivateRoute>
              <Dashboard />
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
          path="/play-quiz"
          element={
            <PrivateRoute>
              <QuizPlay />
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
