import { Route, Routes } from "react-router-dom";
import Navbar from "./layouts/Navbar";
import HomePage from "./pages/Home.page";
import QuizConfig from "./pages/QuizConfig.page";
import Quiz from "./pages/Quiz.page";
import Signup from "./components/auth/Signup";
import Login from "./components/auth/Login";

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
    </>
  );
};

export default App;
