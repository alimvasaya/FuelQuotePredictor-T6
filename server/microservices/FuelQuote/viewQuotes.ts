import { Request, Response } from 'express';
import ClientData from '../../models/UsersModel/ClientData.model';
import QuoteHistory from '../../models/QuoteModel/QuoteHistory.model';
import { connectMongo } from '../../mongodb';

export const viewQuotes = async (req: Request, res: Response) => {
  try {
    await connectMongo();

    ClientData.findOne({ userId: req.params.userId })
      .then(async (client) => {
        if (!client) {
          return res.status(404).json({ error: 'Client not found' });
        }

        const address1 = client.address1;
        const address2 = client.address2;
        const city = client.city;
        const state = client.state;
        const zipcode = client.zipcode;
        var display_zipcode = zipcode.toString();
        const client_address =
          address1 + ' ' + address2 + ' ' + city + ' ' + state + ' ' + display_zipcode;

        const quotes = await QuoteHistory.find({ clientID: req.params.userId });

        res.status(200).json({
          name: client.name,
          userId: client._id,
          client_address,
          quotes,
        });
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};