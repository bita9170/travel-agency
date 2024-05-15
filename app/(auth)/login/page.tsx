import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import MaxLimitWrapper from "@/components/elements/MaxLimitWrapper";
import Logo from "@/components/elements/Logo";

function Page() {
  return (
    <>
      <MaxLimitWrapper>
        <nav className="flex justify-between items-center py-6 w-full max-w-7xl mx-auto px-4 md:px-0">
          <Logo />
          <div className="flex items-center space-x-4">
            <Button className="text-black bg-[#34e0a1] hidden md:block">Login</Button>
            <Button className="bg-white text-black border border-[#34e0a1]">Register</Button>
            <span className="md:flex items-center hidden">
              <svg viewBox="0 0 24 24" className="w-[16px] mr-1">
                <path fill="none" d="M0 0h24v24H0z"></path>
                <path d="M12.89 11.1c-1.78-.59-2.64-.96-2.64-1.9 0-1.02 1.11-1.39 1.81-1.39 1.31 0 1.79.99 1.9 1.34l1.58-.67c-.15-.45-.82-1.92-2.54-2.24V5h-2v1.26c-2.48.56-2.49 2.86-2.49 2.96 0 2.27 2.25 2.91 3.35 3.31 1.58.56 2.28 1.07 2.28 2.03 0 1.13-1.05 1.61-1.98 1.61-1.82 0-2.34-1.87-2.4-2.09l-1.66.67c.63 2.19 2.28 2.78 2.9 2.96V19h2v-1.24c.4-.09 2.9-.59 2.9-3.22 0-1.39-.61-2.61-3.01-3.44zM3 21H1v-6h6v2H4.52c1.61 2.41 4.36 4 7.48 4a9 9 0 0 0 9-9h2c0 6.08-4.92 11-11 11-3.72 0-7.01-1.85-9-4.67V21zm-2-9C1 5.92 5.92 1 12 1c3.72 0 7.01 1.85 9 4.67V3h2v6h-6V7h2.48C17.87 4.59 15.12 3 12 3a9 9 0 0 0-9 9H1z"></path>
              </svg>
              EUR
            </span>
          </div>
        </nav>
        
        <section className="flex flex-col justify-center items-center py-6 w-full">
          <h1>Log in</h1>

          <div className="grid w-full max-w-sm items-center gap-4 mt-10">
            <div className="w-full">
              <Label htmlFor="email">Enter your email address</Label>
              <Input type="email" id="email" placeholder="email@domain.com" className="w-full border-0 box-border rounded-[22px] shadow-md" />
            </div>
            <div className="w-full">
              <Label htmlFor="password">Password</Label>
              <Input type="password" id="password" placeholder="*************" className="w-full border-0 box-border rounded-[22px] shadow-md" />
            </div>
          </div>

          <Button className="text-black px-24 rounded-[26px] md:px-28 py-6 mt-6 w-full md:w-auto bg-[#34e0a1]">
            Sign in
          </Button>

          <Separator className="my-4 w-[380px] md:w-1/2" />

          <span>Not a member?</span>

          <Button className="text-white bg-black px-24 md:px-28 py-6 mt-6 rounded-[26px] w-full md:w-auto">
            Register
          </Button>
        </section>
      </MaxLimitWrapper>
    </>
  );
}

export default Page;
