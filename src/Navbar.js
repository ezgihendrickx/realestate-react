import React from "react";
function Navbar() {
  return (
    <nav class="bg-gray-800">
      <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div class="relative flex items-center justify-between h-16">
          <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button */}
            <button
              class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white transition duration-150 ease-in-out"
              aria-label="Main menu"
              aria-expanded="false"
            >
              <svg
                class="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              {/* Icon when menu is open. */}
              <svg
                class="hidden h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div class="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <div class="flex-shrink-0">
              <img src="/logo1.png" alt="logomuz" width="50px" height="50px" />
            </div>
            <div class=" ml-4 px-3 py-2 text-sm font-medium leading-5 text-gray-300 hover:text-white focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out">
              <code>Antalya Dream Homes</code>
            </div>
            <div class="hidden sm:block sm:ml-6">
              <div class="flex">
                <button
                  href="#"
                  class="px-3 py-2 rounded-md text-sm font-medium leading-5 text-white bg-gray-900 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out"
                >
                  Home
                </button>
                <button
                  href="#"
                  class="ml-4 px-3 py-2 rounded-md text-sm font-medium leading-5 text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out"
                >
                  Houses
                </button>
                <button
                  href="#"
                  class="ml-4 px-3 py-2 rounded-md text-sm font-medium leading-5 text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out"
                >
                  About Us
                </button>
                <button
                  href="#"
                  class="ml-4 px-3 py-2 rounded-md text-sm font-medium leading-5 text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out"
                >
                  Contact
                </button>
              </div>
            </div>
          </div>
          <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            {/* Heroicon name: bell  */}

            <img
              src="/english.png"
              width="40px"
              height="40px"
              alt="language"
            ></img>

            <button
              className="border-2 border-transparent text-gray-400 rounded-full hover:text-white focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out"
              aria-label="Notifications"
            >
              <i className="text-5xl fa p-1 ">
                <big>&#xf107;</big>
              </i>
            </button>
            {/* Profile dropdown */}
            <div class="ml-3 relative">
              <div>
                <button
                  class="flex text-sm border-2 border-transparent rounded-full focus:outline-none focus:border-white transition duration-150 ease-in-out"
                  id="user-menu"
                  aria-label="User menu"
                  aria-haspopup="true"
                ></button>
              </div>

              <div class="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg">
                <div
                  class="py-1 rounded-md bg-white shadow-xs"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="user-menu"
                >
                  <button
                    href="#"
                    class="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out"
                    role="menuitem"
                  >
                    English
                  </button>
                  <button
                    href="#"
                    class="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out"
                    role="menuitem"
                  >
                    Nederlands
                  </button>
                  <button
                    href="#"
                    class="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-300 focus:outline-none focus:bg-gray-300 transition duration-150 ease-in-out"
                    role="menuitem"
                  >
                    русский
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="hidden sm:hidden">
        <div class="px-2 pt-2 pb-3">
          <button
            href="#"
            class="block px-3 py-2 rounded-md text-base font-medium text-white bg-gray-900 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out"
          >
            Home
          </button>
          <button
            href="#"
            class="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out"
          >
            Houses
          </button>
          <button
            href="#"
            class="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out"
          >
            About Us
          </button>
          <button
            href="#"
            class="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out"
          >
            Contact
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
