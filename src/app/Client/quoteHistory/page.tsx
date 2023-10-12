"use client";
import React, { useEffect, useState } from "react";
import HistCard from "./HistCard";

// Define the type for your quote objects
type Quote = {
  deliveryDate: string;
  address1: string;
  address2: string;
  city: string;
  state: string;
  zipcode: number;
  total: number;
  gallonsrequested: number;
};

export default function QuoteHist() {
  const [quoteHistory, setQuoteHistory] = useState<Quote[]>([]);

  useEffect(() => {
    fetch("http://localhost:8000/api/quotes")
      .then((response) => response.json())
      .then((data) => {
        // Assuming the response contains a "quotes" property
        const quotes = data.quotes.map((quote: { deliveryDate: any; address1: any; address2: any; city: any; state: any; zipcode: any; totalPrice: any; gallonsRequested: any; }) => ({
          deliveryDate: quote.deliveryDate,
          address1: quote.address1,
          address2: quote.address2,
          city: quote.city,
          state: quote.state,
          zipcode: quote.zipcode,
          total: quote.totalPrice, // Map to the "total" property
          gallonsrequested: quote.gallonsRequested, // Map to the "gallonsrequested" property
        }));
        
        setQuoteHistory(quotes);
      })
      .catch((error) => {
        console.error("Error fetching quote history:", error);
      });
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
            address={histCard.address1}
            city={histCard.city}
            state={histCard.state}
            zipcode={histCard.zipcode}
            total={histCard.total}
            gallons={histCard.gallonsrequested}
          />
        ))}
      </div>
    </section>
  );
}