import React from "react";
import { Outlet } from "react-router-dom";

type Props = {};

const Auth = (props: Props) => {
  return (
    <div>
      Auth
      <Outlet />
    </div>
  );
};

export default Auth;
