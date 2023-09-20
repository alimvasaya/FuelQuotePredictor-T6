import React from "react";

type Props = {};

export default function QuoteForm({}: Props) {
  return (
    <section className="flex flex-col items-center justify-center space-y-8 pt-32">
      <h1 className="text-3xl font-semibold uppercase tracking-widest text-white">
        Request Fuel Quote
      </h1>

      <form className="relative mx-auto flex w-80 flex-col space-y-2">
        <input
          type="number"
          placeholder="Gallons"
          className="input-field [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none
          [&::-webkit-outer-spin-button]:appearance-none"
          required
        />

        <input
          type="text"
          placeholder="Delivery Address"
          className="input-field"
        />

        {/* Will edit later */}
        <div className="flex space-x-2">
          <input
            type="date"
            placeholder="Delivery Date"
            className="input-field w-full uppercase"
          />
          <input
            type="number"
            placeholder="Price"
            className="input-field w-full"
          />
        </div>

        <input
          type="number"
          placeholder="Total Amount Due"
          className="input-field"
        />

        <button className="butoon">Submit</button>
      </form>
    </section>
  );
}
