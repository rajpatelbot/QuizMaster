import { useNavigate } from "react-router-dom";
import Loader from "../Loader";

interface IButtons {
  text: string;
  route?: string;
  type?: "button" | "submit" | "reset" | undefined;
  loading?: boolean;
}

export const PrimaryButton = ({ text, route, type, loading }: IButtons) => {
  const navigate = useNavigate();

  return (
    <>
      <button
        type={type}
        className={`${
          !loading ? "bg-blue-500" : "bg-blue-700 cursor-not-allowed"
        } text-white hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 mr-2 py-2.5 focus:outline-none`}
        disabled={loading}
        onClick={() => route && navigate(route)}
      >
        {loading ? <Loader /> : text}
      </button>
    </>
  );
};

export const SecondaryButton = ({ text, route, type, loading }: IButtons) => {
  const navigate = useNavigate();

  return (
    <button
      type={type}
      className={`${
        !loading ? "bg-white" : "bg-gray-200 cursor-not-allowed"
      } py-2.5 px-5 mr-2 text-sm font-medium text-gray-900 focus:outline-none  rounded-lg border border-gray-200  hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200`}
      disabled={loading}
      onClick={() => route && navigate(route)}
    >
      {text}
    </button>
  );
};
