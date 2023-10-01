import { useSelector } from "react-redux";
import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CiWarning } from "react-icons/ci";
import classNames from "classnames";
import { IReduxStateForQuizPlay } from "../store/slice/types";

import { PrimaryButton, SecondaryButton } from "../components/buttons/buttons";
import { IQuestionsModule } from "../features/questionModule/types";

const QuizPlay = () => {
  const navigate = useNavigate();
  const [quizResult, setQuizResult] = useState<number>(0);

  const [selectedOption, setSelectedOption] = useState<string[]>(Array(10).fill(""));
  const [currentQuesIndex, setCurrentQuesIndex] = useState<number>(0);

  const selectedQuiz: IQuestionsModule | null = useSelector((state: IReduxStateForQuizPlay) => state.quizPlay.selectedQuizModule);

  const quizInfoStyle = classNames("font-semibold");

  const questionLength = useMemo(() => {
    return selectedQuiz?.questions?.length ? selectedQuiz?.questions?.length - 1 : 0;
  }, []);

  useEffect(() => {
    if (!selectedQuiz) {
      navigate("/quiz");
    }
  }, [selectedQuiz]);

  const checkAnswer = () => {
    let result = 0;
    selectedQuiz?.questions?.forEach((question, index) => {
      if (question.correctAnswer === selectedOption[index]) {
        result += question.point || 0;
      }
    });

    setQuizResult(result);
  };

  useEffect(() => {
    if (questionLength !== currentQuesIndex) return;
    alert(`Your score is ${quizResult}`);
    navigate("/quiz");
  }, [quizResult]);

  return (
    <section className="bg-white">
      <div className="p-4 text-sm text-blue-800 rounded-lg bg-blue-50" role="alert">
        <div className="px-4 mx-auto max-w-screen-xl h-full flex justify-between">
          <span className={quizInfoStyle}>Category: {selectedQuiz?.category ?? "-"}</span>
          <span className={quizInfoStyle}>Total questions: {selectedQuiz?.questions?.length ?? "-"}</span>
          <span className={quizInfoStyle}>Difficulty: {selectedQuiz?.difficulty ?? "-"}</span>
          {/* <span className={quizInfoStyle}>Duration: {selectedQuiz?.duration + "sec" ?? "-"}</span> */}
          <span className={quizInfoStyle}>Created By: {selectedQuiz?.createdBy?.name ?? "-"}</span>
          {/* <span className={quizInfoStyle}>Results: {quizResult ?? 0}</span> */}
        </div>
      </div>

      <div className="p-3 text-sm text-blue-800 bg-yellow-200" role="alert">
        <div className="px-4 mx-auto max-w-screen text-center flex items-center justify-center gap-1">
          <CiWarning className="w-6 h-6" /> Warning: Reloading the page will erase your progress. You'll have to start from scratch!
        </div>
      </div>

      <section className="bg-white" style={{ height: "80vh" }}>
        <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 h-full">
          <div className="lg:mt-0 lg:col-span-5 lg:flex">
            <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/phone-mockup.png" alt="mockup" />
          </div>

          <div className="place-self-center lg:col-span-5 ml-5 md:ml-40 w-full">
            <p className="max-w-2xl mb-6 font-light lg:mb-8 md:text-lg lg:text-xl">
              {`Q-${currentQuesIndex + 1}: ${selectedQuiz?.questions?.[currentQuesIndex].question}` ?? "-"}
            </p>

            <div className="flex flex-wrap gap-4 my-5">
              {selectedQuiz?.questions?.[currentQuesIndex].options.map((option, index) => (
                <div key={index} className="flex items-center pl-4 border border-gray-200 rounded dark:border-gray-700 w-60">
                  <input
                    id={`option-${index}`}
                    type="radio"
                    name="option"
                    value={option}
                    checked={selectedOption.includes(option)}
                    onChange={() => {
                      const updatedOptions = [...selectedOption];
                      updatedOptions[currentQuesIndex] = option.trim();
                      setSelectedOption(updatedOptions);
                    }}
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2"
                  />
                  <label htmlFor={`option-${index}`} className="w-full py-4 ml-2 text-sm font-medium text-gray-900">
                    {option}
                  </label>
                </div>
              ))}
            </div>

            <div className="flex items-center justify-between mb-10 flex-wrap">
              <div className="flex items-center">
                <SecondaryButton
                  type="button"
                  text="<< Previous"
                  disabled={currentQuesIndex === 0}
                  callbackFn={() => setCurrentQuesIndex(currentQuesIndex - 1)}
                />
                <SecondaryButton
                  text="Next >>"
                  type="button"
                  disabled={currentQuesIndex === questionLength}
                  callbackFn={() => setCurrentQuesIndex(currentQuesIndex + 1)}
                />
              </div>

              {currentQuesIndex === questionLength ? <PrimaryButton callbackFn={checkAnswer} text="Go to Result >>" type="button" /> : null}
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default QuizPlay;
