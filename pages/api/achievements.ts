import type {NextApiRequest, NextApiResponse} from 'next'
import {achievements} from './data/achievements'

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    res.status(200).json(achievements)
}
