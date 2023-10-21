'use client';
import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { Session } from 'next-auth';

type DataProps = {
  data: Session;
  clickEditAnim: () => void;
};

export default function Profile({ data, clickEditAnim }: DataProps) {
  const [userProfile, setUserProfile] = useState({
    email: data.user.email,
    name: '',
    address1: '',
    city: '',
    state: '',
    zipcode: '',
    address2: '',
  });

  const fetchUserProfile = () => {
    fetch('http://localhost:8000/api/viewProfile', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email: data.user.email }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setUserProfile(data);
      })
      .catch((error) => {
        console.error('Fetch user profile failed ', error);
      });
  };

  useEffect(() => {
    fetchUserProfile();
  }, [userProfile]);

  return (
    <div className="flex flex-col items-center justify-center space-y-8 pt-32">
      <h1 className="text-3xl font-semibold uppercase tracking-widest text-white">
        Profile
      </h1>

      <FontAwesomeIcon
        icon={faUser}
        style={{ color: '#6366f1' }}
        className="mx-auto h-36 w-36"
      />

      {/* Addresses, City, State, and Zipcode */}
      <div className="relative mx-auto flex w-80 flex-col space-y-2">
        <p className="pre-filled">{userProfile.email}</p>
        <p className="pre-filled">{userProfile.name}</p>
        <p className="pre-filled">{userProfile.address1}</p>
        <p className="pre-filled">{userProfile.city}</p>
        <div className="flex space-x-2">
          <p className="pre-filled w-full">{userProfile.state}</p>
          <p className="pre-filled w-full">{userProfile.zipcode}</p>
        </div>

        <p className="pre-filled">{userProfile.address2}</p>

        <button onClick={clickEditAnim} className="butoon w-full">
          Edit
        </button>
      </div>
    </div>
  );
}
