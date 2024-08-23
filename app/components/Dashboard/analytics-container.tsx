import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import SummaryCard from "@/app/components/Dashboard/summary-card";
import TotalCard from "@/app/components/Dashboard/total-card";
import GraphContainer from "@/app/components/Dashboard/graph-container";

const AnalyticsContainer = () => {
  return (
    <Card className="shadow border">
      <CardHeader>
        <CardTitle className="text-xl">Analitik</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col">
        <div className="grid lg:grid-cols-5 gap-5">
          <SummaryCard />
          <TotalCard />
          <GraphContainer />
        </div>
      </CardContent>
    </Card>
  );
};

export default AnalyticsContainer;
