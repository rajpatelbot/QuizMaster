import { useDispatch, useSelector } from "react-redux";
import { ReduxStateInterface } from "../../store/slice/types";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { SignupValidationSchema } from "./Schema";
import { ISignupFormState } from "./types";
import { onSignup } from "../../api/auth";
import { PrimaryButton, SecondaryButton } from "../../components/buttons/buttons";

const initialSignupValues: ISignupFormState = {
  name: "",
  email: "",
  password: "",
};

const Signup = () => {
  const dispatch = useDispatch();

  const loading = useSelector((state: ReduxStateInterface) => state.base.loading);

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
        <h1 className="text-2xl font-bold mb-8">Sign up</h1>
        <div className="mb-6">
          <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900">
            Name
          </label>
          <input
            type="text"
            id="name"
            placeholder="Enter your name"
            {...register("name")}
            className={`border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ${
              loading ? "bg-slate-200" : "bg-white border"
            }`}
            disabled={loading}
          />
          {errors.name && <span className="text-red-500">{errors.name.message}</span>}
        </div>

        <div className="mb-6">
          <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">
            Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            {...register("email")}
            className={`border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ${
              loading ? "bg-slate-200" : "bg-white border"
            }`}
            disabled={loading}
          />
          {errors.email && <span className="text-red-500">{errors.email.message}</span>}
        </div>

        <div className="mb-6">
          <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">
            Password
          </label>
          <input
            type="password"
            id="password"
            placeholder="Enter your password"
            {...register("password")}
            className={`border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ${
              loading ? "bg-slate-200" : "bg-white border"
            }`}
            disabled={loading}
          />
          {errors.password && <span className="text-red-500">{errors.password.message}</span>}
        </div>
        <div className="flex gap-1">
          <PrimaryButton text="Sign up" type="submit" loading={loading} />
          <SecondaryButton text="Reset" type="reset" loading={loading} />
        </div>
      </form>
    </div>
  );
};

export default Signup;
