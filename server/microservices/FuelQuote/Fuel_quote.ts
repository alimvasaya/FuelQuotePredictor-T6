import { Request, Response } from "express";

export const Register_Fuel_Quote = async (req: Request, res: Response) => {
  // Check if the request body is not null
  if (req.body == null) {
    return res.status(400).json({ error: "Bad Request" });
  }
  req.body = JSON.parse(JSON.stringify(req.body));
  const body = req.body;
  const clientID = body.userID;
  const gallonsRequested = body.gallonsRequested;
  const deliveryDate = body.deliveryDate;
  const suggestedPrice = body.suggestedPrice;
  const totalPrice = body.totalPrice;
  const address1 = body.address1;
  const address2 = body.address2;
  const city = body.city;
  const state = body.state;
  const zipcode = body.zipcode;
  const hasHistory = body.hasHistory;

  console.log("Received POST data:", {
    clientID,
    gallonsRequested,
    deliveryDate,
    suggestedPrice,
    totalPrice,
    address1,
    address2,
    city,
    state,
    zipcode,
    hasHistory,
  });

  // Send a response back to the client
  res.status(200).json({ message: "Data received successfully"});
  
};