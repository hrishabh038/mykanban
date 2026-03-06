import React, { Children } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import * as mokeData from "../../utils/metadata/users.metadata";
import { getInitials, usePathname } from "../../utils/helpers/helpers";
import NotFound from "../error/NotFound";
import {
  DeleteIcon,
  LogoutIcon,
  SettingsIcon,
  SquarePenIcon,
} from "../../assets/icons/icons";
import { twMerge } from "tailwind-merge";
import { li } from "motion/react-client";

type Props = {};
type Stat = {
  id: number;
  label: string;
  value: string;
};

const formatYear = (dateStr: string) => new Date(dateStr).getFullYear();

const Profile = (props: Props) => {
  const { username } = useParams<{ username: string }>();
  const { pathname } = useLocation();
  const user = mokeData.MOCK_USERS.find((user) => user.username === username);

  if (!user) return <NotFound />;
  const navlinks = [
    {
      to: "/settings",
      icon: SettingsIcon,
    },
    {
      to: "/settings/edit-user-info",
      icon: SquarePenIcon,
    },
  ];

  const stats: Stat[] = [
    {
      id: 1,
      label: "Total Experience",
      value: "2+ Years",
    },
    {
      id: 2,
      label: "Courses Created",
      value: "18",
    },
    {
      id: 3,
      label: "Courses Completed",
      value: "47",
    },
    {
      id: 4,
      label: "Total Enrollments",
      value: "2.1K",
    },
  ];
  const isEditable = true;
  return (
    <div>
      <div className="flex flex-col gap-14 ">
        <div className=" flex flex-col sm:flex-row items-start sm:items-end gap-4">
          <div className="rounded min-w-32 min-h-32 bg-neutral-800 flex items-center justify-center text-2xl text-neutral-100/50 font-semibold">
            {getInitials(user.fullName)}
          </div>
          <div className="flex flex-col gap-2">
            <div className="text-4xl font-bold">{user.fullName}</div>
            <p className="sm:w-[500px] text-sm text-neutral-400">
              {user.bio}
            </p>{" "}
            {isEditable && (
              <ul className="flex items-center gap-2">
                {navlinks.map((navlink, index) => (
                  <li>
                    <Link to={navlink.to}>
                      <navlink.icon
                        size={18}
                        className={twMerge(
                          "p-2 rounded p-2  border border-neutral-800 hover:bg-neutral-800/50",
                          pathname.startsWith(navlink.to) &&
                            "bg-neutral-800 hover:bg-neutral-800"
                        )}
                      />
                    </Link>
                  </li>
                ))}
                <li>
                  <Link to={"/"}>
                    <LogoutIcon
                      size={18}
                      className={twMerge(
                        "p-2 rounded p-2  border border-neutral-800 hover:bg-neutral-800/50"
                      )}
                    />
                  </Link>
                </li>
              </ul>
            )}
          </div>
        </div>

        <ul className="flex flex-wrap items-center">
          {stats.map((stat) => (
            <li className="relative flex items-end justify-center border-1 border-neutral-800 w-[150px] h-[100px] pb-2">
              <span className="absolute top-5 text-2xl font-bold">
                {stat.value}
              </span>
              <span className="text-neutral-500 text-xs uppercase">
                {stat.label}
              </span>
            </li>
          ))}
        </ul>

        <Heading title="About">
          <p className="leading-relaxed">{user.about}</p>
        </Heading>
        <SkillsSection skills={user.skills} isEditable={isEditable} />
        <WorkExperience isEditable={isEditable} username={user.username} />
        <Education isEditable={isEditable} username={user.username} />
      </div>
    </div>
  );
};

const Heading = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => {
  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-sm font-semibold text-neutral-500 uppercase italic tracking-wider">
        {title}
      </h1>
      <div>{children}</div>
    </div>
  );
};

