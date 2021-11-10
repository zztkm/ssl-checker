import { REPO_URL } from '../lib/constants'
import Container from './container'

import Link from 'next/link'

const Footer = () => {
    return (
        <footer className="bg-accent-1 border-t border-accent-2">
            <Container>
                <div className="py-24 flex flex-col lg:flex-row items-center">
                    <h3 className="text-4xl lg:text-5xl font-bold tracking-tighter leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2">
                        TLS/SSL対応チェックサイト
                    </h3>
                    <div className="flex flex-col lg:flex-row justify-center items-center lg:pl-4 lg:w-1/2">
                        <a
                            href="https://docs.google.com/spreadsheets/d/1c25pvMyjQ89OBCvB9whCQQLM_BPXKyY7umsj5wmpP2k/edit?usp=sharing"
                            className="mx-3 bg-black hover:bg-white hover:text-black border border-black text-white font-bold py-3 px-12 lg:px-8 duration-200 transition-colors mb-6 lg:mb-0"
                        >
                            TLS/SSLチェック対象リスト
                        </a>
                        <a
                            href={REPO_URL}
                            className="mx-3 font-bold hover:underline"
                        >
                            View on GitHub
                        </a>
                    </div>
                </div>
                <div className="text-center px-6 py-2">
                    <div>©ピスタチオスタジオゲーム部 2021</div>
                    <div>This site uses Google Analytics</div>
                    <Link href="/policy">
                        <a className="text-blue-600 hover:underline">プライバシーポリシー</a>
                    </Link>
                </div>
            </Container>
        </footer>
    )
}

export default Footer