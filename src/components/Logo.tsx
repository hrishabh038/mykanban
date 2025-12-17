import React from "react";

type Props = {};

const Logo = (props: Props) => {
  return (
    <div className="bbh-bartle-regular flex flex-col text-start sm:flex-row items-start sm:items-center sm:gap-2 text-sm sm:text-[16px] ">
      <span>Learning</span> <span>Hub</span>
    </div>
  );
};

export default Logo;
