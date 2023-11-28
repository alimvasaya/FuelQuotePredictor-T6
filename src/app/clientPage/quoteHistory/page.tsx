'use client';
import React, { useEffect, useState } from 'react';
import { Session } from 'next-auth';
import HistCard from './HistCard';

type DataProps = {
  data: Session;
};

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
  suggestedPrice: number;
  gallonsRequested: number;
};

export default function QuoteHist({ data }: DataProps) {
  const [quoteHistory, setQuoteHistory] = useState<Quote[]>([]);

  const fetchHistory = () => {
    fetch(`http://localhost:8000/api/viewQuotes/${data.user.id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Request failed with status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        if (Array.isArray(data.quotes)) {
          // Update this line
          // Extract relevant data from the API response
          const extractedData = data.quotes.map(
            (item: {
              deliveryDate: any;
              deliveryAddress: any;
              totalPrice: any;
              gallonsRequested: any;
            }) => ({
              deliveryDate: item.deliveryDate,
              deliveryAddress: item.deliveryAddress,
              totalPrice: item.totalPrice,
              gallonsRequested: item.gallonsRequested,
            }),
          );
          setQuoteHistory(extractedData);
        } else {
          // Handle the case where there is no quote history
          setQuoteHistory([]);
        }
      })
      .catch((error) => {
        console.error('Fetch history failed ', error);
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
        {quoteHistory &&
        Array.isArray(quoteHistory) &&
        quoteHistory.length > 0 ? (
          quoteHistory.map((histCard, i) => (
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
          ))
        ) : (
          <p className="border-b-4 border-indigo-500/50 text-lg text-white">
            No quote history available.
          </p>
        )}
      </div>
    </section>
  );
}
