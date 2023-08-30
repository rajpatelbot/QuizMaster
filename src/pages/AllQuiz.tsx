import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import classNames from "classnames";
import useFetch from "../hooks/useFetch";

import { PrimaryButton } from "../components/buttons/buttons";
import CardSkeletons from "../components/skeletons/CardSkeletons";

import { API_ENDPOINT, categories } from "../helper/constant";
import { IQuestionsModuleResponse } from "../helper/types";
import { api } from "../config/api";
import TimeStampBadge from "../components/TimeStampBadge";

const AllQuizzes = () => {
  const naviagte = useNavigate();
  const { data, error, isLoading, fetchData } = useFetch<IQuestionsModuleResponse>();

  useEffect(() => {
    fetchData(API_ENDPOINT + api.getQuestionsModules);
  }, []);

  const commonCardHeadingClassName = classNames("text-xs mr-2 font-medium");

  const commonCardClassName = classNames("bg-blue-100 text-blue-800 text-xs text-center font-medium mr-2 px-2 py-0.5 rounded");

  const filterButtonClassName = classNames(
    "text-blue-700 hover:text-white border border-blue-600 bg-white hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-full text-base font-medium px-5 py-2.5 text-center mr-3 mb-3",
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
          ) : (
            data?.data.map((item) => (
              <div key={item._id} className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow">
                <div className="mb-5">
                  <TimeStampBadge key={item._id} time={item.createdAt} />
                </div>

                <a href="#">
                  <h5 className="text-2xl font-bold tracking-tight text-gray-900">Play with TypeScript</h5>
                </a>

                <div className="grid grid-cols-2 md:grid-cols-2 gap-4 py-5">
                  <div className="flex items-center">
                    <span className={commonCardHeadingClassName}>Difficulty</span>
                    <span className={commonCardClassName}>{item.difficulty}</span>
                  </div>
                  <div>
                    <span className={commonCardHeadingClassName}>Duration</span>
                    <span className={commonCardClassName}>{item.duration + " sec"}</span>
                  </div>
                  <div>
                    <span className={commonCardHeadingClassName}>Total Point</span>
                    <span className={commonCardClassName}>{item?.totalPoint}</span>
                  </div>
                  <div>
                    <span className={commonCardHeadingClassName}>Category</span>
                    <span className={commonCardClassName}>{item.category}</span>
                  </div>
                  <div className="cursor-pointer" onClick={() => naviagte("")}>
                    <span className={commonCardHeadingClassName}>Created By</span>
                    <span className={commonCardClassName}>{item.createdBy.name}</span>
                  </div>
                </div>
                <PrimaryButton text={"Play Now"} type={"button"} />
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default AllQuizzes;
