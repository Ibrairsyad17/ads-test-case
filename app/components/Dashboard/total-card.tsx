import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageStats } from "@/app/components/Miscellaneous/message-stats";

const TotalCard = () => {
  return (
    <Card className="lg:col-span-3">
      <CardHeader>
        <CardTitle className="text-xl font-bold">
          Total statistik pesan
        </CardTitle>
      </CardHeader>
      <CardContent className="grid lg:grid-cols-5 gap-2">
        <div className="flex flex-col lg:col-span-2">
          <div className="grid lg:grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-gray-500">Total Pesan Keluar</p>
              <p className="text-2xl font-bold">45</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Total Pesan Gagal</p>
              <p className="text-2xl font-bold">8</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Total Pesan Masuk</p>
              <p className="text-2xl font-bold">23</p>
            </div>
          </div>
        </div>
        <MessageStats />
      </CardContent>
    </Card>
  );
};

export default TotalCard;
