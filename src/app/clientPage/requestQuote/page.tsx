'use client';
import React, {
  useEffect,
  useState,
  ChangeEventHandler,
  MouseEventHandler,
} from 'react';
import { Session } from 'next-auth';
import toast from 'react-hot-toast';
import { useSession } from 'next-auth/react';

type DataProps = {
  data: Session;
};

export default function QuoteForm({ data }: DataProps) {
  const { data: session, status } = useSession({
    required: true,
    onUnauthenticated() {
      // Redirect or show an error message to the user
      return;
    },
  });

  useEffect(() => {
    toast.success('Welcome!');
  }, []);

  if (
    status !== 'authenticated' ||
    (session && session.user.role !== 'client')
  ) {
    // Check if the user is not authenticated or not a client
    // You can handle this case here, such as showing an error message or redirecting the user
    return <div>You must be logged in as a client to access this feature.</div>;
  }

  const [userData, setUserdata] = useState({
    email: data.user.email,
    status: status,
    address1: '',
    address2: '',
    city: '',
    state: '',
    zipcode: '',
    gallonsRequested: '',
    deliveryDate: '',
    hashistory: '',
    suggestedPrice: '',
    totalPrice: '', // Use a default value here
  });

  // Fetch address
  const fetchAddress = () => {
    if (status !== 'authenticated') {
      // User is not authenticated, don't make the request
      return;
    }

    fetch(`http://localhost:8000/api/fillQuote/${data.user.id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Request failed with status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        if (data) {
          setUserdata({
            ...userData,
            address1: data.address1,
            address2: data.address2,
            city: data.city,
            state: data.state,
            zipcode: data.zipcode,
            hashistory: data.hashistory,
          });
          console.log('Fetch address successfully ');
        } else {
          console.error('Data not found in response');
        }
      });
  };

  useEffect(() => {
    fetchAddress();
  }, [status]); // Rerun when the authentication status changes

  // Pricing module
  const calculateTotalPrice: ChangeEventHandler<HTMLInputElement> = (e) => {
    e.preventDefault();

    if (status !== 'authenticated') {
      // User is not authenticated, don't calculate the price
      return;
    }

    const gallons = parseFloat(e.target.value);
    const state = userData.state;
    let currentPrice = 1.5;
    const locationfactor = state === 'TX' ? 0.02 : 0.04;
    const ratehistoryfactor = userData.hashistory === '1' ? 0.01 : 0.0;
    const gallonsRequestedfactor = gallons > 1000 ? 0.02 : 0.03;
    const companyProfitfactor = 0.1;

    const margin =
      currentPrice *
      (locationfactor -
        ratehistoryfactor +
        gallonsRequestedfactor +
        companyProfitfactor);
    const suggestedPrice = currentPrice + margin;

    if (!isNaN(gallons) && !isNaN(suggestedPrice)) {
      const total = gallons * suggestedPrice;

      setUserdata({
        ...userData,
        gallonsRequested: e.target.value,
        suggestedPrice: suggestedPrice.toFixed(2).toString(),
        totalPrice: total.toFixed(2).toString(),
      });

      return total.toString(); // Return the calculated total
    } else {
      console.error('Gallons or suggestedPrice is not a valid number');
      setUserdata({ ...userData, totalPrice: '0' });
      return '0'; // Return a default value, or you can choose to return null or handle the error differently.
    }
  };

  // Handle requestQuote submission
  const handleQuoteRequested: MouseEventHandler<HTMLButtonElement> = async (
    e,
  ) => {
    e.preventDefault();

    if (status !== 'authenticated') {
      // User is not authenticated, don't make the request
      return;
    }

    // Check if any of the required fields are empty
    if (
      userData.gallonsRequested.trim() === '' ||
      userData.deliveryDate.trim() === ''
    ) {
      // Show an error message or perform the desired action
      toast.error('Please fill in all required fields.');
      return;
    }

    const res = await fetch(
      `http://localhost:8000/api/addQuote/${data.user.id}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      },
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Request failed with status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        toast.success('Requested quote successfully');
        console.log('Requested quote successfully ', data);
        setUserdata({
          ...userData,
          gallonsRequested: '',
          deliveryDate: '',
          suggestedPrice: '',
          totalPrice: '',
        });
      })
      .catch((error) => {
        toast.error('Request quote failed');
        console.error('Request quote failed ', error);
      });
  };

  return (
    <section className="flex flex-col items-center justify-center pt-32">
      <h1 className="text-3xl font-semibold uppercase tracking-widest text-white">
        Request Fuel Quote
      </h1>

      <form className="relative mx-auto mt-8 flex w-80 flex-col space-y-2">
        <input
          type="number"
          id="gallons"
          placeholder="Gallons"
          name="gallons"
          className="input-field [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
          required
          onChange={(e) => calculateTotalPrice(e)} // Populate value from state
        />

        {/* Address, City, and State */}
        <p className="pre-filled">{userData.address1}</p>
        <p className="pre-filled">{userData.address2}</p>
        <div className="flex flex-row space-x-2">
          <p className="pre-filled">{userData.city}</p>
          <p className="pre-filled w-fit">{userData.state}</p>
          <p className="pre-filled">{userData.zipcode}</p>
        </div>

        {/* Delivery and Pricing */}
        <input
          type="date"
          id="deliveryDate"
          placeholder="Delivery Date"
          name="deliveryDate"
          className="input-field w-full uppercase"
          required
          onChange={({ target }) =>
            setUserdata({ ...userData, deliveryDate: target.value })
          }
        />
        <p className="pre-filled">$ {userData.suggestedPrice}</p>
        <p className="pre-filled">$ {userData.totalPrice}</p>
      </form>
      <button onClick={handleQuoteRequested} className="butoon mt-2 w-80">
        Get Quote
      </button>
    </section>
  );
}
