import { Request, Response } from 'express';
import { processResponse } from '../../middleware/requestRouter';
import { findUser } from './findUser';

export const viewProfile = async (req: Request, res: Response) => {
  try {
    const client = await findUser(req.body.email);

    if (client != null) {
      console.log(client);
      processResponse(client, res);
    } else {
      console.error('Fetch user profile failed');
    }
  } catch (err) {
    console.error('Server error ', err);
  }
};
