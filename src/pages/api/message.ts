import type { NextApiRequest, NextApiResponse } from 'next'

const handler = (
  req: NextApiRequest,
  res: NextApiResponse<Response>
) => {
  if (req.method !== 'POST') {
    return res.status(405)
  }

}

type Response = boolean

export default handler
