import sslChecker from 'ssl-checker';
import { ApiResponse, Result, ErrorIResolvedValues } from '../interface/ssl-check-result';

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

const errorHandle = function() {
	const res: ErrorIResolvedValues = {
		valid: false,
		validFor: [""],
		validTo: "",
		daysRemaining: 0,
		validFrom: "",
	}
	return res
}

export async function getAllDomainCheckResult() {
	const res = await fetch('https://script.google.com/macros/s/AKfycbxEpYX-SQFc0Msl0PsOYPwvwhwuG-2APZ_IVUGrNMc4DlH55NSNCptTFPzc-q9jItTr/exec', {redirect: 'follow'})
	const json = await res.json()
	const response: Array<ApiResponse> = json.results

	let data: Array<Result> = [];
	for (const res of response) {
		if (res.hostname == "") {
			continue
		} 

		const value = await getSslDetails(res.hostname).catch(errorHandle);

		console.log(value)

		let isSsl: string
		if (value.daysRemaining === 0) {
			isSsl = '検証エラー'
		} else {
			isSsl = value.valid ? 'TRUE' : 'FALSE'
		}

		console.log(isSsl)
		const result: Result = {
			domain: res.hostname,
			url: res.url,
			isSsl: isSsl
		}
		data.push(result)
	}

	return data
}