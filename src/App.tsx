import { Route, Routes } from "react-router-dom";
import Navbar from "./components/layouts/Navbar";
import HomePage from "./pages/Home.page";
import QuizConfig from "./pages/QuizConfig.page";
import Quiz from "./pages/Quiz.page";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/quiz-config" element={<QuizConfig />} />
        <Route path="/quiz" element={<Quiz />} />
      </Routes>
    </>
  );
};

export default App;
