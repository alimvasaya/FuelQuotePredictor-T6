'use client';
import React, { useState, MouseEventHandler } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { Session } from 'next-auth';
import toast from 'react-hot-toast';

type DataProps = {
  data: Session;
  clickViewAnim: () => void;
};

export default function ProfileForm({ data, clickViewAnim }: DataProps) {
  // Set user data from profile form
  const [userData, setUserData] = useState({
    email: data.user.email,
    name: '',
    address1: '',
    city: '',
    state: '',
    zipcode: '',
    address2: '',
  });

  // Handle requestQuote Submission
  const handleProfileEdit: MouseEventHandler<HTMLButtonElement> = async (e) => {
    e.preventDefault();

    const res = await fetch('http://localhost:8000/api/editProfile', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    })
      .then(() => {
        setUserData({
          ...userData,
          name: '',
          address1: '',
          city: '',
          state: '',
          zipcode: '',
          address2: '',
        });
        clearForm();
        toast.success('Requested profile edit successfully');
        return clickViewAnim();
      })
      .catch((error) => {
        toast.error('Profile edit failed');
        console.error('POST profile edit failed ', error);
      });
  };

  function clearForm() {
    const name = document.getElementById('name') as HTMLInputElement;
    const address1 = document.getElementById('address1') as HTMLInputElement;
    const city = document.getElementById('city') as HTMLInputElement;
    const state = document.getElementById('state') as HTMLInputElement;
    const zipcode = document.getElementById('zipcode') as HTMLInputElement;
    const address2 = document.getElementById('address2') as HTMLInputElement;

    name.value = '';
    address1.value = '';
    city.value = '';
    state.value = '';
    zipcode.value = '';
    address2.value = '';
  }

  return (
    <div className="flex flex-col items-center justify-center pt-32">
      <h1 className="text-3xl font-semibold uppercase tracking-widest text-white">
        Edit Profile
      </h1>

      <FontAwesomeIcon
        icon={faUser}
        style={{ color: '#6366f1' }}
        className="relative mx-auto mt-8 h-36 w-36"
      />

      <form className="relative mx-auto mt-8 flex w-80 flex-col space-y-2">
        <input
          onChange={({ target }) =>
            setUserData({ ...userData, name: target.value })
          }
          type="text"
          id="name"
          placeholder="Full name"
          name="name"
          className="input-field"
          required
        />

        {/* Addresses, City, State, and Zipcode */}
        <input
          onChange={({ target }) =>
            setUserData({ ...userData, address1: target.value })
          }
          type="text"
          id="address1"
          placeholder="Address 1"
          name="address1"
          className="input-field"
          required
        />
        <input
          onChange={({ target }) =>
            setUserData({ ...userData, city: target.value })
          }
          type="text"
          id="city"
          placeholder="City"
          name="city"
          className="input-field"
          required
        />
        <div className="flex space-x-2">
          <input
            onChange={({ target }) =>
              setUserData({ ...userData, state: target.value })
            }
            type="text"
            id="state"
            placeholder="State"
            name="state"
            className="input-field w-full"
            list="stateOptions"
            required
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
            onChange={({ target }) =>
              setUserData({ ...userData, zipcode: target.value.toString() })
            }
            type="text"
            id="zipcode"
            placeholder="Zipcode"
            name="zipcode"
            className="input-field w-full [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none
            [&::-webkit-outer-spin-button]:appearance-none"
            required
          />
        </div>

        <input
          onChange={({ target }) =>
            setUserData({ ...userData, address2: target.value })
          }
          type="text"
          id="address2"
          placeholder="Address 2 (Optional)"
          name="address2"
          className="input-field"
        />
      </form>
      <button onClick={handleProfileEdit} className="butoon mt-2 w-80">
        Submit
      </button>
    </div>
  );
}
