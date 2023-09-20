// Complete profile input form upon signing up

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";

type Props = {};

export default function ProfileForm({}: Props) {
  return (
    <div className="flex flex-col items-center justify-center space-y-8 pt-32">
      <h1 className="text-3xl font-semibold uppercase tracking-widest text-white">
        Edit Profile
      </h1>

      <FontAwesomeIcon
        icon={faUser}
        style={{ color: "#6366f1" }}
        className="relative mx-auto h-36 w-36"
      />

      <form className="relative mx-auto flex w-80 flex-col space-y-2">
        <input
          type="text"
          id="name"
          placeholder="Full name"
          name="name"
          className="input-field"
        />

        {/* Addresses, City, State, and Zipcode */}
        <input
          type="text"
          id="address1"
          placeholder="Address 1"
          name="address1"
          className="input-field"
        />
        <input
          type="text"
          id="city"
          placeholder="City"
          name="city"
          className="input-field"
        />
        <div className="flex space-x-2">
          <input
            type="text"
            id="state"
            placeholder="State"
            name="state"
            className="input-field w-full"
            list="stateOptions"
          />
          <datalist id="stateOptions">
            <option value=""></option>
            <option value="AL">Alabama</option>
            <option value="AK">Alaska</option>
            <option value="AZ">Arizona</option>
            <option value="AR">Arkansas</option>
            <option value="CA">California</option>
            <option value="CO">Colorado</option>
            <option value="CT">Connecticut</option>
            <option value="DE">Delaware</option>
            <option value="FL">Florida</option>
            <option value="GA">Georgia</option>
            <option value="HI">Hawaii</option>
            <option value="ID">Idaho</option>
            <option value="IL">Illinois</option>
            <option value="IN">Indiana</option>
            <option value="IA">Iowa</option>
            <option value="KS">Kansas</option>
            <option value="KY">Kentucky</option>
            <option value="LA">Louisiana</option>
            <option value="ME">Maine</option>
            <option value="MD">Maryland</option>
            <option value="MA">Massachusetts</option>
            <option value="MI">Michigan</option>
            <option value="MN">Minnesota</option>
            <option value="MS">Mississippi</option>
            <option value="MO">Missouri</option>
            <option value="MT">Montana</option>
            <option value="NE">Nebraska</option>
            <option value="NV">Nevada</option>
            <option value="NH">New Hampshire</option>
            <option value="NJ">New Jersey</option>
            <option value="NM">New Mexico</option>
            <option value="NY">New York</option>
            <option value="NC">North Carolina</option>
            <option value="ND">North Dakota</option>
            <option value="OH">Ohio</option>
            <option value="OK">Oklahoma</option>
            <option value="OR">Oregon</option>
            <option value="PA">Pennsylvania</option>
            <option value="RI">Rhode Island</option>
            <option value="SC">South Carolina</option>
            <option value="SD">South Dakota</option>
            <option value="TN">Tennessee</option>
            <option value="TX">Texas</option>
            <option value="UT">Utah</option>
            <option value="VT">Vermont</option>
            <option value="VA">Virginia</option>
            <option value="WA">Washington</option>
            <option value="WV">West Virginia</option>
            <option value="WI">Wisconsin</option>
            <option value="WY">Wyoming</option>
          </datalist>

          <input
            type="number"
            id="zipcode"
            placeholder="Zipcode"
            name="zipcode"
            className="input-field w-full [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none
            [&::-webkit-outer-spin-button]:appearance-none"
          />
        </div>

        <input
          type="text"
          id="address2"
          placeholder="Address 2 (Optional)"
          name="address2"
          className="input-field"
        />

        <button
          className="w-full rounded-full bg-indigo-500/50 px-6 py-2 text-sm uppercase
          tracking-widest text-white transition-colors hover:bg-indigo-500/60"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
