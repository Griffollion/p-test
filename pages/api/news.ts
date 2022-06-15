import type {NextApiRequest, NextApiResponse} from 'next'
import {news} from './data/news'

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    res.status(200).json(news)
}
