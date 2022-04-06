import { NextApiRequest, NextApiResponse } from 'next';

type ReqProp = { apiKey?: string };

const apiHandler = async (
  req: NextApiRequest,
  res: NextApiResponse<string[]>
) => {
  const { apiKey } = req.body as ReqProp;
  if (apiKey === process.env.SECRET_API_KEY)
    return res.status(200).json(['Name', 'Name 2']);
  return res.status(401).json(['Unauthorized']);
};

export default apiHandler;
