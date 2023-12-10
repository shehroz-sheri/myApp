import { View, Text, ScrollView, StyleSheet, TextInput, Button, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import DatePicker from 'react-native-date-picker'

export default function Patient() {
    return (
        <ScrollView>
            <View style={styles.flexContainer}>
                <Text style={styles.h1}>Patient Dashboard</Text>
            </View>
            <View style={{ paddingHorizontal: 15 }}>
                <TextInput placeholder='Enter Name' style={styles.input} />
                <TextInput placeholder='Enter Email' keyboardType='email-address' style={styles.input} />
                <TextInput placeholder='Enter your Medical History' style={styles.input} />

                <TouchableOpacity
                    style={styles.btn}
                    activeOpacity={0.7}
                    onPress={() => { }}
                >
                    <Text style={styles.text}>Add</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    flexContainer: {
        flex: 1
    },
    h1: {
        fontSize: 28, fontWeight: 'bold', textAlign: 'center',
        marginTop: 10, marginBottom: 30, color: '#264653'
    },
    input: {
        minWidth: 100,
        paddingHorizontal: 15, paddingVertical: 4,
        borderWidth: 2, borderRadius: 50,
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