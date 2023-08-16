import Select, { SingleValue } from "react-select";
import { Field, Form, FormikProps } from "formik";
import { useSelector } from "react-redux";
import classNames from "classnames";
import { ReduxStateInterface } from "../../store/slice/types";
import { PrimaryButton, SecondaryButton } from "../../components/buttons/buttons";
import { categories, difficulties } from "../../helper/constant";
import { ICategory } from "../../helper/types";
import { IQuestionsModule } from "./types";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";

const PostQuestionForm = ({ values, handleChange, handleBlur, dirty, setFieldValue, setFieldTouched }: FormikProps<IQuestionsModule>) => {
  const loading = useSelector((state: ReduxStateInterface) => state.base.loading);

  const inputClassName = classNames("border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5", {
    "bg-slate-200": loading,
    "bg-white border": !loading,
  });

  const handleCategoryChange = (selectedOption: SingleValue<ICategory>) => {
    setFieldValue("category", selectedOption?.category ?? null);
  };

  return (
    <Form>
      <div className="mb-5 flex gap-3">
        {/* Category */}
        <div className="flex-1">
          <label htmlFor="category" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Category
          </label>
          <Select
            id="category"
            name="category"
            value={categories.find((ct) => ct.category === values.category) ?? null}
            options={categories}
            onBlur={() => setFieldTouched("category", true)}
            onChange={(selectedOption) => handleCategoryChange(selectedOption)}
            className="form-control"
            classNamePrefix="select"
            getOptionLabel={(option) => option.label}
            getOptionValue={(option) => option.category}
            isDisabled={loading}
          />
        </div>

        {/* Duration */}
        <div className="flex-1">
          <label htmlFor="duration" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Duration
          </label>
          <input id="duration" type="number" name="duration" value={values.duration} onChange={handleChange} onBlur={handleBlur} placeholder="60s" className={inputClassName} />
        </div>
      </div>

      {/* Difficulty */}
      <fieldset className="my-5">
        <legend className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Difficulty</legend>
        <div role="group" aria-labelledby="my-difficulty-group" className="flex items-center gap-5">
          {difficulties.map((data, i) => (
            <div className="flex items-center" key={i}>
              <Field
                id="level-option-1"
                type="radio"
                name="difficulty"
                value={data.difficulty}
                onChange={handleChange}
                className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"
              />
              <label htmlFor={data.difficulty} className="block ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                {data.difficulty}
              </label>
            </div>
          ))}
        </div>
      </fieldset>

      {/* Questions */}
      <div className="mb-5">
        <label htmlFor="Questions" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Questions
        </label>
        <div className="flex gap-3">
          <input id="Questions" type="text" name="Questions" onBlur={handleBlur} placeholder="Enter the question" className={inputClassName} />
        </div>
      </div>

      {/* Options */}
      <div className="mb-5">
        <label htmlFor="options" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Options
        </label>
        <div className="flex gap-3">
          <input id="options" type="text" name="options" onBlur={handleBlur} placeholder="Enter the option" className={inputClassName} />
          <SecondaryButton text="Add" type="button" loading={loading} disabled={loading || !dirty} className="w-36" />
        </div>
        <div className="my-5 flex items-center flex-wrap gap-8 gap-y-5">
          <div className="flex items-center gap-1">
            <p className="mr-2">Option 1</p>
            <AiOutlineEdit className="text-green-500 cursor-pointer" />
            <AiOutlineDelete className="text-red-500 cursor-pointer" />
          </div>
        </div>
      </div>

      <div className="my-5 gap-3 flex">
        {/* Correct Ans */}
        <div className="flex-1">
          <label htmlFor="correctAnswer" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Correct answer
          </label>
          <div className="flex">
            <input id="correctAnswer" type="text" name="correctAnswer" onBlur={handleBlur} placeholder="Enter the correct answer" className={inputClassName} />
          </div>
        </div>

        {/* Per question Point */}
        <div className="flex-1">
          <label htmlFor="point" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Per question Point
          </label>
          <div className="flex">
            <input id="point" type="number" name="point" onBlur={handleBlur} placeholder="Enter a point" className={inputClassName} />
          </div>
        </div>
      </div>

      {/* Question image */}
      <div className="mb-5">
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" htmlFor="quesImg">
          Upload question image
        </label>

        <input
          className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50"
          aria-describedby="user_avatar_help"
          id="quesImg"
          type="file"
          accept="image/*"
        />
      </div>

      {/* Buttons */}
      <div className="flex gap-1 my-6">
        <SecondaryButton text="Reset" type="reset" loading={loading} disabled={loading || !dirty} className="w-28" />
        <PrimaryButton text="Add" type="submit" loading={loading} disabled={loading || !dirty} className="w-28" />
      </div>
    </Form>
  );
};

export default PostQuestionForm;
