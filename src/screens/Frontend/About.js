import React from 'react'
import { View, Text, StyleSheet, Image, Button } from 'react-native'

export default function About({ navigation }) {
    return (
        <View style={styles.flexContainer}>
            <Text style={styles.h1}>About</Text>
            <Image style={styles.img} source={{ uri: 'https://www.reactnative.express/static/logo.png' }} />
            <Button title='Go to Home' onPress={() => navigation.navigate('Home')} />
        </View>
    )
}

const styles = StyleSheet.create({
    flexContainer: {
        backgroundColor: 'gray',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    h1: {
        fontSize: 48,
        fontWeight: 'bold',
        color: 'white',
    },
    img: {
        width: 50,
        height: 50
    },
})