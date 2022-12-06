import React from "react";
import ApplicationFilterCategory from "./ApplicationFilterCategory";
import ApplicationTable from "./ApplicationTable";

const Applications = () => {
  return (
    <div className=" bg-white">
      <div className="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          <ApplicationTable />
          {/* <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            Open drawer
          </label> */}
        </div>
        <div className="drawer-side ">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>

          <ul className="menu p-2 w-60  bg-white border-r text-base-content">
            <ApplicationFilterCategory />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Applications;
