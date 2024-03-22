import React from "react";
import { Button } from "../ui/button";
import { Menu } from "lucide-react";
import { UserButton } from "@clerk/nextjs";

const NavBar = () => {
  return (
    <nav className="flex items-center p-4">
      <Button size={"icon"} variant={"ghost"} className="md:hidden">
        <Menu />
      </Button>

      <div className="flex w-full justify-end">
        <UserButton afterSignOutUrl="/" />
      </div>
    </nav>
  );
};

export default NavBar;
