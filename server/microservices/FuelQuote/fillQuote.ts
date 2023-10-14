import { Request, Response } from "express";
import { processResponse } from "../../middleware/requestRouter";
import { findUser } from "../Users/findUser";
import { findQuote } from "./findQuote";

export const fillQuote = async (req: Request, res: Response) => {
  try {
    const client = await findUser(req.body.email);
    const fuel = await findQuote(client.userID);

    if (client != null) {
      const toSend = {
        userID: client.userID,
        name: client.name,
        address1: client.address1,
        address2: client.address2,
        city: client.city,
        state: client.state,
        zipcode: client.zipcode,
        suggestedPrice: fuel.quoteHistory[0].suggestedPrice,
      };
      processResponse(toSend, res);
    } else {
      console.error("Retrieve data failed");
    }
  } catch (err) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};
