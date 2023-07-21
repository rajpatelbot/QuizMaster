import { Route, Routes } from "react-router-dom";
import Navbar from "./components/layouts/Navbar";
import HomePage from "./pages/Home.page";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/language-choice" element={<HomePage />} />
      </Routes>
    </>
  );
};

export default App;
