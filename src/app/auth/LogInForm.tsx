import React, { FormEventHandler } from "react";
import { signIn } from "next-auth/react";
import { useUser } from "../context/UserContext";
import SignInputField from "./SignInputField";

type SignInFormProps = {
  clickRegisterAnim: () => void;
};

export default function LogInForm({
  clickRegisterAnim: clickSignUpAnim,
}: SignInFormProps) {
  const { userCred, updateUserEmail, updateUserPassword } = useUser();

  // Handle SignIn Submission
  const handleLogInSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    const res = await signIn("credentials", {
      email: userCred.email,
      password: userCred.password,
      redirect: true,
    });
    console.log("Sign IN form: ", res);
  };

  return (
    <section>
      <h1 className="text-2xl font-semibold text-white">LOG IN</h1>

      <form
        className="mx-auto mt-10 flex w-fit flex-col space-y-2"
        onSubmit={handleLogInSubmit}
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
          <a href="#" className="italic hover:underline">
            Forgot password?
          </a>
        </span>
      </div>

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
