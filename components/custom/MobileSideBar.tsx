import React from "react";
import { Button } from "../ui/button";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { SideBar } from "./SideBar";

const MobileSideBar = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button size={"icon"} variant={"ghost"} className="md:hidden">
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent side={"left"} className="p-0">
        <SideBar></SideBar>
      </SheetContent>
    </Sheet>
  );
};

export default MobileSideBar;
