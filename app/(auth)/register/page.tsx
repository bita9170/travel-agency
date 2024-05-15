"use client";

import React from "react";
import Logo from "@/components/elements/Logo";
import { Button } from "@/components/ui/button";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";

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
      <div className="py-4">
        <h1 className="text-2xl font-bold text-[48px]">Register</h1>
        <p className="text-center text-[14px] mt-4 text-muted-foreground">
          Join us to start planning your next adventure
        </p>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2 ">
          <div className="form mt-10">
            <FormField
              control={form.control}
              name="fullName"
              render={({ field }) => (
                <FormItem className="w-[468px] align-items-center font-family ">
                  <FormLabel className="text-[14px] pl-1">Full Name</FormLabel>

                  <Input
                    style={{ marginBottom: "10px" }}
                    placeholder="Full Name"
                    {...field}
                    className="w-[468px] h-[48px] p-2 border-0 box-border rounded-[22px] shadow-md bg-white text-black text-[14px] font-fira-sans font-medium leading-[18px] outline-none "
                  />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="birthday"
              render={({ field }) => (
                <FormItem className="w-[468px] align-items-center">
                  <FormLabel className="text-[14px] pl-1 ">Birthday</FormLabel>

                  <Input
                    placeholder="Birthday"
                    {...field}
                    className="w-[468px] h-[48px]  p-2 border-0 box-border rounded-[22px] shadow-md bg-white text-black text-[14px] font-fira-sans font-medium leading-[18px] outline-none "
                  />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="w-[468px] align-items-center">
                  <FormLabel className="text-[14px] pl-1">Email</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Email"
                      {...field}
                      className="w-[468px] h-[48px] p-2 border-0 box-border rounded-[22px] shadow-md bg-white text-black text-[14px] font-fira-sans font-medium leading-[18px] outline-none"
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem className="w-[468px] align-items-center">
                  <FormLabel className="text-[14px] pl-1">Username</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Username"
                      {...field}
                      className="w-[468px] h-[48px] p-2 border-0 box-border rounded-[22px] shadow-md bg-white text-black text-[14px] font-fira-sans font-medium leading-[18px] outline-none"
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="address"
              render={({ field }) => (
                <FormItem className="w-[468px] align-items-center">
                  <FormLabel className="text-[14px] pl-1">Address</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Address"
                      {...field}
                      className="w-[468px] h-[48px] p-2 border-0 box-border rounded-[22px] shadow-md bg-white text-black text-[14px] font-fira-sans font-medium leading-[18px] outline-none"
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem className="w-[468px] align-items-center">
                  <FormLabel className="text-[14px] pl-1">
                    Set up a secure password
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Password"
                      type="password"
                      {...field}
                      className="w-[468px] h-[48px] p-2 border-0 box-border rounded-[22px] shadow-md bg-white text-black text-[14px] font-fira-sans font-medium leading-[18px] outline-none"
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="confirmPassword"
              render={({ field }) => (
                <FormItem className="w-[468px] align-items-center">
                  <FormLabel className="text-[14px] pl-1">
                    Confirm Password
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Confirm Password"
                      type="password"
                      {...field}
                      className="w-[468px] h-[48px] p-2 border-0 box-border rounded-[22px] shadow-md bg-white text-black text-[14px] font-fira-sans font-medium leading-[18px] outline-none"
                    />
                  </FormControl>
                </FormItem>
              )}
            />
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
