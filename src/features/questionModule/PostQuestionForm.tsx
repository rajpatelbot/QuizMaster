import Select, { SingleValue } from "react-select";
import { Field, FieldArray, Form, FormikProps } from "formik";
import classNames from "classnames";

import { useSelector } from "react-redux";
import { ReduxStateInterface } from "../../store/slice/types";

import { PrimaryButton, SecondaryButton } from "../../components/buttons/buttons";

import { categories, difficulties } from "../../helper/constant";
import { ICategory } from "../../helper/types";
import { IQuestionsModule } from "./types";

const PostQuestionForm = ({
  values,
  handleChange,
  handleBlur,
  dirty,
  errors,
  touched,
  setFieldValue,
  setFieldTouched,
}: FormikProps<IQuestionsModule>) => {
  const loading = useSelector((state: ReduxStateInterface) => state.base.loading);

  const inputClassName = classNames(
    "border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5",
    {
      "bg-slate-200": loading,
      "bg-white border": !loading,
    },
  );

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
          {errors.category && touched.category && <div className="text-red-500">{errors.category}</div>}
        </div>

        {/* Duration */}
        <div className="flex-1">
          <label htmlFor="duration" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Duration
          </label>
          <input
            id="duration"
            type="number"
            name="duration"
            value={values.duration}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="60s"
            className={inputClassName}
          />
          {errors.duration && touched.duration && <div className="text-red-500">{errors.duration}</div>}
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
        {errors.difficulty && touched.difficulty && <div className="text-red-500">{errors.difficulty}</div>}
      </fieldset>

      {/* Question and Answer section */}
      <div className="my-5">
        <FieldArray name="questions">
          {({ push }) => (
            <>
              <SecondaryButton
                text={"Add Question"}
                type={"button"}
                callbackFn={() => push({ question: "", options: [""], correctAnswer: "", point: 0 })}
              />
              {values.questions?.map((question, index) => (
                <div key={index} className="my-5">
                  {/* Question */}
                  <div className="mb-5">
                    <label htmlFor={`questions.${index}.question`} className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                      Question {index + 1}
                    </label>
                    <input
                      id={`questions.${index}.question`}
                      type="text"
                      name={`questions.${index}.question`}
                      onBlur={handleBlur}
                      value={question.question}
                      onChange={handleChange}
                      placeholder="Enter the question"
                      className={inputClassName}
                    />
                  </div>

                  {/* Options */}
                  <FieldArray name={`questions.${index}.options`}>
                    {({ push: pushOption }) => (
                      <>
                        {/* Add button for adding options */}
                        <SecondaryButton
                          text="Add Options"
                          type="button"
                          loading={loading}
                          disabled={loading || !dirty}
                          className="w-36"
                          callbackFn={() => pushOption("")}
                        />
                        {question.options.map((option, optionIndex) => (
                          <div key={optionIndex}>
                            {/* Option */}
                            <div className="mb-5">
                              <label
                                htmlFor={`questions.${index}.options.${optionIndex}`}
                                className="block my-2 text-sm font-medium text-gray-900 dark:text-white"
                              >
                                Option {optionIndex + 1}
                              </label>
                              <div className="flex gap-3">
                                <input
                                  id={`questions.${index}.options.${optionIndex}`}
                                  type="text"
                                  name={`questions.${index}.options.${optionIndex}`}
                                  value={option}
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  placeholder="Enter the option"
                                  className={inputClassName}
                                />
                              </div>
                            </div>
                          </div>
                        ))}
                      </>
                    )}
                  </FieldArray>

                  {/* Correct Answer */}
                  <div className="mb-5 flex gap-3">
                    <div className="flex-1">
                      <label
                        htmlFor={`questions.${index}.correctAnswer`}
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Correct Answer
                      </label>
                      <input
                        id={`questions.${index}.correctAnswer`}
                        type="text"
                        name={`questions.${index}.correctAnswer`}
                        onBlur={handleBlur}
                        value={question.correctAnswer}
                        onChange={handleChange}
                        placeholder="Enter the correct answer"
                        className={inputClassName}
                      />
                    </div>

                    {/* Point */}
                    <div className="flex-1">
                      <label htmlFor={`questions.${index}.point`} className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        Point
                      </label>
                      <input
                        id={`questions.${index}.point`}
                        type="number"
                        name={`questions.${index}.point`}
                        onBlur={handleBlur}
                        value={question.point}
                        onChange={handleChange}
                        placeholder="Enter a point"
                        className={inputClassName}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </>
          )}
        </FieldArray>
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
