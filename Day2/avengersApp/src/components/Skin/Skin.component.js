import React, { Component } from 'react'
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native'
import styles from './Skin.component.style'

// Component
import Card from './../Card/Card.component'

const Skin = () => {
    return (
        <View style={styles.skin}>
            <Card 
                imageSource={require('../../assets/thanos.jpeg')}
                headerText="Thanos"
                descriptionText="Thanos is the baddest villain in the world. He killed half the avengers by snapping his fingers."
            />
            <Card 
                imageSource={require('../../assets/ironman.jpg')}
                headerText="Iron Man"
                descriptionText="Billionaire, philanthropist, scientist, playboy, man"
            />
            <Card 
                imageSource={require('../../assets/captain.jpg')}
                headerText="Captain America"
                descriptionText="Human lab experiment by Stark. Was in ice for 100years. Very strong guy"
            />
            <Card 
                imageSource={require('../../assets/scarlet.jpg')}
                headerText="Scarlet Witch"
                descriptionText="Russian experiment gone wrong. Twin brother also had powers. One of the strongest humans."
            />
        </View>
    )
}


export default Skin
