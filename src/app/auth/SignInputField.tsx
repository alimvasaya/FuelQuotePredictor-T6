import React from 'react';

type RefProps = {
  emailRef: React.LegacyRef<HTMLInputElement>;
  passRef: React.LegacyRef<HTMLInputElement>;
};

export default function SignInputField({ emailRef, passRef }: RefProps) {
  return (
    <div className="flex flex-col space-y-2">
      <input
        ref={emailRef}
        // onChange={({ target }) => updateUserEmail(target.value)}
        type="email"
        placeholder="Email"
        name="email"
        className="input-field"
        required
      />
      <input
        ref={passRef}
        // onChange={({ target }) => updateUserPassword(target.value)}
        type="password"
        placeholder="Password"
        name="password"
        className="input-field"
        required
      />

      <button className="butoon mt-2 w-full">Submit</button>
    </div>
  );
}
