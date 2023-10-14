"use client";
import React, {
  useEffect,
  useState,
  ChangeEventHandler,
  MouseEventHandler,
} from "react";
import { Session } from "next-auth";
import toast from "react-hot-toast";

type DataProps = {
  data: Session;
};

export default function QuoteForm({ data }: DataProps) {
  const [userData, setUserdata] = useState({
    userId: "",
    email: data.user.email,
    address1: "",
    address2: "",
    city: "",
    state: "",
    zipcode: "",
    gallonsRequested: "",
    deliveryDate: "",
    suggestedPrice: "",
    totalPrice: "", // Use a default value here
  });

  // Fetch address
  const fetchUserData = () => {
    fetch("http://localhost:8000/api/fillQuote", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: userData.email }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Fetch address sucessfully ", data);
        setUserdata(data);
      })
      .catch((error) => {
        console.error("Fetch address failed ", error);
      });
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  useEffect(() => {
    console.log(userData);
  }, [userData]);

  // Pricing module
  const calculateTotalPrice: ChangeEventHandler<HTMLInputElement> = (e) => {
    e.preventDefault();

    const gallons = parseFloat(e.target.value);
    const suggestedPrice = parseFloat(userData.suggestedPrice);

    if (!isNaN(gallons) && !isNaN(suggestedPrice)) {
      const total = gallons * suggestedPrice;
      setUserdata({
        ...userData,
        gallonsRequested: e.target.value,
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
    e.preventDefault;

    const res = await fetch("http://localhost:8000/api/addQuote", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    })
      .then((res) => res.json())
      .then((data) => {
        toast.success("Requested quote successfully");
        console.log("Requested quote successfully ", data);
        setUserdata({
          ...userData,
          gallonsRequested: "",
          deliveryDate: "",
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