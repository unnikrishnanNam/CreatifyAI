import React from "react";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="flex h-[100vh] items-center justify-center">
      {children}
    </main>
  );
};

export default AuthLayout;
