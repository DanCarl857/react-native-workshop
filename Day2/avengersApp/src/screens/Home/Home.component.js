import React, { Component } from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'

class Home extends Component {

    render() {
        return (
            <View>
                <Text>Home Screen</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default Home;