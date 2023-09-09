import Joi from "joi";

export const postQuestionValidation = Joi.object({
  questions: Joi.array()
    .items(
      Joi.object({
        question: Joi.string().required().messages({ "string.empty": "Question is required" }),

        options: Joi.array()
          .items(Joi.string().required())
          .min(2)
          .required()
          .messages({ "array.min": "Minimum 2 options required" }),

        correctAnswer: Joi.string().required().messages({ "any.only": "Correct answer is required" }),

        point: Joi.number().required().messages({ "number.base": "Point is required" }),

        questionImage: Joi.string().allow(null, "").optional(),
      }).required(),
    )
    .min(1)
    .required()
    .messages({ "array.empty": "Questions are required" }),

  title: Joi.string().required().messages({ "string.empty": "Title is required" }),

  category: Joi.string().required().messages({
    "any.only": "Category is required",
  }),

  difficulty: Joi.string().required().messages({ "any.only": "Difficulty is required" }),

  duration: Joi.number().required().messages({ "number.base": "Duration is required" }),

  totalPoint: Joi.number().required().messages({ "number.base": "Total point is required" }),

  createdBy: Joi.required().messages({ "string.empty": "CreatedBy is required" }),
});
