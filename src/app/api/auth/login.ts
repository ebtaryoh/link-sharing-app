// pages/api/auth/login.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import dbConnect from '../../../lib/dbConnect';
import User, { IUser } from '../../models/User';
import { signToken } from '../../../lib/auth';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req;

  await dbConnect();

  switch (method) {
    case 'POST':
      try {
        const { email, password } = req.body;

        if (!email || !password) {
          return res.status(400).json({ error: 'Email and password are required' });
        }

        const user: IUser | null = await User.findOne({ email }).exec();
        if (!user) {
          return res.status(400).json({ error: 'User not found' });
        }

        const isMatch = await user.matchPassword(password);
        if (!isMatch) {
          return res.status(400).json({ error: 'Invalid credentials' });
        }

        const token = signToken(email); // Use email instead of user._id

        res.status(200).json({ success: true, token });
      } catch (error) {
        res.status(500).json({ error: 'Error logging in' });
      }
      break;
    default:
      res.status(405).json({ error: 'Method not allowed' });
      break;
  }
}
