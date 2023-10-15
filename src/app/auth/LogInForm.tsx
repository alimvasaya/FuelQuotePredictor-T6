"use client";
import React, { FormEventHandler } from "react";
import { signIn, useSession } from "next-auth/react";
import { useUser } from "../context/UserContext";
import toast from "react-hot-toast";
import SignInputField from "./SignInputField";

type SignInFormProps = {
  clickRegisterAnim: () => void;
};

export default function LogInForm({
  clickRegisterAnim: clickSignUpAnim,
}: SignInFormProps) {
  const { userCred, updateUserEmail, updateUserPassword } = useUser();
  const session = useSession();

  // Handle SignIn Submission
  const handleLogInSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();

    const res = await signIn("credentials", {
      email: userCred.email,
      password: userCred.password,
      redirect: true,
    }).then((callback) => {
      if (callback?.error) {
        toast.error(callback?.error);
      }
      if (callback?.ok && !callback.error) {
        toast.success("Logged in successfully");
        if (session?.data?.user.role === "client") {
          callback.url = "http://localhost:3000/Client";
        } else if (session?.data?.user.role === "admin") {
          callback.url = "http://localhost:3000/Admin";
        }
      }
    });
  };

  return (
    <section>
      <h1 className="text-2xl font-semibold text-white">LOG IN</h1>

      <form
        onSubmit={handleLogInSubmit}
        className="mx-auto mt-10 flex w-fit flex-col space-y-2"
      >
        <SignInputField
          updateUserEmail={updateUserEmail}
          updateUserPassword={updateUserPassword}
        />
        <button type="submit" className="butoon mt-2 w-full">
          Submit
        </button>
      </form>

      {/* <div className="mt-4">
        <span className="font-light text-white">
          <a href="#" className="italic hover:underline">
            Forgot password?
          </a>
        </span>
      </div> */}

      <div className="mt-2">
        <span className="font-light text-white">
          Don't have an account?{" "}
          <a
            href="#"
            onClick={clickSignUpAnim}
            className="font-semibold hover:underline"
          >
            Sign Up
          </a>
        </span>
      </div>
    </section>
  );
}
