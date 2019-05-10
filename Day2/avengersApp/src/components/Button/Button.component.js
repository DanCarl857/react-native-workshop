import React, { Component } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import styles from './Button.component.style'

const Button = ({ btnText }) => {
    return (
        <TouchableOpacity style={styles.btn}>
            <Text style={styles.btnText}>{btnText}</Text>
        </TouchableOpacity>
    )
}

export default Button
