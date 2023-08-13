import { useDispatch, useSelector } from "react-redux";
import classNames from "classnames";
import { Form, Formik } from "formik";
import { useNavigate } from "react-router-dom";
import { ReduxStateInterface } from "../../store/slice/types";
import { LoginValidationSchema } from "./Schema";
import { PrimaryButton, SecondaryButton } from "../../components/buttons/buttons";
import { onLogin } from "../../api/auth";
import { ILoginFormState } from "./types";

const initialLoginValues: ILoginFormState = {
  email: "",
  password: "",
};

const Login = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const loading = useSelector((state: ReduxStateInterface) => state.base.loading);

  const inputClassName = classNames("border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5", {
    "bg-slate-200": loading,
    "bg-white border": !loading,
  });

  const handleLogin = (values: ILoginFormState) => {
    onLogin(values, dispatch, navigate);
  };

  return (
    <div className="bg-white dark:bg-gray-900" style={{ height: "90vh" }}>
      <div className="py-8 px-4 mx-auto h-full flex flex-col max-w-xl justify-center">
        <Formik initialValues={initialLoginValues} validationSchema={LoginValidationSchema} onSubmit={handleLogin}>
          {({ dirty, values, handleBlur, handleChange, errors, touched }) => (
            <Form>
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
                <PrimaryButton text="Login" type="submit" loading={loading} disabled={loading || !dirty} className="w-28" />
                <SecondaryButton text="Reset" type="reset" loading={loading} disabled={loading || !dirty} className="w-28" />
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Login;
