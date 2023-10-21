import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';

type Props = {};

export default function Profile({}: Props) {
  return (
    <div className="flex flex-col items-center justify-center space-y-8 pt-32">
      <h1 className="text-3xl font-semibold uppercase tracking-widest text-white">
        Complete Profile
      </h1>

      <FontAwesomeIcon
        icon={faUser}
        style={{ color: '#6366f1' }}
        className="relative mx-auto h-36 w-36 rounded-full border-8 
          border-indigo-500 object-cover"
      />

      <form className="relative mx-auto flex w-80 flex-col space-y-2">
        <input type="text" placeholder="Full name" className="input-field" />

        {/* Addresses, City, State, and Zipcode */}
        <input type="text" placeholder="Address 1" className="input-field" />
        <div className="flex space-x-2">
          <input
            type="text"
            placeholder="City"
            className="input-field w-full"
          />
          <input
            type="text"
            placeholder="State"
            className="input-field w-full"
          />
        </div>
        <input
          type="number"
          placeholder="Zipcode"
          className="input-field [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none
          [&::-webkit-outer-spin-button]:appearance-none"
        />
        <input
          type="text"
          placeholder="Address 2 (Optional)"
          className="input-field"
        />

        <button
          className="rounded-full border-indigo-500/50 bg-indigo-500/50 px-6 py-2 text-sm
            uppercase tracking-widest text-white transition-colors hover:border-indigo-500
            hover:bg-indigo-500"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
