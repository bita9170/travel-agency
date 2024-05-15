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
        <section className="flex flex-col justify-center items-center py-6 w-full">
          <h1>Log in</h1>

          <div className="grid w-full max-w-sm items-center gap-4 mt-10">
            <div>
              <Label htmlFor="email">Enter your email address</Label>
              <Input
                type="email"
                id="email"
                placeholder="email@domain.com"
                className="w-full border-0 box-border rounded-[22px] shadow-md"
              />
            </div>
            <div>
              <Label htmlFor="password">Password</Label>
              <Input
                type="password"
                id="password"
                placeholder="*************"
                className="w-full border-0 box-border rounded-[22px] shadow-md"
              />
            </div>
          </div>

          <Button className="text-black rounded-[26px] py-6 mt-6 px-24 md:px-28 md:w-auto bg-[#34e0a1]">
            Sign in
          </Button>

          <Separator className="my-4 w-[380px] md:w-1/2" />

          <span>Not a member?</span>

          <Button className="text-white bg-black px-24 md:px-28 py-6 mt-6 rounded-[26px] md:w-auto">
            Register
          </Button>
        </section>
      </MaxLimitWrapper>
    </>
  );
}

export default Page;
