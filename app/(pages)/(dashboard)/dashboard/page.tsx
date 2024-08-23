import React from "react";
import NavbarDashboard from "@/app/components/Dashboard/navbar-dashboard";
import HeaderDashboard from "@/app/components/Dashboard/header-dashboard";
import MainContainer from "@/app/components/Dashboard/main-container";
import AnalyticsContainer from "@/app/components/Dashboard/analytics-container";

const Page = () => {
  return (
    <div className="lg:ms-64 mx-6 lg:mx-0 me-6 h-auto relative bottom-0 top-0 my-6 rounded-xl bg-muted px-6 pb-5 overflow-x-hidden">
      <NavbarDashboard />
      <HeaderDashboard />
      <MainContainer />
      <AnalyticsContainer />
    </div>
  );
};

export default Page;
