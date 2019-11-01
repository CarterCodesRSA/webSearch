import React, { useState } from 'react'
import { View, StyleSheet } from 'react-native'

import { SearchBar, WebpageWebView, ErrorMessage } from '../components'
import getValidUrl from '../Helpers/getValidUrl'

const SearchScreen = () => {
	const [searchURL, setSearchURL] = useState('')
	const [urlValidation, finalUrl, errorMessage] = getValidUrl()

	return (
		<>
			<View style={styles.container}>
				<SearchBar
					searchUrl={searchURL}
					onUrlChange={newUrl => {
						setSearchURL(newUrl)
					}}
					onUrlSubmit={() => urlValidation(searchURL)}
				/>
			</View>
			<View style={styles.webContainer}>
				{!errorMessage == '' ? (
					<ErrorMessage message={errorMessage} />
				) : (
					<WebpageWebView url={finalUrl} style={styles.WebView} />
				)}
			</View>
		</>
	)
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#406E8E'
	},
	webContainer: {
		flex: 1,
		backgroundColor: '#406E8E'
	}
})
export default SearchScreen
