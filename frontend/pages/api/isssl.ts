import type { NextApiRequest, NextApiResponse } from 'next'
import { IsSslResponse } from '../../interface/ssl-check-result';
import { SSL_CHECK_API_URL } from '../../lib/constants';

export default async (req: NextApiRequest, res: NextApiResponse<IsSslResponse>) => {
	const isSslResponse = await fetch(`${SSL_CHECK_API_URL}/isssl/`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: req.body
	})
	const data: IsSslResponse = await isSslResponse.json()
	return res.status(200).json(data)
}