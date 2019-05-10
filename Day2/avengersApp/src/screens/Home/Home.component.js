import React, { Component } from 'react'
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native'
import styles from './Home.component.style'

// Components
import Header from './../../components/Header/Header.component'
import Skin from './../../components/Skin/Skin.component'

class Home extends Component {

    render() {
        return (
            <ScrollView>
                <Header />
                <Skin />
            </ScrollView>
        )
    }
}

// https://github.com/DanCarl857/react-native-workshop

export default Home;