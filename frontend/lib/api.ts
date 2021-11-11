import { GetHostNameApiResponse, IsSslResponse } from '../interface/ssl-check-result';
import { GET_HOST_NAME_API_URL, SSL_CHECK_API_URL } from './constants';


const checkSslBulk = async function (hostnames: Array<string>) {
	const data = {
		hostnames: hostnames
	}
	const res = await fetch(`${SSL_CHECK_API_URL}/isssl/bulk/`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(data)
	})
	const response: Array<IsSslResponse> = await res.json()
	return response
}

export async function getAllDomainCheckResult() {
	const res = await fetch(GET_HOST_NAME_API_URL)
	const response: GetHostNameApiResponse = await res.json()

	const isSslRes = await checkSslBulk(response.hostnames);
	return isSslRes
}