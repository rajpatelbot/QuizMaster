import { useNavigate } from "react-router-dom";
import { languages, level } from "../helper/constant";

const QuizConfig = () => {
  const navigate = useNavigate();

  return (
    <section className="bg-white dark:bg-gray-900" style={{ height: "90vh" }}>
      <div className="px-4 mx-auto max-w-screen-xl lg:py-16 h-full flex flex-col">
        <p className="my-8 text-lg font-normal text-center text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-400">
          Quiz Configuaration
        </p>

        <form className="max-w-xl w-full mx-auto">
          {/* <div
            className="p-4 mb-4 text-sm text-blue-800 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400"
            role="alert"
          >
            <span className="font-medium">Info alert!</span> These changes will only effect for this quiz. Rest of the
            config will be same as global setting.
          </div> */}

          <div className="mt-5">
            <label htmlFor="language" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Select the language
            </label>
            <select
              id="countries"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              {languages.map((language, index) => (
                <option key={index}>{language.option}</option>
              ))}
            </select>
          </div>

          <div className="my-5 flex gap-5">
            <div className="flex-1">
              <label
                htmlFor="numberofquestion"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                No. of Questions
              </label>
              <input
                type="number"
                id="noofquestion"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="10"
              />
            </div>
            <div className="flex-1">
              <label htmlFor="time" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Time
              </label>
              <input
                type="number"
                id="time"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="60s"
              />
            </div>
          </div>

          <fieldset className="my-5">
            <legend className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select a level</legend>
            <div className="flex items-center gap-5">
              {level.map((data, index) => (
                <div className="flex items-center" key={index}>
                  <input
                    id="level-option-1"
                    type="radio"
                    name="level"
                    value={data.level}
                    className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label htmlFor={data.id} className="block ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                    {data.level}
                  </label>
                </div>
              ))}
            </div>
          </fieldset>

          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-3 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            onClick={() => navigate("/quiz")}
          >
            Start Quiz
          </button>
        </form>
      </div>
    </section>
  );
};

export default QuizConfig;
