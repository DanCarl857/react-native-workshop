import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const Header = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.textStyle}>My Character App</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#4885ed',
        paddingVertical: 30,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textStyle: {
        fontSize: 16,
        fontWeight: '900',
        color: '#fff',
        marginTop: 20
    }
});

export default Header