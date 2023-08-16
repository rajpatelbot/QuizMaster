import Loader from "../Loader";

interface IButtons {
  text: string;
  type: "button" | "submit" | "reset";
  loading?: boolean;
  disabled?: boolean;
  className?: string;
  callbackFn?: () => void;
}

export const PrimaryButton = ({ text, type, loading, disabled, className, callbackFn }: IButtons) => {
  return (
    <>
      <button
        type={type}
        disabled={disabled}
        onClick={() => (callbackFn ? callbackFn() : null)}
        className={`${disabled || loading ? "bg-blue-400 cursor-not-allowed" : "bg-blue-500"} text-white font-medium rounded-lg text-sm px-5 mr-2 py-2.5 ${className}`}
      >
        {loading ? <Loader /> : text}
      </button>
    </>
  );
};

export const SecondaryButton = ({ text, type, loading, disabled, className, callbackFn }: IButtons) => {
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={() => (callbackFn ? callbackFn() : null)}
      className={`${
        disabled || loading ? "bg-slate-100 cursor-not-allowed" : "bg-white"
      } py-2.5 px-5 mr-2 text-sm font-medium text-gray-900 focus:outline-none rounded-lg border border-gray-200 ${className}`}
    >
      {text}
    </button>
  );
};
