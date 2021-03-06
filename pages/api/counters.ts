import type {NextApiRequest, NextApiResponse} from 'next'
import {counters} from './data/counters'

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    res.status(200).json(counters)
}
