import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const SummaryCard = () => {
  return (
    <Card className="lg:col-span-2">
      <CardHeader>
        <CardTitle className="text-xl font-bold">Ringkasan hari ini</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex justify-between items-center">
          <Select>
            <SelectTrigger className="w-[200px] shadow h-12">
              <SelectValue placeholder="Device" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="RMX3263">RMX3263</SelectItem>
            </SelectContent>
          </Select>
          <div className="px-3 py-2 flex w-[180px] flex-col items-start justify-start rounded-md border shadow">
            <span className="text-xs font-medium">Aktif sejak</span>
            <span className="text-xs">29.8.2023</span>
          </div>
        </div>
        <div className="grid lg:grid-cols-3 gap-4">
          <div>
            <p className="text-sm text-gray-500">Pesan Keluar</p>
            <p className="text-2xl font-bold">24</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Pesan Masuk</p>
            <p className="text-2xl font-bold">7</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Pesan Gagal</p>
            <p className="text-2xl font-bold">0</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default SummaryCard;
