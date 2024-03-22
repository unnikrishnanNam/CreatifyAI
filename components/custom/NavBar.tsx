import React from "react";
import { Button } from "../ui/button";
import { Menu } from "lucide-react";
import { UserButton } from "@clerk/nextjs";
import { ModeToggle } from "./ModeToggle";

const NavBar = () => {
  return (
    <nav className="flex items-center p-4">
      <Button size={"icon"} variant={"ghost"} className="md:hidden">
        <Menu />
      </Button>

      <div className="flex w-full justify-end items-center gap-4">
        <ModeToggle />
        <UserButton afterSignOutUrl="/" />
      </div>
    </nav>
  );
};

export default NavBar;
