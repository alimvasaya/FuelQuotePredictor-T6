import { Request, Response } from "express";
import { clientInfo } from "../../models/UsersModel/Clientdata.model"; // Update the path as needed

// Mock quotes
const mockQuotes = [
  {
    deliveryDate: "2023-10-21",
    gallonsRequested: 4,
    suggestedPrice: 1.5,
    totalPrice: 123, // You can calculate this based on the other values
  }
];

export const View_Quote = (req: Request, res: Response) => {
  // In a real setup, you would extract the clientID from the request.
  const clientID = clientInfo.userID; // Mock client ID

  const address1 = clientInfo.address1;
  const address2 = clientInfo.address2;
  const city = clientInfo.city;
  const state = clientInfo.state;
  const zipcode = clientInfo.zipcode;
  const display_zipcode = zipcode.toString();
  const client_address = address1 + " " + address2 + " " + city + " " + state + " " + display_zipcode;

  // Mock quotes for the client
  const clientQuotes = mockQuotes.map((quote: any) => ({
    ...quote,
    clientID: clientID,
    address1: address1,
    address2: address2,
    city: city,
    state: state,
    zipcode: zipcode,
  }));

  res.json( {
    name: clientInfo.name,
    userid: clientInfo.userID,
    client_address,
    quotes: clientQuotes,
  });
};