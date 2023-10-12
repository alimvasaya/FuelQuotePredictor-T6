import { Request, Response } from "express";
import { clientInfo } from "../../models/UsersModel/Clientdata.model"; // Update the path as needed
import { Fuel_quote } from "../../models/QuoteModel/Fuel_Quote.model"; // Import the fuelQuote model


export const registerUserQuote = async (req: Request, res: Response) => {
  try {
    const fuelQuote =  Fuel_quote
    const hasHistory = !!fuelQuote;
    const client = clientInfo;

    res.json({
      name: client.name,
      userID: client.userID,
      address1: client.address1,
      address2: client.address2,
      city: client.city,
      state: client.state,
      zipcode: client.zipcode,
      suggestedPrice: fuelQuote.suggestedPrice,
      hasHistory,
    });
    
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
};