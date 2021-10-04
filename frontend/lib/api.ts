import sslChecker from 'ssl-checker';
import { Result } from '../interface/ssl-check-result';


const getSslDetails = async function (hostname: string) {
	const value = await sslChecker(hostname);
	return value
}

export async function getAllDomainCheckResult() {
	const res = await fetch('https://script.google.com/macros/s/AKfycbyLnUse8vyG7Vfyz8OFRrDQwljNsk6qAz01ZbSTMkxgW9gcdhyBHfI80QjOgQE6ijGp/exec')
	const json = await res.json()
	const domains: Array<string> = json.domains

	let data: Array<Result> = [];
	for (const domain of domains) {
		const value = await getSslDetails(domain);
		const result: Result = {
			domain: domain,
			isSsl: value.valid
		}
		data.push(result)
	}

	return data
}