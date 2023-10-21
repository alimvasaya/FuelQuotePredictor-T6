'use client';
import React from 'react';

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
      className="flex w-4/6 flex-row justify-between rounded-3xl bg-sky-700/60 p-5 text-white 
      transition-colors hover:bg-sky-700/70"
    >
      <div className="flex flex-col space-y-2 tracking-widest">
        <h2 className="text-sm font-medium lg:text-base">{deliveryDate}</h2>
        <p className="tracking-wider">
          <span className="text-sm tracking-normal text-white/50 lg:text-base">
            Amount requested:{' '}
          </span>
          {gallons}{' '}
          <span className="my-3 text-sm font-medium md:text-base">gallons</span>
        </p>
        <p className="text-sm tracking-normal text-white/50 lg:text-base">
          Deliver to: {address}, {city}, {state} {zipcode}
        </p>
      </div>

      <div className="tracking-wider">
        <p
          className="flex justify-end rounded-lg bg-sky-500/50 p-2 text-lg font-extrabold
          uppercase tracking-wider"
        >
          <span className="text-sm font-medium">$</span>
          {total}
        </p>
      </div>
    </div>
  );
}
