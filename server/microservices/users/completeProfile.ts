// connect with db
import { Request, Response } from 'express';
import { connectMongo } from '../../mongodb';
import ClientData from '../../models/UsersModel/ClientData.model';
import UserCredentials from '../../models/UsersModel/UserCredentials.model';

export const completeProfile = async (req: Request, res: Response) => {
  try {
    await connectMongo();

    const newClient = new ClientData({
      userId: req.body.userId,
      name: req.body.name,
      address1: req.body.address1,
      city: req.body.city,
      state: req.body.state,
      zipcode: req.body.zipcode,
      address2: req.body.address2,
    });

    console.log(newClient);

    newClient.save();

    const updatedUser = await UserCredentials.findByIdAndUpdate(
      newClient.userId,
      {
        dataCompleted: true,
      },
    );
    console.log(updatedUser);

    res.status(201).json({ message: 'Completed profile successfully' });
  } catch (err) {
    console.error('Server error: completeProfile');
  }
};
