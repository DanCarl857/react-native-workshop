import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import styles from './Header.component.style'

const Header = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.textStyle}>My Character App</Text>
        </View>
    )
}

export default Header