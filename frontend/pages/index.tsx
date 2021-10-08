import Head from 'next/head'
import Container from '../components/container'
import Intro from '../components/intro'
import Layout from '../components/layout'
import { Result } from '../interface/ssl-check-result'
import { getAllDomainCheckResult } from '../lib/api'
import { getBuildTime } from '../lib/util'

type Props = {
  results: Array<Result>
  build_time: string
}

const Index = ({ results, build_time }: Props) => {
  return (
    <>
      <Layout>
        <Head>
          <title>SSL Checker</title>
          <meta name="description" content="Check if the domain is SSL-enabled" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Container>
          <Intro />
          <div>チェック時刻: {build_time}</div>
          <div>
            {results.map((result) => (
              <div key={result.domain}>
                ドメイン: {result.domain}
                <br />
                結果: {result.isSsl ? 'SSL対応されています' : 'SSL対応されていません'}
              </div>
            ))}
          </div>
        </Container>
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
