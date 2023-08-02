import { useNavigate } from "react-router-dom";

interface IButtons {
  text: string;
  route: string;
  type?: "button" | "submit" | "reset" | undefined;
}

export const PrimaryButton = ({ text, route, type }: IButtons) => {
  const navigate = useNavigate();

  return (
    <>
      <button
        type={type}
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 mr-2 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        onClick={() => navigate(route)}
      >
        {text}
      </button>
    </>
  );
};

export const SecondaryButton = ({ text, route, type }: IButtons) => {
  const navigate = useNavigate();

  return (
    <button
      type={type}
      className="py-2.5 px-5 mr-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
      onClick={() => navigate(route)}
    >
      {text}
    </button>
  );
};
