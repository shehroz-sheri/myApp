import React from 'react'
import { View, Text, StyleSheet, Button, TouchableOpacity } from 'react-native'

export default function Home({ navigation }) {
    return (
        <View style={styles.flexContainer}>
            <TouchableOpacity
                style={styles.btn}
                activeOpacity={0.7}
                onPress={() => { }}
            >
                <Text onPress={navigation.navigate('Login')} style={styles.text}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.btn}
                activeOpacity={0.7}
                onPress={() => { }}
            >
                <Text onPress={navigation.navigate('Register')} style={styles.text}>Register</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.btn}
                activeOpacity={0.7}
                onPress={() => { }}
            >
                <Text onPress={navigation.navigate('Patient')} style={styles.text}>Patient</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.btn}
                activeOpacity={0.7}
                onPress={() => { }}
            >
                <Text onPress={navigation.navigate('Doctor')} style={styles.text}>Doctor</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.btn}
                activeOpacity={0.7}
                onPress={() => { }}
            >
                <Text onPress={navigation.navigate('Appointments')} style={styles.text}>Appointments</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    flexContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    btn: {
        marginVertical: 15,
        borderRadius: 50,
        backgroundColor: '#264653',
        paddingVertical: 12,
        width: 100,
        alignSelf: 'center',
    },
    text: {
        color: 'white', textAlign: 'center'
    },
})