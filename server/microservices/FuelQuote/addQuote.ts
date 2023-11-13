import { Request, Response } from 'express';
import { processResponse } from '../../middleware/requestRouter';
// import ClientData from '../../models/UsersModel/ClientData.model';
import QuoteHistory  from '../../models/QuoteModel/QuoteHistory.model';
import { connectMongo } from '../../mongodb';

export const addQuote = async (req: Request, res: Response) => {
  try {
    if(req.body.status === "Authenticated")
    await connectMongo();
    const clientID = req.params.userId
    const fuel = await QuoteHistory.findOne({clientID: clientID}).exec();

    const newQuote = new QuoteHistory({
      clientID: clientID,
      gallonsRequested: parseFloat(req.body.gallonsRequested),
      deliveryDate: req.body.deliveryDate,
      suggestedPrice: parseFloat(req.body.suggestedPrice),
      totalPrice: parseFloat(req.body.totalPrice),
      deliveryAddress: {
        address1: req.body.address1,
        address2: req.body.address2,
        city: req.body.city,
        state: req.body.state,
        zipcode: parseFloat(req.body.zipcode),
      },
    
    });
    if (fuel !== null) {
      newQuote.save();
      processResponse(newQuote, res);
    } else {
      console.error('Request quote failed server');
    }
  } catch (err) {
    console.error('Error in addQuote:', err);
    return res.status(400).json({ error: 'An error occurred' });
  }
};

