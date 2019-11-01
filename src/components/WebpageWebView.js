import React from 'react'
import { WebView } from 'react-native'

const WebpageWebView = ({ url }) => {
	if (url == '') {
		return null
	} else {
		return <WebView source={{ uri: url }} />
	}
}

export default WebpageWebView
