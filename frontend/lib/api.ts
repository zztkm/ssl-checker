import sslChecker from 'ssl-checker';
import { ApiResponse, Result } from '../interface/ssl-check-result';


const getSslDetails = async function (hostname: string) {
	const value = await sslChecker(hostname);
	return value
}

const getUrl = function (hostname: string, valid: boolean) {
	if (valid) {
		const url = `https://${hostname}/`
	} else {
		const url = `http://${hostname}/`
	}
}

export async function getAllDomainCheckResult() {
	const res = await fetch('https://script.google.com/macros/s/AKfycbxAuoYc2L1N2GWbPncI0AWDBWAHPixSPTXthy7utHsUxeHi-t7FZ1GN-3f4Ack0NX3W/exec')
	const json = await res.json()
	const response: Array<ApiResponse> = json.results

	let data: Array<Result> = [];
	for (const res of response) {
		const value = await getSslDetails(res.hostname);
		const result: Result = {
			domain: res.hostname,
			url: res.url,
			isSsl: value.valid
		}
		data.push(result)
	}

	return data
}