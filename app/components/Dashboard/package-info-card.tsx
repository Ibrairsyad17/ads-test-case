import React from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ProgressRed } from "@/app/components/Miscellaneous/progress-red";
import { ProgressGreen } from "@/app/components/Miscellaneous/progress-green";

const PackageInfoCard = () => {
  return (
    <Card className="flex flex-col lg:col-span-3 px-8 py-5 shadow space-y-7">
      <div className="grid lg:grid-cols-8 space-y-2 lg:space-y-0 lg:gap-x-8 lg:justify-items-center lg:place-items-center lg:place-content-center pt-4">
        <span className="text-xs lg:col-span-1 justify-self-start">
          Paket saat ini
        </span>
        <div className="flex space-x-2 font-semibold lg:col-span-4 place-content-start justify-self-start">
          <span>Starter</span>
          <Badge>Free</Badge>
        </div>
        <div className="flex flex-col justify-start items-start lg:justify-end lg:items-end lg:col-span-3 justify-self-start lg:justify-self-end">
          <p className="text-xs text-gray-500 text-right dark:text-white">
            Tanggal Hari Ini
          </p>
          <p className="text-xs font-semibold text-gray-900 text-right dark:text-white">
            Selasa, 29 Agustus 2023
          </p>
        </div>
      </div>
      <div className="grid lg:grid-cols-8 lg:gap-x-8 lg:justify-items-center lg:place-items-center lg:place-content-center mt-5 space-y-2 lg:space-y-0">
        <span className="text-xs lg:col-span-1 justify-self-start dark:text-white">
          Devices
        </span>
        <ProgressRed value={70} className="justify-self-start lg:col-span-4" />
        <div className="flex flex-col justify-start items-start lg:justify-end lg:items-end lg:col-span-3 justify-self-start lg:justify-self-end">
          <p className="text-xs font-semibold text-gray-900 lg:text-right dark:text-white">
            Upgrade paket untuk meningkatkan batasan fitur yang ada
          </p>
        </div>
      </div>
      <div className="grid lg:grid-cols-8 lg:gap-x-8 lg:justify-items-center lg:place-items-center lg:place-content-center mt-5 space-y-2 lg:space-y-0">
        <span className="text-xs lg:col-span-1 justify-self-start dark:text-white">
          Contacts
        </span>
        <ProgressGreen
          value={30}
          className="justify-self-start lg:col-span-4"
        />
        <div className="flex flex-col justify-start items-start lg:justify-end lg:items-end lg:col-span-3 justify-self-start lg:justify-self-end">
          <Button className="w-full border border-blue-600 bg-white dark:bg-black text-blue-600 hover:bg-blue-600 hover:text-white text-xs">
            Upgrade Paket
          </Button>
        </div>
      </div>
      <div className="w-full text-sm pt-6 text-gray-500 flex justify-center items-center ">
        Tampilkan kapasitas fitur lainnya
      </div>
    </Card>
  );
};

export default PackageInfoCard;
