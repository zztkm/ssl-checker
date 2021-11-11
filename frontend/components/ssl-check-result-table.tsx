import Container from './container'
import { IsSslResponse } from '../interface/ssl-check-result'

type Props = {
	results: Array<IsSslResponse>
}

const SslCheckResultTable = ({ results }: Props) => {
	return (
		<Container>
			<div className="flex flex-col">
				<div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
					<div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
						<div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
							<table className="min-w-full divide-y divide-gray-200">
								<thead className="bg-gray-50">
									<tr>
										<th
											scope="col"
											className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
										>
											DOMAIN
										</th>
										<th
											scope="col"
											className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
										>
											STATUS
										</th>
										<th
											scope="col"
											className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
										>
											VERSION
										</th>
										<th
											scope="col"
											className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
										>
											SSL/TLS Error
										</th>
									</tr>
								</thead>
								<tbody className="bg-white divide-y divide-gray-200">
									{results.map((result) => (
										<tr key={result.host}>
											<td className="px-6 py-4 whitespace-nowrap">
												<div className="text-sm text-gray-900">{result.host}</div>
											</td>
											<td className="px-6 py-4 whitespace-nowrap">
												{result.valid
													? <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">Active</span>
													: <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">Inactive</span>
												}
											</td>
											<td className="px-6 py-4 whitespace-nowrap">
												<div className="text-sm text-gray-900">{result.version}</div>
											</td>
											<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{result.error}</td>
										</tr>
									))}
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</div>
		</Container>
	)
}

export default SslCheckResultTable