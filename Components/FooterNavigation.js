import React from "react";
import { HiUserGroup } from "react-icons/hi";
import { AiFillWechat } from "react-icons/ai";
import { FaUserAlt } from "react-icons/fa";
import { RiHistoryFill } from "react-icons/ri";
import { BiHelpCircle } from "react-icons/bi";
import { TbFolders } from "react-icons/tb";
import { FiSearch } from "react-icons/fi";
import Image from "next/image";
import styles from "../styles/FooterNavigation.module.css";

const FooterNavigation = () => {
  return (
    <div className="navbar h-0 min-h-[45px] bg-[#f5f6fa] border-t lg:flex-row flex-col">
      <div className="navbar-start w-full">
        <div className="navbar justify-center gap-3 lg:justify-between bg-[#F5F6FA] p-0 min-h-0">
          <div className="flex-none">
            <button className="btn btn-ghost h-10 min-h-0 flex flex-col hover:bg-transparent hover:text-gray-600">
              <AiFillWechat className="h-4 w-4" />
              <span className="capitalize text-xs font-normal">Chats</span>
            </button>
          </div>
          <div className="flex-none">
            <button className="btn btn-square btn-ghost flex flex-col h-10 min-h-0 hover:bg-transparent hover:text-gray-600">
              <HiUserGroup className="h-4 w-4" />
              <span className="capitalize text-xs font-normal">Channels</span>
            </button>
          </div>
          <div className="flex-none">
            <button className="btn btn-square btn-ghost flex flex-col h-10 min-h-0 hover:bg-transparent hover:text-gray-600">
              <FaUserAlt className="h-4 w-4" />
              <span className="capitalize text-xs font-normal">Contacts</span>
            </button>
          </div>
        </div>
      </div>
      <div className="navbar-center w-full lg:w-[62%] justify-center border-l border-r lg:mx-5 py-0 bg-[#F5F6FA]">
        <form class="lg:w-full w-52 mx-auto">
          <div class="relative w-full">
            <input
              type="text"
              id="chat"
              class="bg-transparent text-gray-400 text-sm rounded-lg block w-full pl-3 p-2.5 outline-none placeholder:text-gray-400"
              placeholder="Here is your Smart Chat (Ctrl+Space)"
              required
            />
          </div>
        </form>
      </div>
      <div className="navbar-end justify-center lg:justify-between w-full flex bg-[#F5F6FA]">
        <button
          href=""
          className="btn p-1.5 py-1 min-h-0 h-10 text-gray-400 bg-transparent border-transparent hover:bg-transparent hover:text-gray-600 hover:border-transparent"
        >
          <Image
            src="/Assets/cursorMonitor.png"
            width={20}
            height={20}
            className="contrast-50"
          />
        </button>
        <button
          className="btn p-1.5 py-1 min-h-0 h-10 text-gray-400 bg-transparent  hover:bg-transparent hover:text-gray-600 hover:border-transparent border-transparent rounded-none border-gray-300"
          style={{
            borderLeft: "1px solid #ccc",
            borderRight: "1px solid #ccc",
          }}
        >
          <RiHistoryFill className="h-4 w-4" />
        </button>
        <button
          className="btn p-1.5 py-1 min-h-0 h-10 text-gray-400 bg-transparent border-transparent hover:bg-transparent hover:text-gray-600 hover:border-transparent rounded-none"
          style={{
            borderRight: "1px solid #ccc",
          }}
        >
          <BiHelpCircle className="h-4 w-4" />
          <span className="capitalize text-sm text-gray-700 font-bold ml-1">
            Need Help
          </span>
        </button>
        <button
          className="btn p-1.5 py-1 min-h-0 h-10 text-gray-400 bg-transparent border-transparent hover:bg-transparent hover:text-gray-600 hover:border-transparent rounded-none"
          style={{
            borderRight: "1px solid #ccc",
          }}
        >
          <TbFolders className="h-4 w-4" />
        </button>
        <button className="btn p-1.5 py-1 min-h-0 h-10 text-gray-400 bg-transparent border-transparent hover:bg-transparent hover:text-gray-600 hover:border-transparent">
          <FiSearch className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
};

export default FooterNavigation;
