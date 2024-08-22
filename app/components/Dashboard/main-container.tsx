import React from "react";
import PackageInfoCard from "@/app/components/Dashboard/package-info-card";
import MessageContainer from "@/app/components/Dashboard/message-container";

const MainContainer = () => {
  return (
    <div className="grid lg:grid-cols-5 gap-5 my-5">
      <PackageInfoCard />
      <MessageContainer />
    </div>
  );
};

export default MainContainer;
