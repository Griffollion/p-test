import type {NextApiRequest, NextApiResponse} from 'next'
import {social} from './data/social'

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    res.status(200).json(social)
}
