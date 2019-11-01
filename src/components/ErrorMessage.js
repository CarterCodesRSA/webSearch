import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'

const ErrorMessage = ({ message }) => {
	return (
		<View style={styles.container}>
			<MaterialIcons name="find-in-page" size={60} />
			<Text>{message}</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		alignItems: 'center',
		justifyContent: 'center',
		flex: 1
	}
})

export default ErrorMessage
