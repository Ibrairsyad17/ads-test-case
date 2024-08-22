import React from "react";
import LoginContent from "@/app/components/LoginPage/login-content";
import LoginForm from "@/app/components/LoginPage/login-form";

const LoginPage = () => {
  // eslint-disable-next-line react/no-children-prop
  return <LoginContent children={<LoginForm />} />;
};

export default LoginPage;
