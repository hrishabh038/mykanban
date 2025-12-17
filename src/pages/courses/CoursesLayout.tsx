import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { twMerge } from "tailwind-merge";

type Props = {};

const Courses = (props: Props) => {
  const { pathname } = useLocation();
  return (
    <div className="flex flex-col gap-12">
      <div className="flex gap-2 flex-wrap items-center justify-between">
        <h1 className="text-xl sm:text-3xl font-bold text-neutral-100 text-center bbh-bartle-regular">
          Courses
        </h1>
        <div className="flex items-center border border-neutral-800 rounded">
          <Link
            to={"/courses/listing"}
            className={twMerge(
              "p-2 cursor-pointer hover:bg-neutral-800/50",
              pathname === "/courses/listing" && "bg-neutral-800 hover:bg-neutral-800"
            )}
          >
            All courses
          </Link>

          <Link
            to={"/courses/created-by-you"}
            className={twMerge(
              "p-2 cursor-pointer hover:bg-neutral-800/50 border-x border-neutral-800",
              pathname === "/courses/created-by-you" && "bg-neutral-800 hover:bg-neutral-800"
            )}
          >
            Your Courses
          </Link>

          <Link
            to={"/courses/enrolled"}
            className={twMerge("p-2 cursor-pointer hover:bg-neutral-800/50",
               pathname === "/courses/enrolled" && "bg-neutral-800 hover:bg-neutral-800"
            )}
          >
            Enrolled courses
          </Link>
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default Courses;
