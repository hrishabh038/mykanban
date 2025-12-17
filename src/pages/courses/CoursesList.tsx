import React from "react";
import { CourseCard } from "../../components/components";
import courses from "../../utils/metadata";

type Props = {};

const CoursesList = (props: Props) => {
  return (
    <div className=" flex flex-col gap-4">
      {courses.map((course, index) => (
        <CourseCard
          title={course.title}
          description={course.description}
          image={course.image}
          createdAt={course.createdAt}
          updatedAt={course.updatedAt}
          creatorName={course.creatorName}
          creatorAvatar={course.creatorAvatar}
          view="list"
        />
      ))}
    </div>
  );
};

export default CoursesList;
