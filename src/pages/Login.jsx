import React from 'react';
import { NavLink } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { Toaster, toast } from "react-hot-toast";
const Login = () => {
  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const showToast = () => {
    toast.success("Login sucessful!");
  };
  const onsubmit=()=>{
    showToast();
  }
  return (
    <div className="h-[calc(100vh-80px)] flex dark:bg-gray-800">
       <Toaster position="top-right" />
      <div className="hidden md:flex md:w-1/2 rounded-xl overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1559056961-1f4dbbf9d36a?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Login Visual"
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="flex flex-col w-full md:w-1/2 items-center justify-center p-8 bg-white dark:bg-gray-900">
        <div className="w-full max-w-md">
          <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-100">
            Welcome back
          </h1>
          <p className="mt-2 text-sm text-gray-500 dark:text-gray-300">
            Login to your Dummy Inc account
          </p>
          
          <form className="mt-6 space-y-6" onSubmit={handleSubmit(onsubmit)}>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Email
              </label>
              <input
                type="email"
                id="email" {...register("email", { required: "Email is required" })}
                placeholder="Enter your email"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
                {errors.email && <p className="text-red-500">{errors.email.message}</p>}
            </div>
            
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Password
              </label>
              <input
                type="password"
                id="password" {...register("password", { required: "Password is required" })}
                placeholder="Enter your password"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
              {errors.password && <p className="text-red-500">{errors.password.message}</p>}
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember"
                  type="checkbox"
                  className="h-4 w-4 text-blue-600 border-gray-300 rounded dark:bg-gray-800 dark:border-gray-700"
                />
                <label
                  htmlFor="remember"
                  className="ml-2 block text-sm text-gray-900 dark:text-gray-300"
                >
                  Remember me
                </label>
              </div>
              <a href="#" className="text-sm text-blue-600 hover:underline">
                Forgot your password?
              </a>
            </div>
            
            <button
              type="submit"
              className="w-full py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-150"
            >
              Login
            </button>
          </form>
          
          <div className="mt-6">
            <p className="text-sm text-gray-500 dark:text-gray-300 text-center">
              Or continue with
            </p>
            <div className="mt-4 flex space-x-2">
              <button className="flex-1 py-2 px-4 border dark:text-gray-100 border-gray-300 dark:border-gray-700 rounded hover:bg-gray-100 dark:hover:bg-gray-700 transition">
               Apple
              </button>
              <button className="flex-1 py-2 px-4 border dark:text-gray-100 border-gray-300 dark:border-gray-700 rounded hover:bg-gray-100 dark:hover:bg-gray-700 transition">
                Google
              </button>
              <button className="flex-1 py-2 px-4 border dark:text-gray-100 border-gray-300 dark:border-gray-700 rounded hover:bg-gray-100 dark:hover:bg-gray-700 transition">
                Meta
              </button>
            </div>
          </div>
          
          <p className="mt-6 text-sm text-gray-500 dark:text-gray-300 text-center">
            Don't have an account?{' '}
            <NavLink to="/signup" className="text-blue-600 hover:underline">
              Sign up
            </NavLink>
          </p>
          
          <p className="mt-2 text-xs text-gray-400 dark:text-gray-500 text-center">
            By clicking continue, you agree to our{' '}
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

export default Login;
