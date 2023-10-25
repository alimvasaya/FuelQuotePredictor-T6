"use client";
import React, { 
  useEffect,
  useState,
  ChangeEventHandler,
  MouseEventHandler,
  use,
} from "react";
import { Session } from "next-auth";
import toast from "react-hot-toast";

type DataProps = {
  data: Session;
};

export default function QuoteForm({data}: DataProps) {
  const [userData, setUserdata] = useState({
    email:data.user.email,
    address1: "",
    address2: "",
    city: "",
    state: "",  
    zipcode: "",
    gallonsRequested: "",
    deliveryDate: "",
    hashistory: false,
    suggestedPrice: "",
    totalPrice: "", // Use a default value here
  });

  // Fetch address
  const fetchAddress = () => {
    fetch(`http://localhost:8000/api/fillQuote/${data.user.id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
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
          console.log("Fetch address successfully ");
        } else {
          console.error("Data not found in response");
        }
      })
  };

  useEffect(() => {
    fetchAddress();
  }, []);


  // Pricing module
  const calculateTotalPrice: ChangeEventHandler<HTMLInputElement> = (e) => {
    e.preventDefault();

    const gallons = parseFloat(e.target.value);
    const suggestedPrice = 2.9;

    if (!isNaN(gallons) && !isNaN(suggestedPrice)) {
      const total = gallons * suggestedPrice;
      setUserdata({
        ...userData,
        gallonsRequested: e.target.value,
        suggestedPrice: suggestedPrice.toString(),
        totalPrice: total.toString(),
      });

      return total.toString(); // Return the calculated total
    } else {
      console.error("Gallons or suggestedPrice is not a valid number");
      setUserdata({ ...userData, totalPrice: "0" });
      return "0"; // Return a default value, or you can choose to return null or handle the error differently.
    }
  };

  // Handle requestQuote submission
  const handleQuoteRequested: MouseEventHandler<HTMLButtonElement> = async (
    e,
  ) => {
    e.preventDefault();

    const res = await fetch(`http://localhost:8000/api/addQuote/${data.user.id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    })
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Request failed with status: ${response.status}`);
      }
      return response.json();
    })
      .then((data) => {
        toast.success("Requested quote successfully");
        console.log("Requested quote successfully ", data);
        setUserdata({
          ...userData,
          gallonsRequested: "",
          deliveryDate: "",
          suggestedPrice: "",
          totalPrice: "",
        });
      })
      .catch((error) => {
        toast.error("Request quote failed");
        console.error("Request quote failed ", error);
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
          <p className="pre-filled">{userData.state}</p>
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
        Submit
      </button>
    </section>
  );
}
