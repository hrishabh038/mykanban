import React from "react";
import { Link } from "react-router-dom";
import type { twMerge } from "tailwind-merge";
import { getInitials } from "../utils/helpers/helpers";

type CourseCardProps = {
  username: string
  link: string
  title: string;
  description: string;
  image?: string;
  createdAt: string;
  updatedAt?: string;
  creatorName: string;
  creatorAvatar?: string;
  view?: "grid" | "list"; // determines layout
};

const CourseCard: React.FC<CourseCardProps> = ({
  id,
  username,
  title,
  description,
  image,
  createdAt,
  updatedAt,
  creatorAvatar,
  view = "grid",
}) => {
  const isList = view === "list";

  return (
    <div
      className={`flex ${
        isList ? "flex-col sm:flex-row " : "flex-col h-auto"
      } bg-neutral-900 hover:bg-neutral-800/85 border border-neutral-800 text-neutral-100 overflow-hidden shadow-md hover:shadow-lg transition-shadow w-full gap-0 sm:gap-2`}
    >
      {/* Image */}
      <div
        className={`${
          isList ? "w-full sm:w-48 h-[208px] flex-shrink-0" : "w-full h-48"
        } bg-neutral-800 flex items-center justify-center overflow-hidden`}
      >
        {image ? (
          <img
            src={image}
            alt={title}
            className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
          />
        ) : (
          <div className="text-neutral-500 text-sm">No Image</div>
        )}
      </div>

      {/* Content */}
      <div
        className={`p-4 flex flex-col justify-between gap-2 flex-1 ${
          isList ? "min-h-full" : ""
        }`}
      >
        {/* Title */}
        <h3 className="font-bold text-lg sm:text-xl line-clamp-2 hover:underline"><Link to={`/courses/${id}`}>{title}</Link></h3>

        {/* Description */}
        <p className="text-neutral-400 text-sm sm:text-base line-clamp-3">
          {description}
        </p>

        {/* Creator Info */}
        <div className="flex items-center justify-between mt-2">
          <Link to={username} className="flex items-center gap-2 hover:underline">
            {creatorAvatar ? (
              <img
                src={creatorAvatar}
                alt={username}
                className="w-6 h-6 rounded-full object-cover border border-neutral-700"
              />
            ) : (
              <div className="w-6 h-6 rounded-full bg-neutral-700 flex items-center justify-center text-[10px] text-neutral-100 font-semibold">
                {getInitials(username)}
              </div>
            )}
            <span className="text-neutral-400 text-xs">{username}</span>
          </Link>
          <span className="text-neutral-400 text-[10px] sm:text-xs">
            {updatedAt ? `Updated: ${updatedAt}` : `Created: ${createdAt}`}
          </span>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
