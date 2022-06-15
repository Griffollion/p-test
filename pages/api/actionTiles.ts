import type {NextApiRequest, NextApiResponse} from 'next'
import {actionTiles} from './data/actionTiles'

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    res.status(200).json(actionTiles)
}
