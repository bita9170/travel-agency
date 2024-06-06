"use client";

import React from "react";
import { Button } from "../ui/button";
import { RegisterLink } from "@kinde-oss/kinde-auth-nextjs";
import Link from "next/link";
import { usePathname } from "next/navigation";

function LoginRegisterLink() {
  const pathname = usePathname();
  return (
    <>
      <Button variant={"orange"}>
        <RegisterLink>Register</RegisterLink>
      </Button>
      <Button variant={"green"}>
        <Link href={`/api/auth/login?post_login_redirect_url=${pathname}`}>
          Login
        </Link>
      </Button>
    </>
  );
}

export default LoginRegisterLink;
