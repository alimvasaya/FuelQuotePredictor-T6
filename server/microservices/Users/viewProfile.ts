import { Request, Response } from 'express';
import { connectMongo } from '../../mongodb';
import ClientData from '../../models/UsersModel/ClientData.model';
import { processResponse } from '../../middleware/requestRouter';

export const viewProfile = async (req: Request, res: Response) => {
  try {
    await connectMongo();
    const client = await ClientData.findOne({ userId: req.params.userId });

    if (!client) {
      return res.status(409).json({ error: 'No user found' });
    }

    processResponse(client, res);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
  }
};
