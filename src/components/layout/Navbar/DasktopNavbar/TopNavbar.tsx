import React from 'react';

import { BiSearch } from 'react-icons/bi';
import { BiChevronDown } from 'react-icons/bi';
import { MdNotificationsNone, MdOutlineMail } from 'react-icons/md';

import ToggleButton from '@components/shared/buttons/ToggleButton/ToggleButton';

const TopNavbar = () => {
  return (
    <div className=" border-b md:px-3 dark:bg-gray-900 lg:px-8 w-full py-5  flex items-center justify-between">
      <div>
        <h3 className="font-semibold">Dashboard</h3>
      </div>

      <div className="relative  ">
        <form>
          <label className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">
            Search
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                aria-hidden="true"
                className="w-5 h-5 text-gray-500 dark:text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
            </div>
            <input
              type="search"
              id="search"
              className="block w-full p-4 pr-24 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search Anywhere"
              required
            />
          </div>
        </form>
      </div>

      <div className=" flex items-center w-max h-full  full">
        <div className="text-secondary flex text-xl  items-center">
          <div className="px-8 text-sm">
            <ToggleButton tooltip />
          </div>
          <MdNotificationsNone />
          <h4 className="text-gray-200 text-2xl ml-4">|</h4>
        </div>

        <div className="ml-5 flex items-center">
          <h5 className="font-semibold">Kulsum Ara</h5>

          <div className="ml-2">
            <img
              className="w-8 h-8 rounded-full"
              src="https://images.unsplash.com/photo-1602233158242-3ba0ac4d2167?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=736&q=80"
              alt=""
            />
          </div>

          <BiChevronDown className="text-teritory ml-2" />
        </div>
      </div>
    </div>
  );
};

export default TopNavbar;
