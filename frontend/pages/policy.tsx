import Layout from '../components/layout'
import Container from '../components/container'

const Policy = () => {
	return (
		<Layout>
			<Container>
				<h1 className="text-6xl md:text-6xl font-bold tracking-tighter leading-tight md:pr-8">
					プライバシーポリシー
				</h1>
				<br />
				<h2 className="text-5xl md:text-5xl tracking-tighter leading-tight md:pr-8">
					Google Analyticsについて
				</h2>
				<p>
					SSL/TLS Checkerでは利用状況を把握するためにGoogle Analyticsを利用しています。
				</p>
				<p>
					Google Analytics から提供されるCookie を使用していますが、Google Analytics によって個人を特定する情報は取得していません。
				</p>
				<p>
					Google Analytics の利用により収集されたデータは、Google社のプライバシーポリシーに基づいて管理されています。Google Analyticsの利用規約・プライバシーポリシーについてはGoogle Analytics のホームページでご確認ください。
					<li><a className="text-blue-600 hover:underline" href="https://marketingplatform.google.com/about/analytics/terms/jp/">Google アナリティクス サービス利用規約</a></li>
					<li><a className="text-blue-600 hover:underline" href="https://policies.google.com/">Google ポリシーと規約</a></li>
					なお、Google Analyticsのサービス利用による損害については、当サイトは責任を負わないものとします。
				</p>
				<p>
					また、<a className="text-blue-600 hover:underline" href="https://tools.google.com/dlpage/gaoptout?hl=ja">Google アナリティクス オプトアウト アドオン</a>を使用することで，Google アナリティクス JavaScript（analytics.js、gtag.js）によるデータの使用を無効にできます。
				</p>
			</Container>
		</Layout>
	)
}

export default Policy