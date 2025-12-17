import React from "react";
import { Button, Inputarea, PasswordInput } from "../../components/components";
import { Link } from "react-router-dom";

type Props = {};

const Register = (props: Props) => {
  return (
    <div className="flex flex-col gap-4 w-full sm:w-[600px]">
      <div className="flex flex-col gap-6 rounded border border-neutral-800 p-4 bg-neutral-900">
        <div className="flex flex-col gap-2 text-center">
          <h1 className="bbh-bartle-regular text-xl font-bold">Register</h1>
          <p className="text-sm text-neutral-400">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores
            assumenda quam placeat sit alias officiis necessitatibus architecto,
            totam laboriosam dolorem!
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <Inputarea label="Fullname" placeholder="eg. Jhon Doe" />
          <Inputarea label="Username" placeholder="Enter username" />
          <Inputarea label="Email" placeholder="eg. example@mail.com" />
          <PasswordInput label="Password" placeholder="Enter password" />
        </div>
        <div>
          <Button label="Login" />
        </div>
      </div>
      <Link
        to={"/auth/login"}
        className="rounded border border-neutral-800 hover:bg-neutral-800 p-4 text-center text-neutral-300 bg-neutral-900"
      >
        Already have an account? Login
      </Link>
    </div>
  );
};

export default Register;
