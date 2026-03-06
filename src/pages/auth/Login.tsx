import React from "react";
import { Link } from "react-router-dom";
import { Button, Inputarea, PasswordInput } from "../../components/components";
import ThridPartyAuth from "./ThridPartyAuth";
import useAuth from "../../hooks/useAuth";


type Props = {};

const Login = (props: Props) => {
  const {login} = useAuth()
  return (
    <div className="flex flex-col gap-4 w-full sm:w-[600px] ">
      <div className="flex flex-col gap-6 rounded border border-neutral-800 p-4 bg-neutral-900">
        <div className="flex flex-col gap-2 text-center">
          <h1 className="text-xl font-bold bbh-bartle-regular">LOGIN</h1>
          <p className="text-sm text-neutral-400">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores
            assumenda quam placeat sit alias officiis necessitatibus architecto,
            totam laboriosam dolorem!
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <Inputarea label="Username" placeholder="Enter username" />
          <PasswordInput label="Password" placeholder="Enter password" />
        </div>
        <div>
          <Button label="Login" onClick={() => login()} />
        </div>
        <ThridPartyAuth />
      </div>
      <Link
        to={"/auth/register"}
        className="rounded border border-neutral-800 hover:bg-neutral-800 p-4 text-center text-neutral-300 bg-neutral-900"
      >
        Create new account
      </Link>
    </div>
  );
};

export default Login;
