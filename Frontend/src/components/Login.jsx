import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Login Data:", data);
  };

  return (
    <dialog id="my_modal_3" className="modal">
      <div className="modal-box relative">

        {/* Close button */}
        <button
          type="button"
          className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2
                     focus:outline-none focus:ring-0 focus:ring-offset-0"
          onClick={() => document.getElementById("my_modal_3").close()}
        >
          ✕
        </button>

        <h3 className="font-bold text-xl text-center">Login</h3>

        {/* REAL FORM */}
        <form onSubmit={handleSubmit(onSubmit)} className="mt-6 space-y-5">

          {/* Email */}
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-3 py-2 border rounded-md outline-none
                         focus:ring-2 focus:ring-pink-400"
              {...register("email", { required: "Email is required" })}
            />
            {errors.email && (
              <span className="text-red-500 text-sm">
                {errors.email.message}
              </span>
            )}
          </div>

          {/* Password */}
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full px-3 py-2 border rounded-md outline-none
                         focus:ring-2 focus:ring-pink-400"
              {...register("password", { required: "Password is required" })}
            />
            {errors.password && (
              <span className="text-red-500 text-sm">
                {errors.password.message}
              </span>
            )}
          </div>

          {/* Actions */}
          <div className="flex items-center justify-between pt-2">
            <button
              type="submit"
              className="bg-pink-500 text-white px-5 py-2 rounded-md
                         hover:bg-pink-600 transition"
            >
              Login
            </button>

            <p className="text-sm">
              Not registered?{" "}
              <Link
                to="/signup"
                className="underline text-blue-500 cursor-pointer"
              >
                Signup
              </Link>
            </p>
          </div>
        </form>
      </div>
    </dialog>
  );
};

export default Login;
