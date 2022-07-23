import React, { useContext } from "react"
import "./App.css"
import { T } from "./components/T"
import { LanguageContext } from "./LanguageProvider"

function App() {
	const { language, updateLanguage } = useContext(LanguageContext)
	const handleUpdateLanguage = ({ target: { value } }) => {
		updateLanguage(value)
	}
	return (
		<div className="App">
			<header className="App-header">
				<h1>Multilingual React Context Demo</h1>
				<select value={language} onChange={handleUpdateLanguage}>
					<option value="en">English</option>
					<option value="es">Spanish</option>
					<option value="nl">Dutch</option>
				</select>{" "}
			</header>
			<div>
				<T>example-greeting</T>
			</div>
		</div>
	)
}

export default App
