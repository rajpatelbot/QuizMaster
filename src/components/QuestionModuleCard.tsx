import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import classNames from "classnames";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { ReduxStateInterface } from "../store/slice/types";
import useFetch from "../hooks/useFetch";

import { PrimaryButton } from "./buttons/buttons";
import TimeStampBadge from "./TimeStampBadge";

import { IQuestionsModule } from "../features/questionModule/types";
import { IloggedInUser, IQuestionsModuleResponse, ResponseType } from "../helper/types";
import { delteQuestions } from "../api/questionModule";

interface IProps {
  item: IQuestionsModule;
}

const QuestionModuleCard = ({ item }: IProps) => {
  const naviagte = useNavigate();
  const dispatch = useDispatch();

  const { id } = useParams();
  const { fetchData } = useFetch<IQuestionsModuleResponse>();

  const loggedIn: ResponseType<IloggedInUser> | null = useSelector((state: ReduxStateInterface) => state.base.loggedInUser);

  const commonCardHeadingClassName = classNames("text-xs mr-2 font-medium");

  const commonCardClassName = classNames("bg-blue-100 text-blue-800 text-xs text-center font-medium mr-2 px-2 py-0.5 rounded", {
    "bg-blue-200": item.createdBy?._id === loggedIn?.data?._id,
  });

  const handleQueModuleDelete = useCallback(() => {
    if (!item?._id) return;
    delteQuestions(item._id, dispatch, fetchData);
  }, [item?._id]);

  return (
    <div key={item?._id} className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow">
      <div className="mb-5">
        <TimeStampBadge className={commonCardClassName} key={item?._id} time={item?.createdAt ?? ""} />
      </div>

      <h5 className="text-2xl font-bold tracking-tight text-gray-900">{item.title}</h5>

      <div className="grid grid-cols-2 md:grid-cols-2 gap-4 py-5">
        <div className="flex items-center">
          <span className={commonCardHeadingClassName}>Difficulty</span>
          <span className={commonCardClassName}>{item?.difficulty}</span>
        </div>
        <div>
          <span className={commonCardHeadingClassName}>Duration</span>
          <span className={commonCardClassName}>{item?.duration + " sec"}</span>
        </div>
        <div>
          <span className={commonCardHeadingClassName}>Total Point</span>
          <span className={commonCardClassName}>{item?.totalPoint}</span>
        </div>
        <div>
          <span className={commonCardHeadingClassName}>Category</span>
          <span className={commonCardClassName}>{item?.category}</span>
        </div>

        {!id && (
          <div className="cursor-pointer" onClick={() => naviagte(`/dashboard/${item?.createdBy?._id}`)}>
            <span className={commonCardHeadingClassName}>Created By</span>
            <span className={commonCardClassName}>{item?.createdBy?._id !== loggedIn?.data?._id ? item?.createdBy?.name : "You"}</span>
          </div>
        )}
      </div>

      <div className="flex items-center justify-between">
        <PrimaryButton text={"Play Now"} type={"button"} />

        {loggedIn?.data?._id === item.createdBy?._id && (
          <RiDeleteBin6Fill type="button" onClick={handleQueModuleDelete} className="text-xl cursor-pointer text-red-700" />
        )}
      </div>
    </div>
  );
};

export default QuestionModuleCard;
