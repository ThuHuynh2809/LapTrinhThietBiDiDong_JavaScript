import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect, useCallback } from "react";
import { StyleSheet, Image, Text, TextInput, TouchableOpacity, View, Animated } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


export default function Login({ navigation }) {
    const [user, setuser] = useState([]);
    const [email, setEmail] = useState("");
    const [check, setCheck] = useState(false);

    useEffect(() => {
        fetch("https://654063d245bedb25bfc1d9d5.mockapi.io/tuan07/TakeNote")
            .then((response) => response.json())
            .then((json) => {
                setuser(json);
            });
    }, []);

    const loginUser = () => {
        const foundUser = user.find((item) => item.email === email);
        if (foundUser) {
            navigation.navigate("DisplayNote", { userEmail: email });
            setCheck(false);
        } else {
            setCheck(true);
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={require('../assets/nodebook.png')}
                    style={styles.imgNodeBook}
                />
            </View>
            <View style={styles.body}>
                <View style={styles.viewTitle}>
                    <Text style={styles.textTitle1}>TAKE NOTE</Text>
                    <Text style={styles.textTitle2}>LOGIN</Text>
                </View>
                <View style={styles.viewInputEmail}>
                    <Image source={require('../assets/email.png')}
                        style={styles.imgEmail}
                    />
                    <TextInput style={styles.inputEmail}
                        onChangeText={(text) => setEmail(text)}
                        placeholder='Enter your name'>
                    </TextInput>
                </View>
                <TouchableOpacity onPress={() => navigation.navigate("DangKy")}>
                    <Text style={styles.textRegister}>Register an account</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.footer}>
                <TouchableOpacity style={styles.btnGetStarted}
                    onPress={loginUser}>
                    <Text style={styles.textGetStarted}>GET STARTED {"->"}</Text>
                </TouchableOpacity>
                {check ? <Text style={styles.exception}>Invalid Email</Text> : null}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        height: '40%',
        width: '90%',
        paddingVertical: 20,
        margin: 10
    },
    imgNodeBook: {
        height: 271,
        width: 271
    },
    body: {
        width: '90%',
        height: '35%',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 20
    },
    viewTitle: {
        width: '90%',
        height: '50%',
        alignItems: 'center',
        justifyContent: 'center'
    },

    textTitle1: {
        fontSize: 30,
        fontWeight: '700',
        fontStyle: 'Epilogue',
        color: '#8353E2',
        paddingVertical: 10
    },
    textTitle2: {
        fontSize: 24,
        fontWeight: '700',
        fontStyle: 'Epilogue',
        color: '#8353E2',
    },
    viewInputEmail: {
        width: '90%',
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: '#9095A0',
        borderWidth: 1,
        borderRadius: 10,

    },
    inputEmail: {
        width: '90%',
        padding: '4%',
        fontSize: 16,
        fontWeight: '400',
        fontStyle: 'Inter',
        color: '#BCC1CA'
    },
    imgEmail: {
        height: 20,
        width: 20,
        marginLeft: 10
    },
    textRegister: {
        fontSize: 12,
        fontWeight: '700',
        fontStyle: 'Epilogue',
        color: 'blue',
        paddingVertical: 10
    },
    footer: {
        width: '90%',
        height: '20%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    btnGetStarted: {
        width: '60%',
        height: '35%',
        borderRadius: 12,
        backgroundColor: '#00BDD6',
        alignItems: 'center',
        justifyContent: 'center'
    },
    textGetStarted: {
        fontSize: 16,
        fontWeight: '400',
        fontStyle: 'Inter',
        color: '#FFFFFF'
    },
    exception: {
        color: 'red',
        fontWeight: '500',
        fontStyle: 'Epilogue',
    }
})