// View profile read only

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";

type ProfileData = {
  fullName: string;
  address1: string;
  city: string;
  state: string;
  zipcode: number;
  address2: string;
};

export default function Profile({
  fullName,
  address1,
  city,
  state,
  zipcode,
  address2,
}: ProfileData) {
  const dummyProfile = {
    fullName: "First Last",
    address1: "1234 addy dr",
    city: "city",
    state: "TX",
    zipcode: 12345,
    address2: "none",
  };

  return (
    <div className="flex flex-col items-center justify-center space-y-8 pt-32">
      <h1 className="text-3xl font-semibold uppercase tracking-widest text-white">
        Profile
      </h1>

      <FontAwesomeIcon
        icon={faUser}
        style={{ color: "#6366f1" }}
        className="relative mx-auto h-36 w-36 rounded-full border-8 border-indigo-500 object-cover"
      />

      {/* Addresses, City, State, and Zipcode */}
      <div className="relative mx-auto flex w-80 flex-col space-y-2 text-white">
        <p className="profile-field">{dummyProfile.fullName}</p>
        <p className="profile-field">{dummyProfile.address1}</p>
        <p className="profile-field">{dummyProfile.city}</p>
        <div className="flex space-x-2">
          <p className="profile-field w-full">{dummyProfile.state}</p>
          <p className="profile-field w-full">{dummyProfile.zipcode}</p>
        </div>

        <p className="profile-field">{dummyProfile.address2}</p>

        <button
          className="rounded-full bg-indigo-500/50 px-6 py-2 text-sm uppercase tracking-widest
          text-white transition-colors hover:bg-indigo-500/60"
        >
          Edit
        </button>
      </div>
    </div>
  );
}
