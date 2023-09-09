import { useEffect, useMemo } from "react";
import { useParams } from "react-router-dom";
import classNames from "classnames";
import useFetch from "../hooks/useFetch";

import TimeStampBadge from "./TimeStampBadge";
import QuestionModuleCard from "./QuestionModuleCard";

import { api } from "../config/api";
import { API_ENDPOINT, defaultAvatar } from "../helper/constant";
import { IQuestionsModuleResponse, IloggedInUser, ResponseType } from "../helper/types";

import CardSkeletons from "./skeletons/CardSkeletons";

const Dashboard = () => {
  const { id } = useParams();

  const commonCardHeadingClassName = classNames("text-xs mr-2 font-medium");

  const {
    data: loggedInUserData,
    error: loggedInUserError,
    isLoading: loggedInUserLoading,
    fetchData: fetchLoggedInUser,
  } = useFetch<ResponseType<IloggedInUser>>();

  const {
    data: UserQuestionModule,
    error: userQuestionModuleError,
    isLoading: userQuestionModuleLoading,
    fetchData: fecthUserQuestionModule,
  } = useFetch<IQuestionsModuleResponse>();

  useEffect(() => {
    fetchLoggedInUser(API_ENDPOINT + api.getUserById + id);
    fecthUserQuestionModule(API_ENDPOINT + api.getQuestionsModulesById + id);
  }, []);

  const user = useMemo(() => {
    return loggedInUserData?.data;
  }, [loggedInUserData?.data]);

  const userQuestionModule = useMemo(() => {
    return UserQuestionModule?.data;
  }, [UserQuestionModule?.data]);

  return (
    <section className="bg-white">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <div className="grid grid-rows-3 grid-flow-col gap-4">
          <div className="md:col-span-1 row-span-3">
            {loggedInUserLoading ? (
              <CardSkeletons />
            ) : loggedInUserError ? (
              <p>Something went wrong!!</p>
            ) : (
              <div className="w-full max-w-5xl bg-white border border-gray-200 rounded-lg shadow py-10 px-14">
                <div className="flex flex-col items-center pb-10">
                  <img className="w-24 h-24 mb-3 rounded-full shadow-lg" src={user?.profile ?? defaultAvatar} alt={user?.name} />
                  <h5 className="my-3 text-xl font-medium">{user?.name}</h5>

                  <div className="flex items-center w-full my-1">
                    <span className={commonCardHeadingClassName}>Email:</span>
                    <span className="text-sm text-gray-500">{user?.email}</span>
                  </div>

                  <div className="flex items-center w-full my-1">
                    <span className={commonCardHeadingClassName}>Joined on:</span>
                    <TimeStampBadge time={user?.createdAt ?? ""} />
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="flex flex-row gap-4 flex-wrap">
            {userQuestionModuleLoading ? (
              [1, 2, 3, 4, 5, 6, 7, 8].map((item) => <CardSkeletons key={item} />)
            ) : userQuestionModuleError ? (
              <p>Something went wrong!!</p>
            ) : userQuestionModule?.length ? (
              userQuestionModule?.map((item) => <QuestionModuleCard key={item._id} item={item} />)
            ) : (
              <div className="flex justify-center w-full h-full">
                <p className="text-2xl font-bold text-gray-500">No questions posted!</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
