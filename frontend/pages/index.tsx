import Head from 'next/head'
import Container from '../components/container'
import Intro from '../components/intro'
import Layout from '../components/layout'
import { IsSslResponse } from '../interface/ssl-check-result'
import { getAllDomainCheckResult } from '../lib/api'
import { getBuildTime } from '../lib/util'

type Props = {
  results: Array<IsSslResponse>
  build_time: string
}

const Index = ({ results, build_time }: Props) => {
  return (
    <>
      <Layout>
        <Head>
          <title>TLS/SSL Checker</title>
          <meta name="description" content="Check if the domain is SSL-enabled" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Container>
          <Intro />
          <div>チェック時刻: {build_time}</div>
          <table className="shadow-lg bg-white">
            <tr>
              <th className="bg-blue-100 border text-left px-8 py-4">Domain</th>
              <th className="bg-blue-100 border text-left px-5 py-4">SSL-enabled</th>
              <th className="bg-blue-100 border text-left px-8 py-4">TLS/SSL-version</th>
              <th className="bg-blue-100 border text-left px-8 py-4">TLS/SSL Error</th>
            </tr>
            {results.map((result) => (
              <tr key={result.host}>
                <td className="border px-8 py-4">{result.host}</td>
                <td className="border text-center px-6 py-4">{result.valid ? 'TRUE' : 'FALSE'}</td>
                <td className="border text-center px-8 py-4">{result.version}</td>
                <td className="border text-left px-8 py-4">{result.error}</td>
              </tr>
            ))}
          </table>
        </Container>
        <br />
      </Layout>
    </>
  )
}

// ビルド時に実行される
export async function getStaticProps() {
  const results = await getAllDomainCheckResult();
  const build_time = getBuildTime();

  return {
    props: {
      results,
      build_time
    },
  }
}

export default Index
