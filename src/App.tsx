import Header from "./components/Header"
import Hero from "./components/Hero"
import AdvancedStatistics from "./components/AdvancedStatistics"
import BoostLinks from "./components/BoostLinks"
import Footer from "./components/Footer"
import { useState } from "react"
interface TData {
	key: string
	shrtlnk: string
	url: string
}
function App() {
	const url = "https://shrtlnk.dev/api/v2/link"
	const headers = new Headers({
		"api-key": "JQR4TN4EffTZlsTHaOo9tF6OmEDcsExb63LzuTjseDv4S",
		Accept: "application/json",
		"Content-Type": "application/json",
	})
	const [data, setData] = useState<TData[]>([])

	async function getLinks(bodyContent: string) {
		try {
			const response = await fetch(url, {
				method: "POST",
				credentials: "omit",
				mode: "cors",
				headers,
				body: JSON.stringify({
					url: bodyContent,
				}),
			})
			const resData = (await response.json()) as TData
			setData([...data, resData])
		} catch (error) {
			console.log(error)
		}
	}
	return (
		<>
			<Header />
			<Hero getLinks={getLinks} />
			<AdvancedStatistics data={data} />
			<BoostLinks />
			<Footer />
		</>
	)
}

export default App
