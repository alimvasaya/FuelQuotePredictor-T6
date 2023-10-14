"use client";
import React, { FormEventHandler } from "react";
import { useUser } from "../context/UserContext";
import toast from "react-hot-toast/headless";
import SignInputField from "./SignInputField";

type SignInFormProps = {
  localHost: string;
  clickLogInAnim: () => void;
};

export default function RegisterForm({
  localHost,
  clickLogInAnim,
}: SignInFormProps) {
  const { userCred, updateUserEmail, updateUserPassword } = useUser();

  // Handle Register Submission
  const handleSignUpSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();

    const res = await fetch(`${localHost}/api/signUp`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userCred),
    })
      .then(() => {
        toast.success("Successfully registered");
        return clickLogInAnim();
      })
      .catch(() => toast.error("Registration failed"));
  };

  return (
    <section>
      <h1 className="text-2xl font-semibold text-white">SIGN UP</h1>

      <form
        onSubmit={handleSignUpSubmit}
        className="mx-auto mt-10 flex w-fit flex-col space-y-2"
      >
        <SignInputField
          updateUserEmail={updateUserEmail}
          updateUserPassword={updateUserPassword}
        />
        <button type="submit" className="butoon">
          Submit
        </button>
      </form>

      <div className="mt-4">
        <span className="font-light text-white">
          Already have an account?{" "}
          <a
            href="#"
            onClick={clickLogInAnim}
            className="font-semibold hover:underline"
          >
            Log In
          </a>
        </span>
      </div>
    </section>
  );
}
