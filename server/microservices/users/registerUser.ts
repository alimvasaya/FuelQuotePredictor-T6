import { Request, Response } from 'express';
import { connectMongo } from '../../mongodb';
import UserCredentials from '../../models/UsersModel/UserCredentials.model';
import { hash } from 'bcryptjs';

export const registerUser = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    if (!email || !email.includes('@') || !password) {
      res.status(400).json({ message: 'Missing or Invalid credentials' });
      return;
    }

    await connectMongo();
    const userExist = await UserCredentials.findOne({ email: email });

    if (userExist) {
      return res.status(409).json({ error: 'Email already exists' });
    }

    const hashedPass = await hash(password, 12);

    const newUser = new UserCredentials({
      email: email,
      password: hashedPass,
      role: 'client',
      dataCompleted: false,
    });

    console.log(newUser);
    newUser.save();

    res.status(201).json({ message: 'Registered user successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
  }
};
