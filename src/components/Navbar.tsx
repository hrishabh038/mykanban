import React from "react";
import Logo from "./Logo";
import { Link, useLocation } from "react-router-dom";
import {
  BookTextIcon,
  HomeIcon,
  UserIcon,
  KeySquareIcon,
} from "../assets/icons/icons";
import { twMerge } from "tailwind-merge";
import { Dropdown } from "./components";
import useAuth from "../hooks/useAuth";

type Props = {};

const navlinks = [
  {
    to: "/home",
    icon: HomeIcon,
  },
  // {
  //   to: "/courses",
  //   icon: BookTextIcon,
  // },
];

const Navbar = (props: Props) => {
  const { user, logout } = useAuth();
  const { pathname } = useLocation();
  const menuItems = [
    { label: "Profile", to: "/profile/alex_dev" },
    { label: "Settings", to: "/settings" },
    {
      label: "Logout",
      to: "/auth/login",
      onClick: () => {
        logout();
      },
    },
  ];
  const isLoggedInUser = user ? true : false; // Replace with actual authentication logic
  return (
    <nav className="px-4 lg:px-2 flex items-center justify-between border-b border-neutral-800 w-full lg:w-[1000px] h-16">
      <Logo />
      <ul className="flex items-center gap-2">
        {navlinks.map((navlink, index) => (
          <li>
            <Link to={navlink.to}>
              <navlink.icon
                size={20}
                className={twMerge(
                  "p-2 rounded border border-neutral-800 hover:bg-neutral-800/50",
                  pathname.startsWith(navlink.to) &&
                    "bg-neutral-800 hover:bg-neutral-800"
                )}
              />
            </Link>
          </li>
        ))}

        {isLoggedInUser ? (
          <Dropdown icon={<UserIcon size={20} />} items={menuItems} />
        ) : (
          <Link to={"/auth"}>
            <KeySquareIcon
              size={20}
              className={twMerge(
                "p-2 rounded p-2 border border-neutral-800 hover:bg-neutral-800/50",
                pathname.startsWith("/auth") &&
                  "bg-neutral-800 hover:bg-neutral-800"
              )}
            />
          </Link>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
