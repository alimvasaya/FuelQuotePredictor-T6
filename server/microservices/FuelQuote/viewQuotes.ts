import { Request, Response } from "express";
import { processResponse } from "../../middleware/requestRouter";
import { findUser } from "../Users/findUser";
import { findQuote } from "./findQuote";

export const viewQuotes = async (req: Request, res: Response) => {
  try {
    const client = await findUser(req.body.email);
    const quote = await findQuote(client.userID);

    if (quote != null) {
      processResponse(quote.quoteHistory, res);
    } else {
      console.error("Fetch history failed");
    }
  } catch (err) {
    console.error("Server error ", err);
  }
};
