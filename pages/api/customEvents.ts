import type {NextApiRequest, NextApiResponse} from 'next'
import {customEvents} from './data/customEvents'

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    res.status(200).json(customEvents)
}
