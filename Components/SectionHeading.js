import React from "react";
import { HiDotsHorizontal } from "react-icons/hi";
import { TbPlus } from "react-icons/tb";
import { BsTable } from "react-icons/bs";
import { TfiPrinter } from "react-icons/tfi";
import { AiOutlineSortAscending } from "react-icons/ai";
import Image from "next/image";

const SectionHeading = () => {
  return (
    <div className="navbar bg-[#F5F6FA] py-0 border-b md:flex-row flex-col">
      <div className="navbar-start w-full md:pt-0 pt-5">
        <div className="navbar md:justify-start justify-center bg-[#F5F6FA] p-0 min-h-0">
          <div className="flex-none">
            <Image src="/Assets/save-contact.png" width={30} height={30} />
          </div>
          <div className="flex-none">
            <span className="text-gray-700 font-semibold text-xl uppercase ml-1">
              Applications
            </span>
          </div>
          <div className="divider divider-horizontal h-6 mt-1 border-gray-200 mr-0"></div>
          <div className="flex-none">
            <span className="text-gray-700 font-semibold text-xl uppercase ml-1">
              <select className="select w-full max-w-xs py-0 h-8 min-h-0 bg-[#F7F7F7]">
                <option disabled selected>
                  All Applications
                </option>
                <option>Item 1</option>
                <option>Item 2</option>
              </select>
            </span>
          </div>
        </div>
      </div>

      <div className="md:navbar-end navbar-center justify-center w-full gap-2 md:py-0 py-5">
        <a
          href="/"
          className="btn p-2 py-1 min-h-0 h-8 text-gray-400 border-gray-300 bg-[#EEF1F7] shadow-sm hover:bg-[#EEF1F7] hover:border-gray-300"
        >
          <TbPlus className="h-5 w-5" />
        </a>
        <a
          href="/"
          className="btn p-2 py-1 min-h-0 h-8 text-gray-400 border-gray-300 bg-[#EEF1F7] shadow-sm hover:bg-[#EEF1F7] hover:border-gray-300"
        >
          <HiDotsHorizontal className="h-5 w-5" />
        </a>
        <a
          href="/"
          className="btn p-3 py-1 min-h-0 h-8 text-gray-400 border-gray-300 bg-[#EEF1F7] shadow-sm hover:bg-[#EEF1F7] hover:border-gray-300"
        >
          <BsTable className="h-3 w-3" />
        </a>
        <a
          href="/"
          className="btn p-3 py-1 min-h-0 h-8 text-gray-400 border-gray-300 bg-[#EEF1F7] shadow-sm hover:bg-[#EEF1F7] hover:border-gray-300"
        >
          <TfiPrinter className="h-4 w-4" />
        </a>
        <a
          href="/"
          className="btn p-3 py-1 min-h-0 h-8 text-gray-400 bg-transparent border-transparent hover:bg-transparent hover:border-gray-300"
        >
          <AiOutlineSortAscending className="h-5 w-5" />
        </a>
      </div>
    </div>
  );
};

export default SectionHeading;
