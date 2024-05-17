"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import MaxLimitWrapper from "@/components/elements/MaxLimitWrapper";

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

function Register() {
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
    <MaxLimitWrapper>
      <div className="flex flex-col items-center justify-center">
        <div className="text-center space-y-2">
          <h2 className="text-3xl font-bold">Register</h2>
          <p className="text-muted-foreground">
            Join us to start planning your next adventure
          </p>
        </div>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <div className="form mt-6 max-w-md mx-auto space-y-4">
              <FormField
                control={form.control}
                name="fullName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="ml-2">Full Name</FormLabel>

                    <Input
                      placeholder="Full Name"
                      {...field}
                      className="p-4 shadow-shadowSmall border-2 rounded-3xl"
                    />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="birthday"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="ml-2">Birthday</FormLabel>

                    <Input
                      placeholder="day.month.year"
                      {...field}
                      className="p-4 shadow-shadowSmall border-2 rounded-3xl"
                    />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="ml-2">Email</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Email"
                        {...field}
                        className="p-4 shadow-shadowSmall border-2 rounded-3xl"
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="ml-2">Username</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Username"
                        {...field}
                        className="p-4 shadow-shadowSmall border-2 rounded-3xl"
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="address"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="ml-2">Address</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Musterstrasse 1, Musterstadt"
                        {...field}
                        className="p-4 shadow-shadowSmall border-2 rounded-3xl"
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="ml-2">
                      Set up a secure password
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Password"
                        type="password"
                        {...field}
                        className="p-4 shadow-shadowSmall border-2 rounded-3xl"
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="confirmPassword"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="ml-2">Confirm Password</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Confirm Password"
                        type="password"
                        {...field}
                        className="p-4 shadow-shadowSmall border-2 rounded-3xl"
                      />
                    </FormControl>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="agreeToTerms"
                render={({ field }) => (
                  <FormItem className="items-top flex space-x-2">
                    <input
                      type="checkbox"
                      {...field}
                      id={field.name}
                      className="self-start mt-2 ml-2"
                    />
                    <div className="grid gap-1.5 leading-none">
                      <FormLabel
                        htmlFor={field.name}
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Accept terms and conditions
                      </FormLabel>
                      <p className="text-sm text-muted-foreground">
                        You agree to our Terms of Service and Privacy Policy.
                      </p>
                    </div>
                  </FormItem>
                )}
              />
              <FormMessage />
              <Button variant={"green"} className="w-full">
                Join
              </Button>
              <p className="text-center text-muted-foreground">
                Already a member
                <Link href="/login" className="ml-1 text-black">
                  Log in
                </Link>
              </p>
            </div>
          </form>
        </Form>
      </div>
    </MaxLimitWrapper>
  );
}

export default Register;
