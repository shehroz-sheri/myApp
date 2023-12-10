import { View, Text, ScrollView, StyleSheet, TextInput, Button, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import DatePicker from 'react-native-date-picker'

export default function Doctor() {
    const [date, setDate] = useState(new Date())
    const [open, setOpen] = useState(false)

    return (
        <ScrollView>
            <View style={styles.flexContainer}>
                <Text style={styles.h1}>Doctor Dashboard</Text>
            </View>
            <View style={{ paddingHorizontal: 15 }}>
                <TextInput placeholder='Enter Name' style={styles.input} />
                <TextInput placeholder='Enter Specialization' style={styles.input} />
                <TextInput placeholder='Enter Email' keyboardType='email-address' style={styles.input} />
                <View>
                    <Text style={styles.input} onPress={() => setOpen(true)}>Stating Date</Text>
                    <DatePicker
                        modal
                        open={open}
                        date={date}
                        onConfirm={(date) => {
                            setOpen(false)
                            setDate(date)
                        }}
                        onCancel={() => {
                            setOpen(false)
                        }}
                        textColor='black' mode='date'
                    />

                    <Text style={styles.input} onPress={() => setOpen(true)}>Ending Date</Text>
                    <DatePicker
                        modal
                        open={open}
                        date={date}
                        onConfirm={(date) => {
                            setOpen(false)
                            setDate(date)
                        }}
                        onCancel={() => {
                            setOpen(false)
                        }}
                        textColor='black' mode='date'
                    />
                </View>
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
        fontSize: 28, fontWeight: 'bold', textAlign: 'center', marginTop: 10, marginBottom: 30
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