import * as Yup from "yup";

export const PostQuestionSchema = Yup.object().shape({
  questions: Yup.array()
    .of(
      Yup.object().shape({
        question: Yup.string().required("Question is required"),
        options: Yup.array()
          .of(Yup.string().required("Option is required"))
          .min(2, "At least two options are required")
          .max(5, "Maximum of five options allowed")
          .required("At least one option is required"),
        correctAnswer: Yup.string().required("Correct Answer is required"),
        point: Yup.number().required("Point is required"),
        quesImg: Yup.string(),
      }),
    )
    .required("At least one question is required"),

  category: Yup.string().required("Category is required"),
  difficulty: Yup.string().required("Difficulty is required"),
  duration: Yup.number().required("Duration is required"),
  createdBy: Yup.string().required("Created By is required"),
});
