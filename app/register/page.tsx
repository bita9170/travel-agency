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

function Register(props) {
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
      <div className="flex justify-between items-center w-full px-8 ">
        <div className="m-auto">
          <Logo />
        </div>

        <div className="flex items-center space-x-4 m-auto">
          <Button className="bg-[#34e0a1]" variant="outline">
            Login
          </Button>
          <Button className="border-[#34e0a1]" variant="outline">
            Register
          </Button>

          <div className="flex items-center space-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="w-6 h-6"
            >
              <path fill="none" d="M0 0h24v24H0z" />
              <path d="M12.89 11.1c-1.78-.59-2.64-.96-2.64-1.9 0-1.02 1.11-1.39 1.81-1.39 1.31 0 1.79.99 1.9 1.34l1.58-.67c-.15-.45-.82-1.92-2.54-2.24V5h-2v1.26c-2.48.56-2.49 2.86-2.49 2.96 0 2.27 2.25 2.91 3.35 3.31 1.58.56 2.28 1.07 2.28 2.03 0 1.13-1.05 1.61-1.98 1.61-1.82 0-2.34-1.87-2.4-2.09l-1.66.67c.63 2.19 2.28 2.78 2.9 2.96V19h2v-1.24c.4-.09 2.9-.59 2.9-3.22 0-1.39-.61-2.61-3.01-3.44zM3 21H1v-6h6v2H4.52c1.61 2.41 4.36 4 7.48 4a9 9 0 0 0 9-9h2c0 6.08-4.92 11-11 11-3.72 0-7.01-1.85-9-4.67V21zm-2-9C1 5.92 5.92 1 12 1c3.72 0 7.01 1.85 9 4.67V3h2v6h-6V7h2.48C17.87 4.59 15.12 3 12 3a9 9 0 0 0-9 9H1z" />
            </svg>
            <div style={styles.text}>{props.text ?? defaultProps.text}</div>
          </div>
        </div>
      </div>
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
                  <FormLabel className="text-[14px] pl-1 fira-sans-medium-italic">
                    Full Name
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Full Name"
                      {...field}
                      className="w-[468px] h-[48px] p-2 border-0 box-border rounded-[22px] shadow-md bg-white text-black text-[14px] font-fira-sans font-medium leading-[18px] outline-none "
                    />
                  </FormControl>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="birthday"
              render={({ field }) => (
                <FormItem className="w-[468px] align-items-center">
                  <FormLabel className="text-[14px] pl-1">Birthday</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Birthday"
                      {...field}
                      className="w-[468px] h-[48px] p-2 border-0 box-border rounded-[22px] shadow-md bg-white text-black text-[14px] font-fira-sans font-medium leading-[18px] outline-none"
                    />
                  </FormControl>
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
