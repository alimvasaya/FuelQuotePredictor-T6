"use client";
import React, { useEffect, useState } from "react";
import { Session } from "next-auth";
import HistCard from "./HistCard";

type DataProps = {
  data: Session;
};

// Define the type for your quote objects
type Quote = {
  deliveryDate: string;
  deliveryAddress: {
    address1: string;
    address2: string;
    city: string;
    state: string;
    zipcode: number;
  };
  totalPrice: number;
  gallonsRequested: number;
};

export default function QuoteHist({ data }: DataProps) {
  const [quoteHistory, setQuoteHistory] = useState<Quote[]>([]);

  const fetchHistory = () => {
    fetch("http://localhost:8000/api/viewQuotes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: data.user.email }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setQuoteHistory(data);
      })
      .catch((error) => {
        console.error("Fetch history failed ", error);
      });
  };

  useEffect(() => {
    fetchHistory();
  }, []);

  return (
    <section className="flex flex-col items-center justify-center space-y-8 pt-12">
      <h1 className="text-3xl font-semibold uppercase tracking-widest text-white">
        Quote History
      </h1>

      <div className="flex w-full flex-col items-center justify-center space-y-2">
        {quoteHistory.map((histCard, i) => (
          <HistCard
            key={i}
            deliveryDate={histCard.deliveryDate}
            address={histCard.deliveryAddress.address1}
            city={histCard.deliveryAddress.city}
            state={histCard.deliveryAddress.state}
            zipcode={histCard.deliveryAddress.zipcode}
            total={histCard.totalPrice}
            gallons={histCard.gallonsRequested}
          />
        ))}
      </div>
    </section>
  );
}
