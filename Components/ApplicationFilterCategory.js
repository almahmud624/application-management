import React from "react";
import { AiOutlineSearch } from "react-icons/ai";

const filterCategories = [
  "To-Dos",
  "Notes",
  "Attachment Category",
  "Rating",
  "Last Name",
  "Hiring Pipeling",
  "Application ID",
  "Account Manager",
  "Application Owner",
  "Application Source",
  "Assigned Recruiter(s)",
  "Associated Tags",
];
const ApplicationFilterCategory = () => {
  return (
    <div>
      <form class="flex items-center">
        <label for="simple-search" class="sr-only">
          Search
        </label>
        <div class="relative w-full">
          <div class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
            <AiOutlineSearch className="h-5 w-5" />
          </div>
          <input
            type="text"
            id="filter"
            class="bg-transparent text-gray-900 text-sm rounded-lg block w-full pl-3 p-2.5 outline-none"
            placeholder="FILTER APPLICATION BY"
            required
          />
        </div>
      </form>
      <div className="form-control px-2">
        <label className="label cursor-pointer flex justify-start gap-2">
          <input
            type="checkbox"
            className="checkbox w-4 h-4 rounded-sm border-gray-700"
          />
          <span className="label-text text-gray-700 font-semibold">
            Posting title
          </span>
        </label>
      </div>
      <div className="form-control px-2">
        <label className="label cursor-pointer flex justify-start gap-2">
          <input
            type="checkbox"
            className="checkbox w-4 h-4 rounded-sm border-gray-700"
          />
          <span className="label-text text-gray-700 font-semibold">
            Application Status
          </span>
        </label>
      </div>
      <div className="divider w-36 mt-1 border-gray-200 mr-0 mb-0"></div>
      {filterCategories?.map((category) => (
        <div key={Math.random()} className="form-control px-2">
          <label className="label cursor-pointer flex justify-start gap-2">
            <input
              type="checkbox"
              className="checkbox w-4 h-4 rounded-sm border-gray-700"
            />
            <span className="label-text text-gray-700 font-semibold">
              {category}
            </span>
          </label>
        </div>
      ))}
    </div>
  );
};

export default ApplicationFilterCategory;
