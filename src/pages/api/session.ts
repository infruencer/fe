import { getToken } from '@/utils/sesstionUtil';
import { NextApiRequest, NextApiResponse } from 'next';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || '';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    // 저장된 토큰 가져오기
    const token = await getToken(req, res);

    // 사용자 정보 조회
    const { data } = await fetch(`${API_BASE_URL}/member/me`, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    }).then((res) => res.json());

    res.status(200).json({ data: { ...data, accessToken: token } });
  } catch (error) {
    console.error('error => ', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
