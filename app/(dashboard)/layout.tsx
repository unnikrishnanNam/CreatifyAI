import NavBar from "@/components/custom/NavBar";
import { SideBar } from "@/components/custom/SideBar";
import React from "react";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <aside className="h-full relative">
        <div className="hidden h-full md:flex md:flex-col w-72 md:fixed md:inset-y-0 z-[80]">
          <SideBar />
        </div>
      </aside>
      <main className="md:ml-72 ">
        <NavBar />
        {children}
      </main>
    </div>
  );
};

export default DashboardLayout;
