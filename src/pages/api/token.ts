import { getToken } from '@/utils/sesstionUtil';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const response = await getToken(req, res);
    res.status(200).json(response);
  } catch (error) {
    console.error('error => ', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