const WorkExperience = ({
  isEditable,
  username,
}: {
  isEditable: boolean;
  username: string;
}) => {
  const workExperience = mokeData.MOCK_WORK.filter(
    (we) => we.username === username
  );
  return (
    <Heading title="Work Experience">
      <ul className="flex flex-col gap-4">
        {workExperience.map((we) => (
          <div className=" flex flex-col gap-4 border-1 rounded border-neutral-800 hover:border-purple-900 hover:bg-purple-900/10  p-4 transition-colors">
            <div className="flex items-start flex-wrap justify-between">
              <div>
                <p className="text-xl font-bold">{we.position}</p>
                <p className="text-neutral-400">{we.company}</p>
                <span className="text-xs text-neutral-500 tabular-nums">
                  {formatYear(we.startDate)} -{" "}
                  {we.endDate ? formatYear(we.endDate) : "Present"}
                </span>
              </div>
              {isEditable && (
                <ul className="flex items-center gap-2">
                  <li>
                    <div>
                      <SquarePenIcon
                        size={18}
                        className={twMerge(
                          "p-2 rounded p-2  border border-neutral-800 hover:bg-neutral-800/50"
                        )}
                      />
                    </div>
                  </li>
                  <li>
                    <div>
                      <DeleteIcon
                        size={18}
                        className={twMerge(
                          "p-2 rounded p-2  border border-neutral-800 hover:bg-neutral-800/50"
                        )}
                      />
                    </div>
                  </li>
                </ul>
              )}
            </div>
            <p className="leading-relaxed">{we.description}</p>
          </div>
        ))}
      </ul>
    </Heading>
  );
};

const Education = ({
  isEditable,
  username,
}: {
  isEditable: boolean;
  username: string;
}) => {
  const education = mokeData.MOCK_EDUCATION.filter(
    (ed) => ed.username === username
  );
  return (
    <Heading title="Education">
      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {education.map((ed) => (
          <div className=" flex flex-col gap-4 border-1 rounded border-neutral-800 hover:border-purple-900 hover:bg-purple-900/10 p-4 transition-colors">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-xl font-bold">{ed.institution}</p>
                <p className="text-neutral-400">
                  {ed.degree} - {ed.fieldOfStudy}
                </p>
                <span className="text-xs text-neutral-500 tabular-nums">
                  {formatYear(ed.startDate)} -{" "}
                  {ed.endDate ? formatYear(ed.endDate) : "Present"}
                </span>
              </div>
              {isEditable && (
                <ul className="flex items-center gap-2">
                  <li>
                    <div>
                      <SquarePenIcon
                        size={18}
                        className={twMerge(
                          "p-2 rounded p-2  border border-neutral-800 hover:bg-neutral-800/50"
                        )}
                      />
                    </div>
                  </li>
                  <li>
                    <div>
                      <DeleteIcon
                        size={18}
                        className={twMerge(
                          "p-2 rounded p-2  border border-neutral-800 hover:bg-neutral-800/50"
                        )}
                      />
                    </div>
                  </li>
                </ul>
              )}
            </div>
          </div>
        ))}
      </ul>
    </Heading>
  );
};

const SkillsSection = ({
  isEditable,
  skills,
}: {
  isEditable: boolean;
  skills: string;
}) => {
  const skillsArray = skills.split(",").map((skill) => skill.trim());
  console.log(isEditable)
  return (
    <Heading title="Skills">
      <div className="flex flex-col gap-4">
        {isEditable && (
          <ul className="flex items-center justify-end gap-2">
            <li>
              <div>
                <SquarePenIcon
                  size={18}
                  className={twMerge(
                    "p-2 rounded p-2  border border-neutral-800 hover:bg-neutral-800/50"
                  )}
                />
              </div>
            </li>
            <li>
              <div>
                <DeleteIcon
                  size={18}
                  className={twMerge(
                    "p-2 rounded p-2  border border-neutral-800 hover:bg-neutral-800/50"
                  )}
                />
              </div>
            </li>
          </ul>
        )}
        <ul className="flex flex-wrap gap-2">
          {skillsArray.map((skill, index) => (
            <span className="p-1 px-2 rounded border-1 border-neutral-800 hover:border-purple-900 hover:bg-purple-900/10">
              {skill}
            </span>
          ))}
        </ul>
      </div>
    </Heading>
  );
};

export default Profile;
