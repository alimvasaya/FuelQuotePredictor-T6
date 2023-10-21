import { Request, Response } from 'express';
import { processResponse } from '../../middleware/requestRouter';
import { findQuote } from './findQuote';

export const addQuote = async (req: Request, res: Response) => {
  try {
    const newQuote = {
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
    };

    const fuel = await findQuote(req.body.userID);

    if (fuel != null) {
      fuel.quoteHistory.push(newQuote);
      fuel.hasHistory = true;
      processResponse(fuel.quoteHistory, res);
    } else {
      console.error('Request quote failed');
    }
  } catch (err) {
    return res.status(400).json({ err });
  }
};
