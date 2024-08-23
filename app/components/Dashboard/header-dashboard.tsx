import React from "react";
import { Calendar } from "lucide-react";

const HeaderDashboard = () => {
  return (
    <div className="flex lg:flex-row flex-col lg:space-y-0 space-y-4 justify-between items-center my-2">
      <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
        Selamat Siang, Alif
      </h1>
      <div className="flex items-center space-x-4">
        <div className="flex flex-col justify-start items-end space-y-1 dark:text-white">
          <p className="text-xs text-gray-500 dark:text-white">
            Tanggal Hari Ini
          </p>
          <p className="text-xs font-semibold text-gray-900 dark:text-white">
            Selasa, 29 Agustus 2023
          </p>
        </div>
        <Calendar className="h-6 w-6" />
      </div>
    </div>
  );
};

export default HeaderDashboard;
