
"use client";
import React, {useState } from "react";

export default function Form() {
  const [gallonsRequested, setGallonsRequested] = useState("");
  const [deliveryDate, setDeliveryDate] = useState("");
  const [suggestedPrice, setSuggestedPrice] = useState("");
  const [totalAmountDue, setTotalAmountDue] = useState("");
  
  const handleGallonsChange = (e: { target: { value: React.SetStateAction<string>; }; }) => {
    setGallonsRequested(e.target.value);
  };

  const handleDeliveryDateChange = (e: { target: { value: React.SetStateAction<string>; }; }) => {
    setDeliveryDate(e.target.value);
  };

  // You can fetch the suggested price from your Pricing Module here and set it using setSuggestedPrice.

  const calculateTotalAmountDue = () => {
    const gallons = parseFloat(gallonsRequested);
    const price = parseFloat(suggestedPrice);
    if (!isNaN(gallons) && !isNaN(price)) {
      setTotalAmountDue((gallons * price).toFixed(2));
    } else {
      setTotalAmountDue("");
    }
  };

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    // You can handle the form submission here, e.g., sending data to the server.
  };

  return (
    <section className="relative mx-auto flex h-screen max-w-7xl flex-col items-center justify-evenly px-10">
    <div>
      <h1  className="opacity-1 absolute top-24 z-10 -ml-[0px] flex flex-col transition-all duration-700
        ease-in-out text-2xl font-semibold text-white">Fuel Quote Forum</h1>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col space-y-2" >
          <label>Gallons Requested:</label>
          <input
            type="number"
            value={gallonsRequested}
            onChange={handleGallonsChange}
            required
          />
        </div>
        <div>
          <label>Delivery Address:</label>
          <input
            type="text"
            value="Client's Address" // This should come from the client profile
            readOnly
          />
        </div>
        <div>
          <label>Delivery Date:</label>
          <input
            type="date"
            value={deliveryDate}
            onChange={handleDeliveryDateChange}
          />
        </div>
        <div>
          <label>Suggested Price / gallon:</label>
          <input
            type="number"
            value={suggestedPrice}
            readOnly
          />
        </div>
        <div>
          <label>Total Amount Due:</label>
          <input
            type="number"
            value={totalAmountDue}
            readOnly
          />
        </div>
        <button type="submit">
          Submit
        </button>
      </form>
    </div>
    </section>
  );
}
