import React from "react";
import { FiSearch } from "react-icons/fi";
import { VscRocket } from "react-icons/vsc";
import { AiOutlineSound } from "react-icons/ai";
import { MdOutlineNotificationsNone } from "react-icons/md";
import { CgFileDocument } from "react-icons/cg";
import { IoMdCalendar } from "react-icons/io";
import { RiSettings4Line } from "react-icons/ri";
const menuItems = [
  { itemName: "Home" },
  { itemName: "Job Opening", submenu: ["item-1", "item-2"] },
  { itemName: "Candidates", submenu: ["item-1", "item-2"] },
  { itemName: "Interviews" },
  { itemName: "Clients" },
  { itemName: "Contacts" },
  { itemName: "Campaigns" },
];
const Navbar = () => {
  return (
    <div className="navbar bg-gray-800 py-0">
      <div className="navbar-start">
        <div className="navbar bg-gray-800 p-0 min-h-0">
          <div className="flex-none">
            <button className="btn btn-square btn-ghost">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-5 h-5 stroke-current text-gray-200"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </button>
          </div>
          <div className="flex-none">
            <ul className="menu menu-horizontal p-0">
              {menuItems.map((item) => (
                <li
                  key={Math.random()}
                  tabindex="0"
                  className="text-sm font-semibold text-gray-200"
                >
                  <a>
                    {item.itemName}
                    {item?.submenu && (
                      <svg
                        className="fill-current text-gray-200"
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                      >
                        <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                      </svg>
                    )}
                  </a>

                  {item?.submenu && (
                    <ul className="p-2 bg-gray-800">
                      {item?.submenu.map((sub) => (
                        <li key={Math.random()} className="text-gray-200">
                          <a>{sub}</a>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex-none">
            <button className="btn btn-square btn-ghost">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-5 h-5 stroke-current text-gray-200"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className="navbar-end">
        <a href="/" className="btn btn-ghost p-1.5 text-gray-200">
          <FiSearch className="h-5 w-5" />
        </a>
        <a href="/" className="btn btn-ghost p-1.5 text-gray-200">
          <VscRocket className="h-5 w-5" />
        </a>
        <a href="/" className="btn btn-ghost p-1.5 text-gray-200">
          <AiOutlineSound className="h-5 w-5" />
        </a>
        <a href="/" className="btn btn-ghost p-1.5 text-gray-200">
          <MdOutlineNotificationsNone className="h-5 w-5" />
        </a>
        <a href="/" className="btn btn-ghost p-1.5 text-gray-200">
          <CgFileDocument className="h-5 w-5" />
        </a>
        <a href="/" className="btn btn-ghost p-1.5 text-gray-200">
          <IoMdCalendar className="h-5 w-5" />
        </a>
        <a href="/" className="btn btn-ghost p-1.5 text-gray-200">
          <RiSettings4Line className="h-5 w-5" />
        </a>
        <div className="divider divider-horizontal h-5 mt-3 border-gray-200"></div>
        <div className="avatar">
          <div className="w-5 rounded">
            <img
              src="https://static.vecteezy.com/system/resources/thumbnails/003/337/584/small/default-avatar-photo-placeholder-profile-icon-vector.jpg"
              alt="Avatar"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
