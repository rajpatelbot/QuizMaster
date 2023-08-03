import { object, string } from "yup";

export const SignupValidationSchema = object({
  name: string().required("Required"),
  email: string().email("Invalid email").required("Required"),
  password: string().min(4, "Too Short!").max(8, "Too Long!").required("Required"),
});

export const LoginValidationSchema = object({
  email: string().email("Invalid email").required("Required"),
  password: string().min(4, "Too Short!").max(8, "Too Long!").required("Required"),
});
