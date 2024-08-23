"use client";

import { TrendingUp } from "lucide-react";
import { Pie, PieChart } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
const chartData = [
  { browser: "chrome", visitors: 275, fill: "#3366FF" },
  { browser: "firefox", visitors: 187, fill: "#F3F5F8" },
  { browser: "safari", visitors: 200, fill: "#4FBEAB" },
];

const chartConfig = {
  visitors: {
    label: "Messages",
  },
  chrome: {
    label: "Pesan Masuk",
    color: "hsl(var(--chart-1))",
  },
  safari: {
    label: "Pesan Keluar",
    color: "hsl(var(--chart-2))",
  },
  firefox: {
    label: "Pesan Gagal",
    color: "hsl(var(--chart-3))",
  },
} satisfies ChartConfig;

export function MessageStats() {
  return (
    <Card className="lg:col-span-3 flex flex-col border-none shadow-none p-0 bg-transparent lg:-mt-12 lg:-me-20">
      <CardContent className="flex-1">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[200px] lg:col-span-2"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={chartData}
              dataKey="visitors"
              nameKey="browser"
              innerRadius={60}
            />
          </PieChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
