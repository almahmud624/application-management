import React from "react";
import { TbTableExport } from "react-icons/tb";
import Image from "next/image";

const tableItems = [
  "Rating",
  "Application Name",
  "Hiring Pipeline",
  "Application Status",
  "Application ID",
  "Posting Title",
];
const eachItemsInfo = [];
const ApplicationTable = () => {
  return (
    <div className="overflow-x-auto">
      <table className="table w-full">
        <thead className="">
          <tr>
            <th className="">
              <Image
                src="/Assets/insert.png"
                width={20}
                height={20}
                className="contrast-0"
              />
            </th>
            {tableItems?.map((item) => (
              <th key={Math.random()} className="font-medium">
                {item}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="">
          {eachItemsInfo?.map((item) => (
            <tr key={Math.random()}>
              <th></th>
              <td></td>
            </tr>
          ))}
        </tbody>
      </table>
      {eachItemsInfo.length <= 0 && (
        <div className="relative text-center mt-8">
          <span className="font-medium ">No Applications Found</span>
        </div>
      )}
      <div className="text-gray-700 font-semibold text-xl uppercase ml-1 text-right mr-20 mt-20">
        <select className="select max-w-xs py-0 h-8 min-h-0 w-48 rounded-none border border-gray-400 bg-[#FAFAFA]">
          <option disabled selected>
            10 Records Per Page
          </option>
          <option>Item 1</option>
          <option>Item 2</option>
        </select>
      </div>
    </div>
  );
};

export default ApplicationTable;
