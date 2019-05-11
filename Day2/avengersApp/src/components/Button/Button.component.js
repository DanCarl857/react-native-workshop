import React, { Component } from 'react'
import { Text, View, TouchableOpacity, Alert } from 'react-native'
import styles from './Button.component.style'

const Button = ({ btnText, title, description }) => {

    showAlert = () => {
        Alert.alert(title, description);
    }

    return (
        <TouchableOpacity 
            style={styles.btn} 
            onPress={() => showAlert(title, description)}>
                <Text style={styles.btnText}>{btnText}</Text>
        </TouchableOpacity>
    )
}

export default Button
