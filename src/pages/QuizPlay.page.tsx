import { useSelector } from "react-redux";
import classNames from "classnames";

import { IQuestionsModule } from "../features/questionModule/types";
import { IReduxStateForQuizPlay } from "../store/slice/types";
import { SecondaryButton } from "../components/buttons/buttons";

const QuizPlay = () => {
  const selectedQuiz: IQuestionsModule | null = useSelector((state: IReduxStateForQuizPlay) => state.quizPlay.selectedQuizModule);

  const quizInfoStyle = classNames("font-semibold");

  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="p-4 mb-4 text-sm text-blue-800 rounded-lg bg-blue-50" role="alert">
        <div className="px-4 mx-auto max-w-screen-xl h-full flex justify-between">
          <span className={quizInfoStyle}>Category: {selectedQuiz?.category ?? "-"}</span>
          <span className={quizInfoStyle}>Total questions: {selectedQuiz?.questions?.length ?? "-"}</span>
          <span className={quizInfoStyle}>Difficulty: {selectedQuiz?.difficulty ?? "-"}</span>
          <span className={quizInfoStyle}>Duration: {selectedQuiz?.duration + "sec" ?? "-"}</span>
          <span className={quizInfoStyle}>Created By: {selectedQuiz?.createdBy?.name ?? "-"}</span>
        </div>
      </div>

      <section className="bg-white dark:bg-gray-900" style={{ height: "80vh" }}>
        <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 h-full">
          <div className="lg:mt-0 lg:col-span-5 lg:flex">
            <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/phone-mockup.png" alt="mockup" />
          </div>

          <div className="place-self-center lg:col-span-5 ml-5 md:ml-40 w-full">
            <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">What is javascript?</p>

            <div className="flex flex-wrap gap-4 my-5">
              <div className="flex items-center pl-4 border border-gray-200 rounded dark:border-gray-700 w-60">
                <input
                  id="bordered-radio-1"
                  type="radio"
                  value=""
                  name="bordered-radio"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label htmlFor="bordered-radio-1" className="w-full py-4 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                  Default radio
                </label>
              </div>

              <div className="flex items-center pl-4 border border-gray-200 rounded dark:border-gray-700 w-60">
                <input
                  checked
                  id="bordered-radio-2"
                  type="radio"
                  value=""
                  name="bordered-radio"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label htmlFor="bordered-radio-2" className="w-full py-4 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                  Checked state
                </label>
              </div>

              <div className="flex items-center pl-4 border border-gray-200 rounded dark:border-gray-700 w-60">
                <input
                  checked
                  id="bordered-radio-2"
                  type="radio"
                  value=""
                  name="bordered-radio"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label htmlFor="bordered-radio-2" className="w-full py-4 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                  Checked state
                </label>
              </div>

              <div className="flex items-center pl-4 border border-gray-200 rounded dark:border-gray-700 w-60">
                <input
                  checked
                  id="bordered-radio-2"
                  type="radio"
                  value=""
                  name="bordered-radio"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label htmlFor="bordered-radio-2" className="w-full py-4 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                  Checked state
                </label>
              </div>

              <SecondaryButton text="Previous" type="button" />
              <SecondaryButton text="Next" type="button" />
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default QuizPlay;
