import { useCallback, useEffect } from "react";
import { useDispatch } from "react-redux";
import classNames from "classnames";
import useFetch from "../hooks/useFetch";

import CardSkeletons from "../components/skeletons/CardSkeletons";
import QuestionModuleCard from "../components/QuestionModuleCard";

import { API_ENDPOINT, categories } from "../helper/constant";
import { IQuestionsModuleResponse } from "../helper/types";
import { IQuestionsModule } from "../features/questionModule/types";

import { api } from "../config/api";
import { delteQuestions } from "../api/questionModule";

const AllQuizzes = () => {
  const dispatch = useDispatch();
  const { data, error, isLoading, fetchData } = useFetch<IQuestionsModuleResponse>();

  useEffect(() => {
    fetchData(API_ENDPOINT + api.getQuestionsModules);
  }, []);

  const filterButtonClassName = classNames(
    "text-blue-700 hover:text-white border border-blue-600 bg-white hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-full text-base font-medium px-5 py-2.5 text-center mr-3 mb-3",
  );

  const handleQueModuleDelete = useCallback(
    (item: IQuestionsModule) => {
      if (!item?._id) return;
      delteQuestions(item._id, dispatch, fetchData);
    },
    [delteQuestions],
  );

  return (
    <section className="bg-white">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <div className="flex items-center justify-center py-4 md:py-8 flex-wrap">
          <button type="button" className={filterButtonClassName}>
            All Topics
          </button>
          {categories.map((item) => (
            <button key={item.label} type="button" className={filterButtonClassName}>
              {item.category}
            </button>
          ))}
        </div>

        <div className={!isLoading ? "flex items-start w-full flex-wrap gap-4" : ""}>
          {isLoading ? (
            <div className="flex items-start w-full flex-wrap gap-4">
              {[1, 2, 3, 4, 5].map((item) => (
                <CardSkeletons key={item} />
              ))}
            </div>
          ) : error ? (
            <p>Something went wrong!!</p>
          ) : data?.data?.length ? (
            data?.data.map((item) => <QuestionModuleCard key={item._id} item={item} handleQueModuleDelete={handleQueModuleDelete} />)
          ) : (
            <div className="flex justify-center items-center w-full h-full">
              <p className="text-2xl font-bold text-gray-500">No questions found!</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default AllQuizzes;
