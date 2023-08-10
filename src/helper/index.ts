import { AxiosError } from "axios";
import Cookies from "js-cookie";
import { errorToast } from "../components/Toast";

export const handleErrorResponse = (error: AxiosError) => {
  const message = "Something is wrong please try again!";

  for (const key in error) {
    if (key === "request") {
      //   if (error[key].status === UNAUTHORIZE_STATUS_CODE) {
      //     localStorage.removeItem("Token");
      //     store?.dispatch(setToken(null));
      //     window.location.reload();
      //   }
      const responseMessage = JSON.parse(error[key].response);
      errorToast(responseMessage.message);
      return;
    }
  }
  errorToast(message);
};

export const getCookie = () => {
  const token = Cookies.get("token");
  return Boolean(token);
};
