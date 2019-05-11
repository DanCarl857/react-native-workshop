import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'

class Skin extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={{ color: '#000' }}> My Skin </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center', 
        marginTop: 80
    }
})

export default Skin
