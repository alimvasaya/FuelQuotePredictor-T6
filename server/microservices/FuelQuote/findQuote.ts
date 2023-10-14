import { fuelQuoteData } from "../../models/QuoteModel/FuelQuote.model";

export const findQuote = async (userId: any) => {
  for (const quote of fuelQuoteData) {
    if (quote.userId === userId) {
      console.log("Found user quote", quote.userId);
      return quote;
    }
  }
  console.error("No user found");
  return null;
};
