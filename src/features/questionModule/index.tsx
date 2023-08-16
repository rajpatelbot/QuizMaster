import { Formik } from "formik";
import { IQuestionsModule } from "./types";
import PostQuestionForm from "./PostQuestionForm";

const initialValues: IQuestionsModule = {
  questions: null,
  category: null,
  difficulty: null,
  duration: 0,
  createdBy: "",
};

const PostQuestionsPage = () => {
  const handleQuestionsSubmit = (values: IQuestionsModule) => {
    console.log(values);
  };

  return (
    <div className="bg-white dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto h-full flex flex-col max-w-xl justify-center">
        <Formik initialValues={initialValues} onSubmit={handleQuestionsSubmit}>
          {(props) => <PostQuestionForm {...props} />}
        </Formik>
      </div>
    </div>
  );
};

export default PostQuestionsPage;
