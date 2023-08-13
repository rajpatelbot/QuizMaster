import { toast } from "react-toastify";

export const successToast = (toastMsg: string) => {
  return toast.success(toastMsg);
};

export const errorToast = (toastMsg: string) => {
  return toast.error(toastMsg);
};

export const infoToast = (toastMsg: string) => {
  return toast.info(toastMsg);
};

export const warningToast = (toastMsg: string) => {
  return toast.warning(toastMsg);
};
