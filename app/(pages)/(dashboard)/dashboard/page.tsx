import React from "react";
import NavbarDashboard from "@/app/components/Dashboard/navbar-dashboard";
import HeaderDashboard from "@/app/components/Dashboard/header-dashboard";
import MainContainer from "@/app/components/Dashboard/main-container";

const Page = () => {
  return (
    <div className="ms-64 me-6 h-screen relative bottom-0 top-0 overflow-y-hidden my-6 rounded-xl bg-muted px-6">
      <NavbarDashboard />
      <HeaderDashboard />
      <MainContainer />
    </div>
  );
};

export default Page;
