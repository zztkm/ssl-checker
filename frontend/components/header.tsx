import Link from 'next/link'

const Header = () => {
	return (
		<nav className="flex items-center justify-between flex-wrap bg-white-1 p-6">
			<div className="flex items-center flex-no-shrink mr-6">
				<Link href="/">
					<a className="font-semibold text-xl tracking-tight">
						SSL/TLS Checker
					</a>
				</Link>
			</div>
			<div className="block lg:hidden">
				<button className="flex items-center px-3 py-2 border rounded text-teal-lighter border-teal-light hover:text-white hover:border-white">
					<svg className="h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
				</button>
			</div>
			<div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
				<div className="text-sm lg:flex-grow">
					<Link href="/checker">
						<a className="block mt-4 lg:inline-block lg:mt-0 text-teal-lighter hover:underline mr-4">
							CheckHost
						</a>
					</Link>
				</div>

			</div>
		</nav>
	)
}

export default Header