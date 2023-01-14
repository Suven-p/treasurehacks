import React from "react";
import { useForm } from "react-hook-form";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import "../app/globals.css";
import {Roboto} from '@next/'

function SignupPage() { 
  const { register, handleSubmit, formState: {errors} } = useForm();

  const onSubmit = async (data) => {
    try {
      const { email, password } = data;
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      console.log("Successfully created user!", userCredential);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex justify-center items-center h-[100vh]">
    <form onSubmit={handleSubmit(onSubmit)} className="p-6 rounded-lg bg-slate-500 min-w-[100px]">
      <h2 className="text-lg font-medium mb-4">Create an account</h2>
      <div className="mb-4">
        <label className="block text-white font-medium mb-2">
          Email
        </label>
        <input
          {...register('email', { required: true })}
          className={`w-full border border-gray-400 p-2 rounded-lg ${
            errors.email ? "border-red-500" : ""
          }`}
        />
        {errors.email && (
          <p className="text-red-500 text-xs">Email is required</p>
        )}
      </div>
      <div className="mb-4">
        <label className="block text-white font-medium mb-2">
          Password
        </label>
        <input
          {...register('password', { required: true })}
          className={`w-full border border-gray-400 p-2 rounded-lg ${
            errors.password ? "border-red-500" : ""
          }`}
        />
        {errors.password && (
          <p className="text-red-500 text-xs">Password is required</p>
        )}
      </div>
      <button className="bg-indigo-500 text-white p-2 rounded-lg hover:bg-indigo-600">
        Sign Up
      </button>
    </form>
    </div>
  );
}

export default SignupPage;
