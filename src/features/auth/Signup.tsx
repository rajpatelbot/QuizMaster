import { RefObject, useCallback, useRef } from "react";
import { Form, Formik } from "formik";
import { useNavigate } from "react-router-dom";
import classNames from "classnames";
import { useDispatch, useSelector } from "react-redux";
import { AiFillCamera } from "react-icons/ai";

import { ReduxStateInterface } from "../../store/slice/types";
import { SignupValidationSchema } from "./Schema";

import { PrimaryButton, SecondaryButton } from "../../components/buttons/buttons";
import { onSignup } from "../../api/auth";

import { ISignupFormState } from "./types";
import { getImageUrl } from "../../helper";
import { defaultAvatar } from "../../helper/constant";

const initialSignupValues: ISignupFormState = {
  name: "",
  email: "",
  password: "",
  profile: defaultAvatar,
};

const Signup = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const imageRef = useRef() as RefObject<HTMLInputElement>;

  const loading = useSelector((state: ReduxStateInterface) => state.base.loading);

  const inputClassName = classNames(
    "border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5",
    {
      "bg-slate-200": loading,
      "bg-white border": !loading,
    },
  );

  const handleSignup = useCallback((values: ISignupFormState) => {
    onSignup(values, dispatch, navigate);
  }, []);

  return (
    <div className="bg-white dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto h-full flex flex-col max-w-xl justify-center">
        <Formik initialValues={initialSignupValues} validationSchema={SignupValidationSchema} onSubmit={handleSignup}>
          {({ dirty, values, handleBlur, handleChange, setFieldValue, errors, touched }) => (
            <Form>
              {/* Profile */}
              <div className="mb-6">
                <div className="w-20 h-20 sm:w-24 sm:h-24 flex-none justify-center m-auto relative">
                  <img
                    alt="Profile"
                    className="rounded-full border-2 bg-gray-300 h-full w-full object-cover"
                    src={values.profile ? getImageUrl(values.profile) : defaultAvatar}
                  />
                  <label className="absolute flex items-center justify-center bottom-0 right-2 bg-primary rounded-full p-1 bg-blue-500 cursor-pointer border-2">
                    <AiFillCamera className="w-4 h-4 text-white" />
                    <input
                      ref={imageRef}
                      id="file_input"
                      name="profile"
                      type="file"
                      placeholder="Please upload profile image"
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        if (e?.target?.files?.[0]) {
                          setFieldValue("profile", e?.target?.files?.[0]);
                        }
                      }}
                      accept="image/jpg,image/png,image/jpeg"
                      className="hidden"
                      disabled={loading}
                    />
                  </label>
                </div>
                <label className="block my-2 text-center text-sm font-medium text-gray-900 dark:text-white" htmlFor="file_input">
                  Profile photo
                </label>
                {errors.profile && touched.profile && <div className="text-red-500">{errors.profile}</div>}
              </div>

              {/* Name */}
              <div className="mb-6">
                <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={values.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Enter your name"
                  disabled={loading}
                  className={inputClassName}
                />
                {errors.name && touched.name && <div className="text-red-500">{errors.name}</div>}
              </div>

              {/* Email */}
              <div className="mb-6">
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Enter your email"
                  disabled={loading}
                  className={inputClassName}
                />
                {errors.email && touched.email && <div className="text-red-500">{errors.email}</div>}
              </div>

              {/* Password */}
              <div className="mb-6">
                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Enter your password"
                  disabled={loading}
                  autoComplete="off"
                  className={inputClassName}
                />
                {errors.password && touched.password && <div className="text-red-500">{errors.password}</div>}
              </div>

              {/* Buttons */}
              <div className="flex gap-1 my-6">
                <PrimaryButton text="Sign up" type="submit" loading={loading} disabled={loading || !dirty} className="w-28" />
                <SecondaryButton text="Reset" type="reset" loading={loading} disabled={loading || !dirty} className="w-28" />
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Signup;
