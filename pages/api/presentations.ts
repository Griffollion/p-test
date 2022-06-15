import type {NextApiRequest, NextApiResponse} from 'next'
import {presentations} from './data/presentations'

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    res.status(200).json(presentations)
}
