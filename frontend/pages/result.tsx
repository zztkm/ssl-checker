import Head from 'next/head'
import Container from '../components/container'
import Layout from '../components/layout'
import SslCheckResultTable from '../components/ssl-check-result-table'
import { IsSslResponse } from '../interface/ssl-check-result'
import { SSL_CHECK_API_URL } from '../lib/constants';

type Props = {
	results: Array<IsSslResponse>
}

const CheckResult = ({ results }: Props) => {
	return (
		<>
			<Layout>
				<Head>
					<title>SSL/TLS Checker</title>
					<meta name="description" content="Check if the domain is SSL-enabled" />
					<link rel="icon" href="/favicon.ico" />
				</Head>
				<Container>
					<SslCheckResultTable results={results} />
				</Container>
				<br />
			</Layout>
		</>
	)
}

export async function getServerSideProps(context) {
	console.log("きたぜ!")
	const data = {
		hostname: context.query.host
	}
	console.log(data)
	const isSslResponse = await fetch(`${SSL_CHECK_API_URL}/isssl/`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(data)
	})
	const result: IsSslResponse = await isSslResponse.json()
	// const res = await fetch("/api/isssl", {
	// 	method: "POST",
	// 	body: JSON.stringify(data)
	// })
	// const result: IsSslResponse = await res.json()
	// console.log(result)
	const results: Array<IsSslResponse> = []
	results.push(result)
	console.log(results)
	return { props: { results } }
}

export default CheckResult
