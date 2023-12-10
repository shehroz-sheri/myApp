import { View, Text, ScrollView, TextInput, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'

export default function Login({ navigation }) {
    return (
        <ScrollView>
            <View style={styles.flexContainer}>
                <Text style={styles.h1}>Login</Text>
                <TextInput style={styles.input} placeholder='Enter your Email' keyboardType='email-address' />
                <TextInput style={styles.input} placeholder='Enter your Password' />
                <TouchableOpacity
                    style={styles.btn}
                    activeOpacity={0.7}
                    onPress={() => { }}
                >
                    <Text style={styles.text}>Login</Text>
                </TouchableOpacity>
            </View>
            <View style={{ flexDirection: 'row', alignSelf: 'center', marginVertical: 20 }}>
                <Text>Already have an Account? </Text>
                <Text onPress={() => navigation.navigate('Register')} style={{ color: 'black', textDecorationStyle: 'solid', textDecorationLine: 'underline' }}>Register Here</Text>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    flexContainer: {
        flex: 1, justifyContent: 'center', alignSelf: 'center'
    },
    h1: {
        fontSize: 36, fontWeight: 'bold', textAlign: 'center',
        marginBottom: 50, marginTop: 10, color: '#264653'
    },
    input: {
        minWidth: '80%',
        paddingVertical: 4,
        borderWidth: 2,
        borderColor: 'black',
        borderRadius: 50,
        paddingHorizontal: 15,
        marginVertical: 5
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