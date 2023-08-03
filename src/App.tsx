import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Navbar from "./layouts/Navbar";
import HomePage from "./pages/Home.page";
import QuizConfig from "./pages/QuizConfig.page";
import Quiz from "./pages/Quiz.page";
import Signup from "./features/auth/Signup";
import Login from "./features/auth/Login";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/quiz-config" element={<QuizConfig />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>

      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
};

export default App;
