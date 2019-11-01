import React from 'react'
import { View, TextInput, StyleSheet } from 'react-native'

const SearchBar = ({ searchURL, onUrlChange, onUrlSubmit }) => {
	return (
		<View style={styles.backgroundStyle}>
			<TextInput
				value={searchURL}
				style={styles.inputStyle}
				autoCapitalize="none"
				autoCorrect={false}
				placeholder="Your webpage here"
				onChangeText={newUrl => onUrlChange(newUrl)}
				onEndEditing={() => onUrlSubmit()}
			/>
		</View>
	)
}

const styles = StyleSheet.create({
	backgroundStyle: {
		backgroundColor: '#ebebd3',
		height: 50,
		borderRadius: 5,
		marginHorizontal: 15,
		flexDirection: 'row',
		marginVertical: 15,
		borderColor: '#161925',
		borderWidth: 1
	},
	header: {
		alignSelf: 'center',
		fontSize: 18,
		marginLeft: 15
	},
	inputStyle: {
		flex: 1,
		fontSize: 18,
		textAlign: 'center'
	}
})

export default SearchBar
