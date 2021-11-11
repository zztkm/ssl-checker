import Layout from '../components/layout'
import Container from '../components/container'
import { IsSslResponse } from '../interface/ssl-check-result'
import { useState } from 'react'
import { useRouter } from 'next/router'
import React from 'react'

const Checker = () => {
	const [input, setInput] = useState('')
	const router = useRouter()

	const execute = () => {
		router.push({
			pathname: "/result",
			query: { host: input }
		})
	}

	return (
		<Layout>
			<Container>
				<div className='p-8 justify-center items-center h-screen flex'>
					<form className='flex'>
						<input className='bg-gray-200 shadow-inner rounded-l p-2 flex-1' id='host' type='host' aria-label='host name' placeholder='Enter the host name' value={input} onChange={e => setInput(e.target.value)} />
						<button className='bg-blue-600 hover:bg-blue-700 duration-300 text-white shadow p-2 rounded-r' type='submit' onClick={execute}>
							Execute
						</button>
					</form>
				</div>
			</Container>
		</Layout>
	)
}

export default Checker