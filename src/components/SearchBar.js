import React from 'react';

import { View, Text, StyleSheet, TextInput } from 'react-native';

const SearchBar = ({ term, onTermChange, onTermSubmit }) => {

    return (
        <View style={styles.backgroudStyle}>
            <TextInput
                placeholder="Search"
                style={styles.textInputStyle}
                value={term}
                onChangeText={newTerm => onTermChange(newTerm)}
                autoCapitalize="none"
                autoCorrect={false}
                onEndEditing={onTermSubmit()} />
        </View>
    );
}

const styles = StyleSheet.create({
    backgroudStyle: {
        backgroundColor: 'gray',
        height: 50,
        borderRadius: 5,
        marginVertical: 15,
        marginRight: 15
    },
    textInputStyle: {
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 5,
        fontSize: 20

    }
})

export default SearchBar;