import Head from 'next/head'
import Container from '../components/container'
import Intro from '../components/intro'
import Layout from '../components/layout'
import SslCheckResultTable from '../components/ssl-check-result-table'
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
          <SslCheckResultTable results={results} />
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
