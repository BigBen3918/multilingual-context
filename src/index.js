import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import App from "./App"
import { LanguageProvider } from "./LanguageProvider"
import { fetchTranslations } from "./utils/fetchTranslations"

ReactDOM.render(
	<LanguageProvider fetchTranslations={fetchTranslations}>
		<App />
	</LanguageProvider>,
	document.getElementById("root")
)
