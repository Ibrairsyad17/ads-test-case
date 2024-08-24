"use client";
import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

const SignUpForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const router = useRouter();

  return (
    <Card className="lg:w-5/12 w-full lg:bg-white bg-[#ECF2FA] shadow-none lg:shadow-lg border-none lg:border py-5">
      <CardHeader>
        <CardTitle className="text-center">Welcome Back</CardTitle>
        <CardDescription className="text-center">
          We’re so excited to see you again!
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-3">
              <Input
                className="bg-[#ECF2FA] lg:bg-white shadow lg:shadow-none"
                id="name"
                placeholder="Username"
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="flex flex-col space-y-3">
              <Input
                className="bg-[#ECF2FA] lg:bg-white shadow lg:shadow-none"
                id="email"
                type="email"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="flex space-x-3">
              <Select>
                <SelectTrigger className="w-[100px] bg-[#ECF2FA] lg:bg-white shadow lg:shadow-none">
                  <SelectValue placeholder="Kode" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="62">(ID) +62</SelectItem>
                  <SelectItem value="01">(US) +01</SelectItem>
                  <SelectItem value="66">(SG) +65</SelectItem>
                </SelectContent>
              </Select>

              <Input
                className="bg-[#ECF2FA] lg:bg-white shadow lg:shadow-none"
                id="number"
                type="text"
                placeholder="Nomor Telepon"
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <div className="flex flex-col space-y-3">
              <Input
                className="bg-[#ECF2FA] lg:bg-white shadow lg:shadow-none"
                id="password"
                placeholder="Password"
                type="password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex flex-col space-y-4">
        <Button
          className="w-full
        bg-blue-600 hover:bg-blue-700 text-white
        "
        >
          Sign Up
        </Button>
        <div className="w-full flex justify-center items-center">
          <p className="text-sm">Sudah punya akun? </p>
          <Link
            href="/login"
            className="text-blue-600 hover:underline text-sm ml-1"
          >
            Masuk di sini
          </Link>
        </div>
      </CardFooter>
    </Card>
  );
};

export default SignUpForm;
