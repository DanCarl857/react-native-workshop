import React from 'react'
import { Image, StyleSheet, View, Text } from 'react-native'

const Bananas = (props) => {
    return (
        <View style={styles.container}>
            <Image 
                source={props.imageSource} 
                style={styles.imgStyle} 
            />
        </View>
    )
}

const styles = StyleSheet.create({
    imgStyle: {
        width: undefined,
        height: '100%'
    }
})

export default Bananas