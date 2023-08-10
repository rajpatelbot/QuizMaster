import { Link } from "react-router-dom";
import { navbarItems } from "../helper/constant";
import { PrimaryButton, SecondaryButton } from "../components/buttons/buttons";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { ReduxStateInterface } from "../store/slice/types";
import { IloggedInUser, ResponseType } from "../helper/types";

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  const loggedIn: ResponseType<IloggedInUser> | null = useSelector((state: ReduxStateInterface) => state.base.loggedInUser);

  useEffect(() => {
    if (loggedIn?.data) {
      setIsLoggedIn(true);
    }
  }, [loggedIn, setIsLoggedIn]);

  return (
    <>
      <nav className="bg-white border-gray-200 dark:bg-gray-900">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="https://flowbite.com/" className="flex items-center">
            <img src="https://flowbite.com/docs/images/logo.svg" className="h-8 mr-3" alt="Flowbite Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
          </a>

          <div className="flex md:order-2 items-center justify-center">
            {!isLoggedIn ? (
              <>
                <SecondaryButton text="Login" route="/login" />
                <PrimaryButton text="Signup" route="/signup" />
              </>
            ) : (
              <SecondaryButton text="My Profile" route="/me" />
            )}

            <button
              data-collapse-toggle="navbar-cta"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-cta"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
              </svg>
            </button>
          </div>

          <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-cta">
            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              {navbarItems.map((item, index) => (
                <li key={index}>
                  <Link
                    to={item.path}
                    className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
                    aria-current="page"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
