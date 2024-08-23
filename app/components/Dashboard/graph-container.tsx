import React from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import GraphCard from "@/app/components/Dashboard/graph-card";
import { ChartHour } from "@/app/components/Dashboard/chart-hour";
import { ChartInteractions } from "@/app/components/Dashboard/chart-interactions";

const graphCardData = [
  {
    label: "Hari ini",
    value: "24",
  },
  {
    label: "Rata-rata harian",
    value: "7",
  },
  {
    label: "Bulan ini",
    value: "23",
  },
  {
    label: "Rata-rata waktu",
    value: "00:02:42",
  },
];

const GraphContainer = () => {
  return (
    <Card className="lg:col-span-5">
      <CardHeader>
        <div className="flex flex-col space-y-4 lg:flex-row lg:space-x-4">
          <div className="grid lg:grid-cols-7 gap-4">
            {graphCardData.map((data, index) => (
              <GraphCard key={index} label={data.label} value={data.value} />
            ))}
          </div>
        </div>
      </CardHeader>
      <CardContent className="flex flex-col space-y-4">
        <ChartHour />
        <ChartInteractions />
      </CardContent>
    </Card>
  );
};

export default GraphContainer;
