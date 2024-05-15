"use client";

import React from "react";
import Logo from "@/components/elements/Logo";
import { Button } from "@/components/ui/button";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import Navbar from "@/auth/register/navbar";

const formSchema = z.object({
  fullName: z.string().min(2).max(50),
  email: z.string().email(),
  username: z.string().min(2).max(50),
  address: z.string().optional(),
  password: z.string().min(6).max(50),
  confirmPassword: z.string().min(6).max(50),
  birthday: z.string().optional(),
  agreeToTerms: z.boolean().refine((val) => val, {
    message: "You must agree to the terms and conditions",
  }),
});

const styles = {
  text: {
    fontSize: "16px",
    color: "black",
  },
};

const defaultProps = {
  text: "EUR",
  color: "black",
};

function Register(props: any) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      username: "",
      address: "",
      password: "",
      confirmPassword: "",
      birthday: "",
      agreeToTerms: false,
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    if (values.password !== values.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      const response = await fetch("/api/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: values.fullName,
          username: values.username,
          address: values.address,
          email: values.email,
          password: values.password,
          birthday: values.birthday,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to register user");
      }

      const data = await response.json();
      console.log(data);
      alert("User registered successfully!");
    } catch (error) {
      console.error(error);
      alert(`Error registering user: ${(error as Error).message}`);
    }
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen space-y-2 mt-10">
      <Navbar />
      <div className="py-4">
        <h1 className="text-2xl font-bold text-[48px]">Register</h1>
        <p className="text-center text-[14px] mt-4 text-muted-foreground">
          Join us to start planning your next adventure
        </p>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2 ">
          <div className="form mt-10">
            <div className="w-full">
              <Label htmlFor="password">Full Name</Label>
              <Input
                type="fullname"
                id="fullname"
                placeholder="*************"
                className="w-full border-0 box-border rounded-[22px] shadow-md"
              />
            </div>
            <div className="w-full">
              <Label htmlFor="birthday">Birthday</Label>
              <Input
                type="birthday"
                id="birthday"
                placeholder="*************"
                className="w-full border-0 box-border rounded-[22px] shadow-md"
              />
            </div>
            <div className="w-full">
              <Label htmlFor="password">Email</Label>
              <Input
                type="email"
                id="email"
                placeholder="*************"
                className="w-full border-0 box-border rounded-[22px] shadow-md"
              />
            </div>
            <div className="w-full">
              <Label htmlFor="username">Username</Label>
              <Input
                type="username"
                id="username"
                placeholder="*************"
                className="w-full border-0 box-border rounded-[22px] shadow-md"
              />
            </div>
            <div className="w-full">
              <Label htmlFor="address">address</Label>
              <Input
                type="address"
                id="address"
                placeholder="*************"
                className="w-full border-0 box-border rounded-[22px] shadow-md"
              />
            </div>
            <div className="w-full">
              <Label htmlFor="password">Password</Label>
              <Input
                type="password"
                id="password"
                placeholder="*************"
                className="w-full border-0 box-border rounded-[22px] shadow-md"
              />
            </div>
            <div className="w-full">
              <Label htmlFor="confirm Password">confirm Password</Label>
              <Input
                type="confirm"
                id="confirm password"
                placeholder="*************"
                className="w-full border-0 box-border rounded-[22px] shadow-md"
              />
            </div>
            <div className="w-full">
              <Label htmlFor="password">Password</Label>
              <Input
                type="password"
                id="password"
                placeholder="*************"
                className="w-full border-0 box-border rounded-[22px] shadow-md"
              />
            </div>
          </div>

          <FormField
            control={form.control}
            name="agreeToTerms"
            render={({ field }) => (
              <FormItem className="w-[468px] flex items-center ">
                <input
                  type="checkbox"
                  {...field}
                  className="mr-4 mt-2 border-none"
                />
                <FormLabel className="text-center">
                  By signing up, you agree to our
                  <Link href="/terms" className="text-black">
                    Terms
                  </Link>
                  and
                  <Link href="/privacy" className="text-black">
                    Privacy Policy.
                  </Link>
                </FormLabel>
              </FormItem>
            )}
          />
          <FormMessage />
          <Button
            type="submit"
            className="
              w-[468px]
              h-[48px]
              px-2
              border-0
              box-border
              rounded-[22px]
              bg-[#34e0a1]
              text-black
              text-[16px]
              font-fira-sans
              font-bold
              leading-[22px]
              outline-none
              cursor-pointer
              "
          >
            Join
          </Button>
          <p className="text-center mt-4 text-muted-foreground">
            Already a member?
            <Link href="/login" className="text-black">
              Log in
            </Link>
          </p>
        </form>
      </Form>
    </div>
  );
}

export default Register;
