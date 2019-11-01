import { useState } from 'react'

export default () => {
	const [finalUrl, setFinalUrl] = useState('')
	const [errorMessage, setErrorMessage] = useState('')

	const urlValidation = searchURL => {
		//The validation is broken into the following:
		//1) The protocol is stripped from the url
		//2) Depending on the return the url is either valid and a fetch request can be performed, or the url is invalid
		//3) If the fetch request returns valid data, the url is then rendered in the WebView

		const regexPattern = /^(?:\w+:\/\/)?([\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+)$/
		const matches = regexPattern.exec(searchURL)

		if (matches) {
			fetch(`https://${matches[1]}`)
				.then(response => {
					setFinalUrl('https://' + matches[1])
					setErrorMessage('')
				})
				.catch(err => setErrorMessage('INVALID_URL'))
		} else {
			setErrorMessage('INVALID_URL')
			setFinalUrl('')
		}
	}

	return [urlValidation, finalUrl, errorMessage]
}
