import mongoose, { Schema } from "mongoose";
import { ECategory, EDifficulty, IQuestionsModule } from "../types/global.type";

const UserSchema: Schema = new mongoose.Schema(
  {
    questions: [
      {
        question: {
          type: String,
          required: [true, "Question is required"],
        },
        options: {
          type: [String],
          required: [true, "Options are required"],
        },
        correctAnswer: {
          type: String,
          required: [true, "Correct Answer is required"],
        },
        point: {
          type: Number,
          required: [true, "Point is required"],
        },
        questionImage: {
          type: String,
        },
      },
    ],

    title: {
      type: String,
      required: [true, "Title is required"],
    },

    category: {
      type: String,
      enum: [ECategory.JAVASCRIPT, ECategory.REACT, ECategory.TYPESCRIPT],
      required: [true, "Category is required"],
    },

    difficulty: {
      type: String,
      enum: [EDifficulty.EASY, EDifficulty.MEDIUM, EDifficulty.HARD],
      required: [true, "Difficulty is required"],
    },

    duration: {
      type: Number,
      required: [true, "Duration is required"],
    },

    totalPoint: {
      type: Number,
      required: [true, "total_point is required"],
    },

    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: [true, "Created By is required"],
    },
  },

  {
    timestamps: true,
  },
);

const PostQuestions = mongoose.model<IQuestionsModule>("PostQuestions", UserSchema, "postQuestions");
export default PostQuestions;
