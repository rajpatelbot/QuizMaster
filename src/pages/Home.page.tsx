import { useNavigate } from "react-router-dom";
import { PrimaryButton, SecondaryButton } from "../components/buttons/buttons";

const HomePage = () => {
  const navigate = useNavigate();

  const navigateToQuizConfig = () => {
    navigate("/all-quizzes");
  };

  return (
    <section className="bg-white dark:bg-gray-900" style={{ height: "90vh" }}>
      <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 h-full flex flex-col items-center justify-center">
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-blue-600 md:text-5xl lg:text-6xl">
          Welcome to QuizMaster
        </h1>
        <h1 className="mb-4 text-xl text-red-600 md:text-2xl lg:text-4xl">The Ultimate Quiz Experience</h1>
        <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48">
          You will get a chance to test your knowledge of JavaScript, React.js and Typescript with fun.
        </p>
        <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
          <PrimaryButton text="Get Started" callbackFn={navigateToQuizConfig} type="button" />
          <SecondaryButton text="Github" type="button" />
        </div>
      </div>
    </section>
  );
};

export default HomePage;
