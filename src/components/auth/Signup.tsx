import { yupResolver } from "@hookform/resolvers/yup";
import { SubmitHandler, useForm } from "react-hook-form";
import { PrimaryButton } from "../buttons/buttons";
import { ISignupFormState } from "./types";
import { SignupValidationSchema } from "./Schema";
import { onSignup } from "../../services/auth";
import { useDispatch } from "react-redux";

const initialSignupValues: ISignupFormState = {
  name: "",
  email: "",
  password: "",
};

const Signup = () => {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ISignupFormState>({ defaultValues: initialSignupValues, resolver: yupResolver(SignupValidationSchema) });

  const handleSignup: SubmitHandler<ISignupFormState> = (values: ISignupFormState) => {
    onSignup(values, dispatch);
  };

  return (
    <div className="bg-white dark:bg-gray-900" style={{ height: "90vh" }}>
      <form className="py-8 px-4 mx-auto h-full flex flex-col max-w-xl justify-center" onSubmit={handleSubmit(handleSignup)}>
        <div className="mb-6">
          <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Name
          </label>
          <input
            type="text"
            id="name"
            placeholder="Enter your name"
            {...register("name")}
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
          />
          {errors.name && <span className="text-red-500">{errors.name.message}</span>}
        </div>

        <div className="mb-6">
          <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Your email
          </label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            {...register("email")}
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
          />
          {errors.email && <span className="text-red-500">{errors.email.message}</span>}
        </div>

        <div className="mb-6">
          <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Your password
          </label>
          <input
            type="password"
            id="password"
            placeholder="Enter your password"
            {...register("password")}
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
          />
          {errors.password && <span className="text-red-500">{errors.password.message}</span>}
        </div>
        <PrimaryButton text="Sign up" route="/signup" type="submit" />
      </form>
    </div>
  );
};

export default Signup;
