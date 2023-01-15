import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import "../app/globals.css";
import { Roboto } from "@next/font/google";
import { useRouter } from "next/router";
import Link from "next/link";
import { AuthContext } from '../context/AuthContext';

function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const router = useRouter();
  const [error, setError] = useState(false);
  const userData = useContext(AuthContext);
  if (userData.isLoading) return (<div></div>);
  if (userData.user) {
    router.replace('/landingPage');
  }


  const onSubmit = async (data) => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );
      auth.currentUser = userCredential.user;
      console.log(userCredential);
      if (userCredential.user) {
        errors.invalid = false;
        router.push("/landingPage");
      }
    } catch (error) {
      setError("Invalid username or password!");
      console.error(error);
    }
  };

  return (
    <div
      className={`flex bg-bgimg bg-cover justify-center items-center h-[100vh] `}
    >
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="p-6 rounded-lg bg-gradient-to-br from-[rgba(63,81,181,.4)] to-indigo-400 w-3/4 md:w-1/2 lg:2/3"
      >
        <h2 className="text-lg font-medium mb-4 text-white">Login</h2>
        <div className="mb-4">
          <label className="block text-white font-medium mb-2">Email</label>
          <input
            {...register("email", { required: true })}
            className={`w-full border border-gray-400 p-2 rounded-lg ${errors.email ? "border-red-500" : ""
              }`}
          />
          {errors.email && (
            <p className="text-red-500 text-xs">Email is required</p>
          )}
        </div>
        <div className="mb-4">
          <label className="block text-white font-medium mb-2">Password</label>
          <input
            type="password"
            {...register("password", { required: true })}
            className={`w-full border border-gray-400 p-2 rounded-lg ${errors.password ? "border-red-500" : ""
              }`}
          />
          {errors.password && (
            <p className="text-red-500 text-xs">Password is required</p>
          )}
          {error && <p className="text-red-300">{error}</p>}
        </div>
        <div className="flex justify-end text-white">
          <Link href="/signUp" className="grow text-end">
            New User? Sign Up.
          </Link>
        </div>
        <div className="flex flex-col justify-center items-center mt-4">
          <button className="bg-indigo-600 text-white drop-shadow-2xl p-2 rounded-lg hover:bg-indigo-800">
            Sign In
          </button>
        </div>
      </form>
    </div>
  );
}

export default LoginPage;
