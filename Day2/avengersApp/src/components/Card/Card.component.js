import React, { Component } from 'react'
import { Text, View, Image, TouchableOpacity } from 'react-native'
import styles from './Card.component.style'

import Button from '../Button/Button.component'

const Card = ({ headerText, imageSource, descriptionText }) => {
    return (
        <View>
            <View style={styles.card}>
                <View style={styles.row}>
                    <View style={styles.flexor}>
                        <Image
                            source={imageSource}
                            style={styles.imgStyle}
                        />
                    </View>
                    <View style={styles.textContainer}>
                        <Text style={styles.headerText}>{headerText}</Text>
                        <Text>{descriptionText}</Text>
                    </View>
                </View>
                <View>
                    <Button 
                        btnText="See Biography" 
                        title={headerText} 
                        description={descriptionText}
                    />
                </View>
            </View>
        </View>
    )
}

export default Card;
