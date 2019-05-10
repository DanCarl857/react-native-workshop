import React, { Component } from 'react'
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native'

// Components
import Header from './../../components/Header/Header.component'
// import Skin from './../../components/Skin/Skin.component'

class Home extends Component {

    render() {
        return (
            <ScrollView>
                <Header />
                <View style={styles.skin}>
                    <View style={styles.card}>
                        <View style={{ flexDirection: 'row', flex: 1}}>
                            <View style={{ flex: 1 }}>
                                <Image
                                    source={require('./../../assets/thanos.jpeg')}
                                    style={{ height: 100, width: '100%', borderRadius: 50 }}
                                />
                            </View>
                            <View style={{ flex: 2, marginLeft: 15, justifyContent: 'center' }}>
                                <Text style={{ fontSize: 18, fontWeight: '900', textAlign: 'left', marginBottom: 10 }}>Thanos</Text>
                                <Text>Thanos is the baddest villain in the world. He killed half the avengers by snapping his fingers.</Text>
                            </View>
                        </View>
                        <View>
                            <TouchableOpacity style={styles.btn}>
                                <Text style={styles.btnText}>Learn More</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.card}>
                        <View style={{ flexDirection: 'row', flex: 1}}>
                            <View style={{ flex: 1 }}>
                                <Image
                                    source={require('./../../assets/ironman.jpg')}
                                    style={{ height: 100, width: '100%', borderRadius: 50 }}
                                />
                            </View>
                            <View style={{ flex: 2, marginLeft: 15, justifyContent: 'center' }}>
                                <Text style={{ fontSize: 18, fontWeight: '900', textAlign: 'left', marginBottom: 10 }}>Iron Man</Text>
                                <Text>Billionaire, philanthropist, scientist, playboy, man</Text>
                            </View>
                        </View>
                        <View>
                            <TouchableOpacity style={styles.btn}>
                                <Text style={styles.btnText}>Learn More</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.card}>
                        <View style={{ flexDirection: 'row', flex: 1}}>
                            <View style={{ flex: 1 }}>
                                <Image
                                    source={require('./../../assets/captain.jpg')}
                                    style={{ height: 100, width: '100%', borderRadius: 50 }}
                                />
                            </View>
                            <View style={{ flex: 2, marginLeft: 15, justifyContent: 'center' }}>
                                <Text style={{ fontSize: 18, fontWeight: '900', textAlign: 'left', marginBottom: 10 }}>Captain America</Text>
                                <Text>Human lab experiment by Stark. Was in ice for 100years. Very strong guy</Text>
                            </View>
                        </View>
                        <View>
                            <TouchableOpacity style={styles.btn}>
                                <Text style={styles.btnText}>Learn More</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.card}>
                        <View style={{ flexDirection: 'row', flex: 1}}>
                            <View style={{ flex: 1 }}>
                                <Image
                                    source={require('./../../assets/scarlet.jpg')}
                                    style={{ height: 100, width: '100%', borderRadius: 50 }}
                                />
                            </View>
                            <View style={{ flex: 2, marginLeft: 15, justifyContent: 'center' }}>
                                <Text style={{ fontSize: 18, fontWeight: '900', textAlign: 'left', marginBottom: 10 }}>Scarlet Witch</Text>
                                <Text>Russian experiment gone wrong. Twin brother also had powers. One of the strongest humans.</Text>
                            </View>
                        </View>
                        <View>
                            <TouchableOpacity style={styles.btn}>
                                <Text style={styles.btnText}>Learn More</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#eeeeee'  
    },
    card: {
        // flexDirection: 'row',
        margin: 5,
        borderColor: 'rgba(0, 0, 0, 0.1)',
        borderWidth: 2,
        padding: 15,
        borderRadius: 8
    },
    btn: {
        backgroundColor: '#4885ed',
        paddingVertical: 10,
        paddingHorizontal: 5,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 18,
    },
    btnText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '800'
    }
})

export default Home;