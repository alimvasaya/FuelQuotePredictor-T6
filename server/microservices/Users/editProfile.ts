import { Request } from 'express';
import { connectMongo } from '../../mongodb';
import ClientData from '../../models/UsersModel/ClientData.model';
import { processResponse } from '../../middleware/requestRouter';

export const editProfile = async (req: Request, res: any) => {
  try {
    const incoming = req.body;
    await connectMongo();
    const client = await ClientData.findOne({ userId: req.params.userId });

    if (!client) {
      return res.status(409).json({ error: 'No user found' });
    }

    if (incoming.name !== '') {
      client.name = incoming.name;
    }
    if (incoming.address1 !== '') {
      client.address1 = incoming.address1;
    }
    if (incoming.city !== '') {
      client.city = incoming.city;
    }
    if (incoming.state !== '') {
      client.state = incoming.state;
    }
    if (incoming.zipcode !== '') {
      client.zipcode = incoming.zipcode;
    }
    if (incoming.address2 !== '') {
      client.address2 = incoming.address2;
    }

    await client.save();

    processResponse(client, res);
  } catch (err) {
    console.error('Server error: editProfile');
  }
};
