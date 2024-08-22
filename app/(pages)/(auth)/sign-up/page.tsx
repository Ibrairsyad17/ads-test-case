import React from "react";
import LoginContent from "@/app/components/LoginPage/login-content";
import SignUpForm from "@/app/components/LoginPage/sign-up-form";

const SignUp = () => {
  // eslint-disable-next-line react/no-children-prop
  return <LoginContent children={<SignUpForm />} />;
};

export default SignUp;
