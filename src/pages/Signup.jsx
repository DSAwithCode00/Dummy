import React from 'react';
import { NavLink } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { Toaster, toast } from "react-hot-toast";
const Signup = () => {
     const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
      const onsubmit=()=>{
        toast.success("Signup sucessful!")
      }
    return (
        <div className="h-[calc(100vh-80px)] flex dark:bg-gray-800">
            <Toaster position="top-right" />
            <div className="hidden md:flex md:w-1/2 rounded-xl md:overflow-hidden">
                <img
                    src="https://images.unsplash.com/photo-1493723843671-1d655e66ac1c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Signup Visual"
                    className="w-full h-full object-cover "
                />
            </div>
            <div className="flex flex-col w-full md:w-1/2 items-center justify-center p-8 bg-white dark:bg-gray-900">
                <div className="w-full max-w-md">
                    <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
                        Create an account
                    </h1>
                    <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                        Join us by creating a new account.
                    </p>

                    <form className="mt-6 space-y-6"onSubmit={handleSubmit(onsubmit)}>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                Full Name
                            </label>
                            <input
                                type="text"
                                id="full-name"
                                {...register("email", { required: "Name is required" })}
                                
                                placeholder="John Doe"
                                className="mt-1 block w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-600"
                            />{errors.email && <p className="text-red-500">{errors.email.message}</p>}
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                {...register("email", { required: "Email is required" })}
                                placeholder="you@example.com"
                                className="mt-1 block w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-600"
                            /> {errors.email && <p className="text-red-500">{errors.email.message}</p>}
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                Password
                            </label>
                            <input
                                type="password"
                                placeholder="••••••••"
                                id="password" {...register("password", { required: "Password is required" })}
                                className="mt-1 block w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-600"
                            />
                             {errors.password && <p className="text-red-500">{errors.password.message}</p>}
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                Confirm Password
                            </label>
                            <input
                                type="password"
                                placeholder="••••••••"
                                id="confirmed" {...register("confirmed", { required: "Invalid password" })}
                                className="mt-1 block w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-600"
                            /> {errors.password && <p className="text-red-500">{errors.password.message}</p>}
                        </div>

                        <button
                            type="submit"
                            className="w-full py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-150"
                        >
                            Sign Up
                        </button>
                    </form>

                    <p className="mt-6 text-sm text-gray-500 dark:text-gray-300 text-center">
                        Already have an account?{' '}
                        <NavLink to="/login" className="text-blue-600 hover:underline">
                            Log in
                        </NavLink>
                    </p>

                    <p className="mt-2 text-xs text-gray-400 dark:text-gray-500 text-center">
                        By signing up, you agree to our{' '}
                        <a href="#" className="hover:underline">
                            Terms of Service
                        </a>{' '}
                        and{' '}
                        <a href="#" className="hover:underline">
                            Privacy Policy
                        </a>.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Signup;
