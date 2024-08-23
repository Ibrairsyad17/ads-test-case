import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Link from "next/link";

const LoginForm = () => {
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
                placeholder="Username / Email"
              />
            </div>
            <div className="flex flex-col space-y-3">
              <Input
                className="bg-[#ECF2FA] lg:bg-white shadow lg:shadow-none"
                id="password"
                type="password"
                placeholder="Password"
              />
            </div>
            <Link
              href="/forgot-password"
              className="text-blue-600 hover:underline text-sm"
            >
              Lupa Password?
            </Link>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex flex-col space-y-4">
        <Button
          className="w-full
        bg-blue-600 hover:bg-blue-700 text-white
        "
        >
          Sign In
        </Button>
        <div className="w-full flex justify-center items-center">
          <p className="text-sm">Belum buat akun? </p>
          <Link
            href="/sign-up"
            className="text-blue-600 hover:underline text-sm ml-1"
          >
            Daftar di sini
          </Link>
        </div>
      </CardFooter>
    </Card>
  );
};

export default LoginForm;
