import { UserButton } from "@clerk/nextjs";
import React from "react";

const DashboardPage = () => {
  return (
    <div className="text-center p-10">
      <h1 className="text-4xl font-semibold text-muted-foreground">
        Dashboard (Protected)
      </h1>
      <p>Welcome to the dashboard</p>
    </div>
  );
};

export default DashboardPage;
