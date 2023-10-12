// Request fuel quote input form
"use client";
import React, { useEffect, useState } from "react";
import { Session } from "next-auth";

export default function QuoteForm(DataProps: { data: Session }) {
  const [userData, setUserdata] = useState({
    clientID: DataProps.data?.user?.id || "",
    fullName: "",
    address1: "",
    address2: "",
    city: "",
    state: "",
    zipcode: "",
    gallonsRequested: "",
    deliveryDate: "",
    suggestedPrice: "",
    totalPrice: "", // Use a default value here
    hasHistory: false,
  });

  useEffect(() => {
    if (!userData.clientID) {
      fetchUserData();
    }
  }, []);

  const fetchUserData = () => {
    fetch("http://localhost:8000/api/Forum_quote")
      .then((response) => response.json())
      .then((data) => {
        setUserdata(data);
      })
      .catch((error) => {
        console.error("Error fetching address:", error);
      });
  };

  const calculateTotalPrice = () => {
    const gallons = parseFloat(userData.gallonsRequested);
    const suggestedPrice = parseFloat(userData.suggestedPrice);

    if (!isNaN(gallons) && !isNaN(suggestedPrice)) {
      const total = gallons * suggestedPrice;
      console.log("Calculated Total Price:", total);
      setUserdata((prevUserData) => ({
        ...prevUserData,
        totalPrice: total.toString(),
      }));
      return total; // Return the calculated total
    } else {
      console.log("Gallons or suggestedPrice is not a valid number.");
      return 0; // Return a default value, or you can choose to return null or handle the error differently.
    }
  };

  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    if (formSubmitted) {
      return;
    }
    const total = calculateTotalPrice();
    console.log("Total Price:", userData.totalPrice);
    try {
      const response = await fetch("http://localhost:8000/api/add_fuel_quote", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      if (response.ok) {
        const data = await response.json();
        console.log("Quote submitted successfully:", data);
        setFormSubmitted(true);
      } else {
        throw new Error("Server error");
      }
    } catch (error) {
      console.error("Error submitting quote:", error);
    }
  };

  return (
    <section className="flex flex-col items-center justify-center space-y-8 pt-32">
      <h1 className="text-3xl font-semibold uppercase tracking-widest text-white">
        Request Fuel Quote
      </h1>

      <form
        className="relative mx-auto flex w-80 flex-col space-y-2"
        onSubmit={handleSubmit}
      >
        <input
          type="number"
          id="gallons"
          placeholder="Gallons"
          name="gallons"
          className="input-field [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
          required
          onChange={({ target }) =>
            setUserdata({ ...userData, gallonsRequested: target.value })
          }
          // Populate value from state
        />
        {/* Address, City, and State */}
        <input
          type="text"
          id="address1"
          name="address1"
          placeholder="Delivery Address"
          className="input-field"
          required
          readOnly
          value={userData.address1} // Populate value from state
          onChange={({ target }) =>
            setUserdata({ ...userData, address1: target.value })
          }
        />
        <input
          type="text"
          id="address2"
          name="address2"
          placeholder="Delivery Address"
          className="input-field"
          required
          readOnly
          value={userData.address2} // Populate value from state
          onChange={({ target }) =>
            setUserdata({ ...userData, address2: target.value })
          }
        />
        <div className="flex space-x-2">
          <input
            type="text"
            id="city"
            placeholder="City"
            name="city"
            className="input-field w-full"
            required
            value={userData.city} // Populate value from state
            onChange={({ target }) =>
              setUserdata({ ...userData, city: target.value })
            }
          />
          <input
            type="text"
            id="state"
            placeholder="State"
            name="state"
            className="input-field w-full"
            required
            readOnly
            value={userData.state} // Populate value from state
            onChange={({ target }) =>
              setUserdata({ ...userData, state: target.value })
            }
          />
          <input
            type="number"
            id="zipcode"
            placeholder="Zipcode"
            name="zipcode"
            className="input-field w-full"
            required
            readOnly
            value={userData.zipcode} // Populate value from state
            onChange={({ target }) =>
              setUserdata({ ...userData, zipcode: target.value })
            }
          />
        </div>
        {/* Delivery and Pricing */}
        <input
          type="date"
          id="deliveryDate"
          placeholder="Delivery Date"
          name="deliveryDate"
          className="input-field w-full uppercase"
          required
          value={userData.deliveryDate}
          onChange={({ target }) =>
            setUserdata({ ...userData, deliveryDate: target.value })
          }
        />
        <input
          type="number"
          id="suggestedPrice"
          placeholder="Suggested Price"
          name="suggestedPrice"
          className="input-field w-full overflow-scroll"
          value={userData.suggestedPrice}
          onChange={({ target }) =>
            setUserdata({ ...userData, suggestedPrice: target.value })
          }
          required
        />
        +
        <input
          type="text"
          id="totalPrice"
          placeholder="Total Amount Due"
          name="totalPrice"
          className="input-field [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
          readOnly
          defaultValue={userData.totalPrice}
          onChange={({ target }) =>
            setUserdata({ ...userData, totalPrice: target.value })
          }
        />
        <button type="submit" className="butoon">
          Submit
        </button>
      </form>
    </section>
  );
}
