import type { NextApiRequest, NextApiResponse } from 'next'

const handler = (
  req: NextApiRequest,
  res: NextApiResponse<Response>
) => {
  if (req.method === 'POST') {
    return postHandler(req, res)
  } else if (req.method === 'GET') {
    return getHandler(req, res)
  } else {
    return res.status(405)
  }

}

const getHandler = (
  req: NextApiRequest,
  res: NextApiResponse<GetResponse>
) => {

}

const postHandler = (
  req: NextApiRequest,
  res: NextApiResponse<PostResponse>
) => {

}

type Response = GetResponse | PostResponse

type GetResponse = number[]

type PostResponse = number

export default handler
