import { Link, Navigate } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import {  useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createUserAsync, loginUserAsync } from "../features/product-list/productListSlice";

export default function SignupPage() {
  const [customError, setCumstomError] = useState(false);
  const loginUser = useSelector(state => state.product.loggedInUser);
  const dispatch = useDispatch();
 
  const {
    register, handleSubmit, watch, formState: { errors }, getValues,reset } = useForm();

  const onSubmit = (data) => {
    console.log('data', data)
    dispatch(createUserAsync(data))
    dispatch(loginUserAsync(data))

    reset();
    setCumstomError(true);
  }
 
  console.log(loginUser)
  return (
    <>
 {loginUser[0]?.email ? <Navigate to={'/'} replace={true}></Navigate>
      :
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">

          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            SignUp to create your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" noValidate onSubmit={handleSubmit(onSubmit)}>
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  {...register("email", {
                    required: 'email is required', pattern: {
                      value: /^([\w\.\-_]+)?\w+@[\w-_]+(\.\w+){1,}$/,
                      message: 'email not match'
                    }
                  })}
                  type="email"

                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pl-2"
                />
                {errors.email && <span className="text-red-500">At list 8 char, must contain numbers \n email should unique</span>}

              </div>
            </div>

            <div >
              <div className="flex items-center justify-between ">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                  Password
                </label>

              </div>
              <div className="mt-2">
                <input
                  id="password"
                  {...register("password", {
                    required: 'email is required', pattern: {
                      value: /^(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).*$/,
                      message: 'password not match'
                    }
                  })}
                  type="password"

                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pl-2"
                />
                {errors.password && <span className="text-red-500">Password should be at least one capital letter, one small letter, one number and 8 character length</span>}

              </div>
            </div>
            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="Re-password" className="block text-sm font-medium leading-6 text-gray-900">
                  Confirm Password
                </label>

              </div>
              <div className="mt-2">
                <input
                  id="checkPassword"
                  {...register("checkPassword", {
                    required: 'email is required', pattern: {
                      value: /^(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).*$/,
                      message: 'password not match'
                    },
                    validate: (value, formValues) => value === formValues.password || 'password not match'
                  })}
                  type="password"

                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pl-2"
                />
                {errors.checkPassword && <span className="text-red-500">Password not match</span>}
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign Up
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Already a member ?{' '}
            <Link to={'/login'} className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
              Click here to Login !
            </Link>
          </p>
        </div>
      </div>
}
    </>
  )
}
