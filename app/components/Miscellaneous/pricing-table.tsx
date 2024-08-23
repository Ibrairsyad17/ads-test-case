"use client";
import * as React from "react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import TabToggle from "@/app/components/Miscellaneous/tab-toggle";
import { pricingPlans } from "@/app/helpers/pricing-data";

export default function PricingTable() {
  const [isYearly, setIsYearly] = React.useState(false);
  return (
    <div className=" px-4 py-8 lg:col-span-7 justify-self-start place-self-start">
      <h1 className="text-3xl font-bold text-center mb-8">Our Pricing</h1>
      <div className="flex flex-col items-center space-y-4 mb-8">
        <TabToggle isYearly={isYearly} setIsYearly={setIsYearly} />
        <p className="text-center text-sm bg-blue-100 text-blue-800 py-2 px-4 rounded-full">
          Hemat hingga 25% dengan paket tahunan
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {pricingPlans.map((plan) => (
          <Card
            key={plan.name}
            className={`flex flex-col border-none shadow-none ${
              plan.name === "Basic" ? "shadow-lg" : ""
            }`}
          >
            <CardHeader>
              <CardTitle>{plan.name}</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
              <div className="text-3xl font-bold mb-2">
                {isYearly ? plan.price.yearly : plan.price.monthly}
                {plan.name !== "Starter" && (
                  <span className="text-sm font-normal">/bulan</span>
                )}
              </div>
              {isYearly && plan.name !== "Starter" && (
                <div className="text-sm text-muted-foreground mb-4">
                  {plan.price.yearly}/tahun
                </div>
              )}
              <p className="text-xs text-muted-foreground mb-6">
                {plan.description}
              </p>
              <Button
                className="w-full mb-4"
                // @ts-ignore
                variant={plan.buttonVariant as "blue" | "warning"}
              >
                {plan.buttonText}
              </Button>
              <ul className="space-y-2">
                {plan.features.map((feature) => (
                  <li key={feature.title} className="flex items-center">
                    <feature.icon className="w-4 h-4 mr-2 text-blue-500" />
                    <span>{feature.title}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
