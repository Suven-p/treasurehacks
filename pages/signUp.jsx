import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import "../app/globals.css";
import { Roboto } from "@next/font/google";
import Link from "next/link";

const roboto = Roboto({ subsets: ["latin"], weight: ["100", "300", "700"] });

function SignupPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [error, setError] = useState(false);

  const onSubmit = async (data) => {
    try {
      const { email, password } = data;
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      if (userCredential) {
        await signInWithEmailAndPassword(auth, email, password);
      }
      console.log("Successfully created user!", userCredential);
    } catch (error) {
      setError(error);
      console.error(error);
    }
  };

  return (
    <div
      className={`flex  bg-bgimg bg-cover justify-center items-center h-[100vh] `}
    >
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="p-6 rounded-lg bg-gradient-to-br from-[rgba(63,81,181,.3)] to-indigo-400 w-3/4 md:w-1/2 lg:2/3"
      >
        <h2 className="text-lg font-medium mb-4 text-white">
          Create an account
        </h2>
        <div className="mb-4">
          <label className="block text-white font-medium mb-2">Email</label>
          <input
            {...register("email", { required: true })}
            className={`w-full border border-gray-400 p-2 rounded-lg ${
              errors.email ? "border-red-500" : ""
            }`}
          />
          {errors.email && (
            <p className="text-red-500 text-xs">Email is required</p>
          )}
        </div>
        <div className="mb-4">
          <label className="block text-white font-medium mb-2">Password</label>
          <input
            {...register("password", { required: true })}
            type="password"
            className={`w-full border border-gray-400 p-2 rounded-lg ${
              errors.password ? "border-red-500" : ""
            }`}
          />
          {errors.password && (
            <p className="text-red-500 text-xs">Password is required</p>
          )}
        </div>
        <div className="flex justify-end text-white">
          <Link href="/login" className="grow text-end">
            Already An User? Sign In.
          </Link>
        </div>
        {error && <p className="text-red-500">{error.message}</p>}
        <div className="flex flex-col justify-center items-center">
          <button className="bg-indigo-600 text-white drop-shadow-2xl p-2 rounded-lg hover:bg-indigo-800">
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
}

export default SignupPage;
