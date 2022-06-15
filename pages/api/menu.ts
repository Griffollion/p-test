import type {NextApiRequest, NextApiResponse} from 'next'
import {menu} from './data/menu'

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    res.status(200).json(menu)
}
