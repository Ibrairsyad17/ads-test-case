import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

const MessageContainer = () => {
  return (
    <Card className="lg:col-span-2 shadow border">
      <CardHeader>
        <CardTitle className="text-lg">Pesan Terakhir</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="w-full -mt-2 flex flex-col space-y-2">
          <div className="w-full flex space-x-4 justify-between items-center bg-muted px-2 py-2 rounded-lg">
            <div className="flex space-x-4 justify-between items-center">
              <Avatar className="h-8 w-8">
                <AvatarImage
                  src="https://github.com/shadcn.png"
                  alt="@shadcn"
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <div className="flex flex-col justify-start items-start lg:col-span-3 justify-self-end">
                <p className="text-sm font-semibold text-right">Anda</p>
                <p className="text-xs font-semibold text-gray-500 text-right">
                  Selasa, 29 Agustus 2023
                </p>
              </div>
            </div>

            <Badge className="bg-blue-600">Terkirim</Badge>
          </div>
          <div className="w-full flex space-x-4 justify-between items-center bg-muted px-2 py-2 rounded-lg">
            <div className="flex space-x-4 justify-between items-center">
              <Avatar className="h-8 w-8">
                <AvatarImage
                  src="https://github.com/shadcn.png"
                  alt="@shadcn"
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <div className="flex flex-col justify-start items-start lg:col-span-3 justify-self-end">
                <p className="text-sm font-semibold text-right">Anda</p>
                <p className="text-xs font-semibold text-gray-500 text-right">
                  Selasa, 29 Agustus 2023
                </p>
              </div>
            </div>

            <Badge className="bg-blue-600">Terkirim</Badge>
          </div>
          <div className="w-full flex space-x-4 justify-between items-center bg-muted px-2 py-2 rounded-lg">
            <div className="flex space-x-4 justify-between items-center">
              <Avatar className="h-8 w-8">
                <AvatarImage
                  src="https://github.com/shadcn.png"
                  alt="@shadcn"
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <div className="flex flex-col justify-start items-start lg:col-span-3 justify-self-end">
                <p className="text-sm font-semibold text-right">Anda</p>
                <p className="text-xs font-semibold text-gray-500 text-right">
                  Selasa, 29 Agustus 2023
                </p>
              </div>
            </div>

            <Badge className="bg-blue-600">Terkirim</Badge>
          </div>
          <div className="w-full pt-2 text-sm text-blue-600 flex justify-center items-center">
            Tampilkan lainnya
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default MessageContainer;
