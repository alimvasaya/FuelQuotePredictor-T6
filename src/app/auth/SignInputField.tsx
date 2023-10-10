import React from "react";

type Props = {
  updateUserEmail: (email: string) => void;
  updateUserPassword: (Password: string) => void;
};

export default function SignInputField({
  updateUserEmail,
  updateUserPassword,
}: Props) {
  return (
    <div className="flex flex-col space-y-2">
      <input
        onChange={({ target }) => updateUserEmail(target.value)}
        type="email"
        placeholder="Email"
        name="email"
        className="input-field"
        required
      />
      <input
        onChange={({ target }) => updateUserPassword(target.value)}
        type="password"
        placeholder="Password"
        name="password"
        className="input-field"
        required
      />
    </div>
  );
}
