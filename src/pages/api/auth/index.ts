import { NextApiRequest, NextApiResponse } from 'next';

export default (req: NextApiRequest, res: NextApiResponse) => {
  const users = [
    {
      id: 1,
      name: 'Chrystian',
    },
    {
      id: 2,
      name: 'Livia',
    },
    {
      id: 3,
      name: 'Thais',
    },
  ];
  return res.json(users);
};
