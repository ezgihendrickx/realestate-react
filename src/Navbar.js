import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

function Navbar() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };
  return (
    <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 ">
        <div className="relative flex items-center justify-between h-16">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button  is hidden now, to change with JS later*/}
            <button
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white transition duration-150 ease-in-out"
              aria-label="Main menu"
              aria-expanded="false"
              onClick={() =>
                document
                  .getElementById("hamburgerMenu")
                  .classList.toggle("hidden")
              }
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              {/* Icon when menu is open. */}
              <svg
                className="hidden h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex-shrink-0 flex items-center">
              <Link to="/">
                <img
                  className="h-8 w-auto"
                  src="/logo1.png"
                  alt="our logo"
                  width="100px"
                  height="100px"
                />
              </Link>
            </div>
            <div className="hidden sm:block ml-4 px-3 py-2 text-sm font-medium leading-5 text-gray-300  ">
              <Link to="/">
                <code>AntalyaДom|Homes</code>
              </Link>
            </div>
            <div className="hidden sm:block sm:ml-6">
              <div className="flex">
                <Link
                  to="/"
                  className="px-3 py-2 rounded-md text-sm font-medium leading-5 text-white bg-gray-900 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out"
                >
                  {t("navigation.home")}
                </Link>
                <Link
                  to="/houses"
                  className="ml-4 px-3 py-2 rounded-md text-sm font-medium leading-5 text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out"
                >
                  {t("navigation.nav1")}
                </Link>
                <Link
                  to="/about"
                  className="ml-4 px-3 py-2 rounded-md text-sm font-medium leading-5 text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out"
                >
                  {t("navigation.nav2")}
                </Link>
                <Link
                  to="/contact"
                  className="ml-4 px-3 py-2 rounded-md text-sm font-medium leading-5 text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out"
                >
                  {t("navigation.nav3")}
                </Link>
              </div>
            </div>
          </div>
          <div className="z-10 absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            {/* LAnguages section begin from here */}

            <img
              src={t("navigation.languagePicture")}
              width="40px"
              height="40px"
              alt="language"
            ></img>

            <button
              className="border-2 border-transparent text-gray-400 rounded-full hover:text-white focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out"
              aria-label="Notifications"
              onClick={() =>
                document
                  .getElementById("languageMenu")
                  .classList.toggle("hidden")
              }
            >
              &nbsp; {t("navigation.language")}
              <i className="text-2xl fa p-1 ">
                <big>&#xf107;</big>
              </i>
            </button>
            {/* Profile dropdown */}
            <div className="hidden ml-3 relative" id="languageMenu">
              {/* This div needs to be shown or hidden: toggled when pushing "EN" button */}
              <div>
                <button
                  className="flex text-sm border-2 border-transparent rounded-full focus:outline-none focus:border-white transition duration-150 ease-in-out"
                  id="user-menu"
                  aria-label="User menu"
                  aria-haspopup="true"
                ></button>
              </div>
              {/* I made this language button hidden I will add later react- -i18next for translation */}
              <div className=" origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg">
                <div
                  className="py-1 rounded-md bg-white shadow-xs"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="user-menu"
                >
                  <button
                    className="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-300 focus:outline-none focus:bg-gray-300 transition duration-150 ease-in-out"
                    role="menuitem"
                  ></button>
                  <button
                    className="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-300 focus:outline-none focus:bg-gray-300 transition duration-150 ease-in-out"
                    role="menuitem"
                    onClick={() => {
                      changeLanguage("tr");
                      document
                        .getElementById("languageMenu")
                        .classList.add("hidden");
                    }}
                  >
                    Türkçe
                  </button>
                  <button
                    className="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-300 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out"
                    role="menuitem"
                    onClick={() => {
                      changeLanguage("en");
                      document
                        .getElementById("languageMenu")
                        .classList.add("hidden");
                    }}
                  >
                    English
                  </button>
                  <button
                    className="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-300 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out"
                    role="menuitem"
                    onClick={() => {
                      changeLanguage("nl");
                      document
                        .getElementById("languageMenu")
                        .classList.add("hidden");
                    }}
                  >
                    Nederlands
                  </button>
                  <button
                    className="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-300 focus:outline-none focus:bg-gray-300 transition duration-150 ease-in-out"
                    role="menuitem"
                    onClick={() => {
                      changeLanguage("ru");
                      document
                        .getElementById("languageMenu")
                        .classList.add("hidden");
                    }}
                  >
                    русский
                  </button>
                  <button
                    className="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-300 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out"
                    role="menuitem"
                    onClick={() => {
                      changeLanguage("per");
                      document
                        .getElementById("languageMenu")
                        .classList.add("hidden");
                    }}
                  >
                    فارسی
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="hidden sm:hidden" id="hamburgerMenu">
        <div className="px-2 pt-2 pb-3 space-y-1">
          <Link
            to="/"
            className="block px-3 py-2 rounded-md text-base font-medium text-white bg-gray-900 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out"
            onClick={() =>
              document.getElementById("hamburgerMenu").classList.add("hidden")
            }
          >
            {t("navigation.home")}
          </Link>
          <Link
            to="/houses"
            className="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out"
            onClick={() =>
              document.getElementById("hamburgerMenu").classList.add("hidden")
            }
          >
            {t("navigation.nav1")}
          </Link>
          <Link
            to="/about"
            className="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out"
            onClick={() =>
              document.getElementById("hamburgerMenu").classList.add("hidden")
            }
          >
            {t("navigation.nav2")}
          </Link>
          <Link
            to="/contact"
            className="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out"
            onClick={() =>
              document.getElementById("hamburgerMenu").classList.add("hidden")
            }
          >
            {t("navigation.nav3")}
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
