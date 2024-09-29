import React from "react";
import { useForm } from "react-hook-form"
import { Link } from "react-router-dom";
function Login (){
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => console.log(data)
  return(
    <>
    <dialog id="my_modal_3" className="modal">
    <div className="modal-box">
    <form onSubmit={handleSubmit(onSubmit)} method="">
    {/* if there is a button in form, it will close the modal */}
    <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
    onClick={() => document.getElementById("my_modal_3").close()}>✕</Link>
    
    <h3 className="font-bold text-lg">Login</h3>
    <div className="mt-4 space-y-2">
        <span>Email</span><br/>
        <input type="email" placeholder="Enter your email" className="w-80 px-3 py-1 border rounded-md outline-none"
        {...register("email", { required: true })}></input>
        <br />
        {errors.email && (
        <span className="text-sm text-red-500">This field is required</span>
        )}
    </div>
    <div className="mt-4 space-y-2">
        <span>Password</span><br/>
        <input type="password" placeholder="Enter your password" className="w-80 px-3 py-1 border rounded-md outline-none"
        {...register("password", { required: true })}></input>
        <br />
        {errors.password && (
        <span className="text-sm text-red-500">This field is required</span>
        )}
    </div>
    <div className="flex justify-around mt-4">
        <button type="submit" className="bg-purple-300 px-3 py-1 hover:bg-purple-400 rounded-md">Login</button>
        <p>
            Not registered? <Link to="/signup" className="underline text-violet-500 cursor-pointer">Signup</Link>
        </p>
    </div>
    </form>
    </div>
    </dialog>
    </>
  )
}

export default Login;