import React from "react";
import { Logo, Avatar, Dropdown, DropdownDep } from "./components";
import { useGetUser } from "../hooks/useUsers";

type Props = {};

export const Navbar = (props: Props) => {
  const user = useGetUser("u2");
  return (
    <nav className="flex items-center justify-between w-full">
      <Logo />
      <Dropdown
        trigger={<Avatar userId={user?.id} isFullnameVisible />}
        header={{
          title: user?.fullname,
          subtitle: user?.email,
        }}
        menu={[
          {
            items: [
              { label: "Profile", onClick: () => {} },
              { label: "Settings", onClick: () => {} },
            ],
          },
          {
            items: [
              { label: "Sign out", onClick: () => {}, variant: "danger" },
            ],
          },
        ]}
      />
    </nav>
  );
};
