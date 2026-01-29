import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import Login from "./Login";
import axios from 'axios'
import toast from "react-hot-toast";

const Signup = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const from = location.state?.from?.pathname || "/";
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit =async (data) => {
    const userInfo={
        fullname:data.fullname,
        email:data.email,
        password:data.password,
    }
    await axios.post("http://localhost:4001/user/signup",userInfo)
    .then((res)=>{
      console.log(res.data);
      if(res.data){
         toast.success("Signup Successfull");
         navigate(from,{replace:true});
      }
      localStorage.setItem("Users",JSON.stringify(res.data.user))
  })
      .catch((err)=>{
       if(err.response){
         console.log(err);
        toast.error("Error: "+ err.response.data.message);
       }
      })
  };

  return (
    <div className="flex h-screen items-center justify-center">
      <div className="border rounded-md p-5 shadow-xl/30">
        <div className="relative">

          <Link
            to="/"
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2
                       focus:outline-none focus:ring-0 focus:ring-offset-0"
          >
            ✕
          </Link>

          <h3 className="font-bold text-xl text-center">Signup</h3>

          <form onSubmit={handleSubmit(onSubmit)} className="mt-6 space-y-5">

            {/* Name */}
            <div className="flex flex-col gap-1">
              <label className="text-sm font-medium">Name</label>
              <input
                type="text"
                placeholder="Enter your Name"
                className="w-full px-3 py-2 border rounded-md outline-none"
                {...register("fullname", { required: true })}
              />
              {errors.fullname && (
                <span className="text-red-500 text-sm">Name is required</span>
              )}
            </div>

            {/* Email */}
            <div className="flex flex-col gap-1">
              <label className="text-sm font-medium">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-3 py-2 border rounded-md outline-none"
                {...register("email", { required: true })}
              />
              {errors.email && (
                <span className="text-red-500 text-sm">Email is required</span>
              )}
            </div>

            {/* Password */}
            <div className="flex flex-col gap-1">
              <label className="text-sm font-medium">Password</label>
              <input
                type="password"
                placeholder="Enter your password"
                className="w-full px-3 py-2 border rounded-md outline-none"
                {...register("password", { required: true })}
              />
              {errors.password && (
                <span className="text-red-500 text-sm">Password is required</span>
              )}
            </div>

            <div className="flex items-center justify-between pt-2">
              <button
                type="submit"
                className="bg-pink-500 text-white px-5 py-2 rounded-md"
              >
                Signup
              </button>

              <p className="text-sm ml-3">
                Already have an account?{" "}
                <button
                  type="button"
                  onClick={() =>
                    document.getElementById("my_modal_3").showModal()
                  }
                  className="underline text-blue-500 cursor-pointer"
                >
                  Login
                </button>
                <Login />
              </p>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
