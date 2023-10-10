import React from "react";
import HistCard from "./HistCard";

type Props = {};

export default function QuoteHist({}: Props) {
  // Sample data
  const dummyHist = [
    {
      deliveryDate: "00/00/0000",
      address: "1234 addy dr",
      city: "city",
      state: "TX",
      zipcode: 12345,
      total: 123,
      gallons: 12,
    },
    {
      deliveryDate: "00/00/0000",
      address: "1234 addy dr",
      city: "city",
      state: "TX",
      zipcode: 12345,
      total: 123,
      gallons: 12,
    },
  ];
  return (
    <section className="flex flex-col items-center justify-center space-y-8 pt-12">
      <h1 className="text-3xl font-semibold uppercase tracking-widest text-white">
        Quote History
      </h1>

      <div className="flex w-full flex-col items-center justify-center space-y-2">
        {dummyHist.map((histCard, i) => (
          <HistCard
            key={i}
            deliveryDate={histCard.deliveryDate}
            address={histCard.address}
            city={histCard.city}
            state={histCard.state}
            zipcode={histCard.zipcode}
            total={histCard.total}
            gallons={histCard.gallons}
          />
        ))}
      </div>
    </section>
  );
}
