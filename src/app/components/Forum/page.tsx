// Request fuel quote input form

import React from 'react';

type Props = {};

export default function QuoteForm({}: Props) {
  function calculatePrice() {
    const gallons = Number(document.getElementById('gallons')?.nodeValue);
    let state = document.getElementById('state')?.nodeValue;
  }

  return (
    <section className="flex flex-col items-center justify-center space-y-8 pt-32">
      <h1 className="text-3xl font-semibold uppercase tracking-widest text-white">
        Request Fuel Quote
      </h1>

      <form className="relative mx-auto flex w-80 flex-col space-y-2">
        <input
          type="number"
          id="gallons"
          placeholder="Gallons"
          name="gallons"
          className="input-field [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none
          [&::-webkit-outer-spin-button]:appearance-none"
          required
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
        />
        <div className="flex space-x-2">
          <input
            type="text"
            id="city"
            placeholder="City"
            name="city"
            className="input-field w-full"
            required
            readOnly
          />
          <input
            type="text"
            id="state"
            placeholder="State"
            name="city"
            className="input-field w-full"
            required
            readOnly
          />
        </div>

        {/* Delivery and Pricing */}
        <input
          type="date"
          id="deliveryDate"
          placeholder="Delivery Date"
          name="deliveryDate"
          className="input-field w-full uppercase"
        />
        <input
          type="number"
          id="suggestedPrice"
          placeholder="Suggested Price"
          name="suggestedPrice"
          className="input-field w-full overflow-scroll"
          required
        />
        <input
          type="number"
          id="totalPrice"
          placeholder="Total Amount Due"
          name="totalPrice"
          className="input-field [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none
          [&::-webkit-outer-spin-button]:appearance-none"
          required
          readOnly
        />

        <button className="butoon">Submit</button>
        <button className="butoon">Cancel</button>
        <button className="butoon">Edit</button>
      </form>
    </section>
  );
}
