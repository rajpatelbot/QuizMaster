import { Formik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { ReduxStateInterface } from "../../store/slice/types";
import PostQuestionForm from "./PostQuestionForm";
import { postQuestions } from "../../api/questionModule";
import { IloggedInUser, ResponseType } from "../../helper/types";
import { IQuestionsModule } from "./types";

const initialValues: IQuestionsModule = {
  questions: null,
  category: null,
  difficulty: null,
  duration: 0,
  createdBy: "",
};

const PostQuestionsPage = () => {
  const dispatch = useDispatch();

  const loggedIn: ResponseType<IloggedInUser> | null = useSelector((state: ReduxStateInterface) => state.base.loggedInUser);

  const handleQuestionsPost = (values: IQuestionsModule) => {
    const newPayload: IQuestionsModule = { ...values, createdBy: loggedIn?.data?._id ?? "" };
    postQuestions(newPayload, dispatch);
  };

  return (
    <div className="bg-white dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto h-full flex flex-col max-w-3xl justify-center">
        <Formik initialValues={initialValues} onSubmit={handleQuestionsPost}>
          {(props) => <PostQuestionForm {...props} />}
        </Formik>
      </div>
    </div>
  );
};

export default PostQuestionsPage;