import React from "react";
import { GithubIcon } from "../../assets/icons/icons";
import { FcGoogle } from "react-icons/fc";

type Props = {};

const ThridPartyAuth = (props: Props) => {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-center gap-3 w-full">
      <div className="flex gap-2 items-center justify-center px-4 py-2 border rounded border-neutral-800 bg-neutral-800/50 hover:bg-neutral-800/75 cursor-pointer w-full">
        <FcGoogle size={25} />
        Continue with Google
      </div>
      <div className="flex gap-2 items-center justify-center px-4 py-2 border rounded border-neutral-800 bg-neutral-800/50 hover:bg-neutral-800/75 cursor-pointer w-full">
        <GithubIcon size={25} />
        Continue with Github
      </div>
    </div>
  );
};

export default ThridPartyAuth;
