import { Request, Response } from 'express';
import { processResponse } from '../../middleware/requestRouter';
import ClientData from '../../models/UsersModel/ClientData.model';
import QuoteHistory  from '../../models/QuoteModel/QuoteHistory.model';
import { connectMongo } from '../../mongodb';

export const fillQuote = async (req: Request, res: Response) => {
  try {
    await connectMongo();
    const clientID = req.params.userId;
    const fuel = await QuoteHistory.findOne({clientID: clientID}).exec();
    const hashistory = !!fuel;
    const client = await ClientData.findOne({ userId: req.params.userId }).exec();
    

    if (client != null) {
      const toSend = {
        address1: client.address1,
        address2: client.address2,
        city: client.city,
        state: client.state,
        zipcode: client.zipcode,
        hashistory,
      };
      processResponse(toSend, res);
    } else {
      console.error('Retrieve data failed');
    }
  } catch (err) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
