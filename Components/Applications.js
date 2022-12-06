import React, { useState } from "react";
import ApplicationFilterCategory from "./ApplicationFilterCategory";
import ApplicationTable from "./ApplicationTable";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

const Applications = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <div className=" bg-white">
      <div
        className={`drawer drawer-mobile ${
          sidebarOpen
            ? "lg:-translate-x-60 translate-all duration-150 "
            : "lg:translate-x-0 translate-all duration-150"
        }`}
      >
        <input id="filter-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          <ApplicationTable />
          <label
            htmlFor="filter-drawer"
            className="btn drawer-button px-0 py-4 pb-8 h-0 min-h-0 rounded-none lg:hidden bg-gray-400 border-transparent hover:bg-gray-500 hover:border-transparent"
          >
            <AiOutlineRight className="text-white" />
          </label>
          <label
            htmlFor="filter-drawer"
            className="btn drawer-button px-0 py-4 pb-8 h-0 min-h-0 rounded-none hidden lg:inline-block bg-gray-400 border-transparent hover:bg-gray-500 hover:border-transparent mt-20"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            {sidebarOpen ? (
              <AiOutlineLeft className="text-white" />
            ) : (
              <AiOutlineRight className="text-white" />
            )}
          </label>
        </div>
        <div
          className={`drawer-side ${
            sidebarOpen
              ? "lg:-translate-x-60 transition-all duration-150 hidden"
              : " lg:translate-x-0 translate-all duration-150"
          }`}
        >
          <label htmlFor="filter-drawer" className="drawer-overlay"></label>
          <ul className="menu p-2 w-60  bg-white border-r text-base-content">
            <ApplicationFilterCategory />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Applications;
