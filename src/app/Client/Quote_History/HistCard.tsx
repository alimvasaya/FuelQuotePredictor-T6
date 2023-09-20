// pages/Client/HistCard.tsx
// Define layout and styling for history card

import React from "react";

type HistData = {
  deliveryDate: string;
  address: string;
  city: string;
  state: string;
  zipcode: number;
  total: number;
  gallons: number;
};

export default function HistCard({
  deliveryDate,
  address,
  city,
  state,
  zipcode,
  total,
  gallons,
}: HistData) {
  return (
    <div
      className="group flex w-4/6 flex-row justify-between rounded-3xl
      bg-sky-500/50 p-6 text-white transition-colors hover:bg-sky-500/60"
    >
      <div className="tracking-widest">
        <h2 className="text-sm font-bold">{deliveryDate}</h2>
        <p className="tracking-normal">
          {address}, {city}, {state} {zipcode}
        </p>
      </div>
      <div className="font-extrabold tracking-wider">
        <p>
          <span className="text-sm font-semibold">$</span>
          {total}
        </p>
        <p>
          {gallons} <span className="my-3 text-sm font-semibold">gallons</span>
        </p>
      </div>
    </div>
  );
}
