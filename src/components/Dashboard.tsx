import { useEffect, useMemo } from "react";
import { useParams } from "react-router-dom";
import classNames from "classnames";
import useFetch from "../hooks/useFetch";

import TimeStampBadge from "./TimeStampBadge";
import { api } from "../config/api";
import { IloggedInUser, ResponseType } from "../helper/types";
import { API_ENDPOINT } from "../helper/constant";

import userAvatar from "../assets/userAvatar.png";

const Dashboard = () => {
  const { id } = useParams();
  const { data, error, isLoading, fetchData } = useFetch<ResponseType<IloggedInUser>>();

  useEffect(() => {
    fetchData(API_ENDPOINT + api.getUserById + id);
  }, []);

  const user = useMemo(() => {
    return data?.data;
  }, [data?.data]);

  const commonCardHeadingClassName = classNames("text-xs mr-2 font-medium");

  return (
    <section className="bg-white">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <div className="grid grid-cols-2 gap-5">
          {isLoading ? (
            <p>Loading...</p>
          ) : error ? (
            <p>Something went wrong!!</p>
          ) : (
            <div className="w-full max-w-5xl bg-white border border-gray-200 rounded-lg shadow py-10 px-14">
              <div className="flex flex-col items-center pb-10">
                <img className="w-24 h-24 mb-3 rounded-full shadow-lg" src={user?.profile ?? userAvatar} alt={user?.name} />
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
      </div>
    </section>
  );
};

export default Dashboard;
