"use client";
import React, { useState } from "react";
import axios from "axios";
// import { useRouter } from "next/router";
import { cva } from "class-variance-authority";
import { Button } from "../components/ui/button";

const inputStyles = cva(
  "border p-2 rounded focus:outline-none focus:border-blue-500",
  {
    variants: {
      error: {
        true: "border-red-500",
        false: "border-gray-300",
      },
    },
    defaultVariants: {
      error: false,
    },
  }
);

export default function Register() {
  const [formData, setFormData] = useState({
    name: "",
    username: "",
    address: "",
    email: "",
    password: "",
  });

  const [message, setMessage] = useState("");
  const [error, setError] = useState(false);

  // const router = useRouter();

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/users", formData);
      setMessage("Registration successful: " + response.data.message);
      setError(false);
      // router.push("/welcome");
    } catch (error: any) {
      setMessage("Registration failed: " + error.response.data.error);
      setError(true);
    }
  };

  return (
    <div
      style={{
        width: "600px",
        border: "2px solid green",
        marginTop: "100px",
        position: "absolute",
        left: "50%",
      }}
    >
      <h1>Register New User</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          className={inputStyles({ error })}
          required
        />
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={formData.username}
          onChange={handleChange}
          className={inputStyles({ error })}
          required
        />
        <input
          type="text"
          name="address"
          placeholder="Address"
          value={formData.address}
          onChange={handleChange}
          className={inputStyles({ error })}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className={inputStyles({ error })}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          className={inputStyles({ error })}
          required
        />
        <Button
          style={{
            border: "2px solid green",
            padding: "10px",
            marginTop: "10px",
          }}
          type="submit"
        >
          Register
        </Button>
      </form>
      <p>{message}</p>
    </div>
  );
}
