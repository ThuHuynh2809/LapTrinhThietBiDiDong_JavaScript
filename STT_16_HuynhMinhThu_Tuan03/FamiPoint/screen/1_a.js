import { StatusBar } from 'expo-status-bar';
import { Component } from 'react';
import { StyleSheet, Text, View, Image, Button, TouchableOpacity } from 'react-native';

export default function oneA() {
    return (
        <View style={styles.container}>
            <Image
                source={require('./Image/Ellipse 8.png')}
                style={styles.img}
            />
            <Text style={styles.text1}>GROW{'\n'}YOUR BUSINESS</Text>
            <Text style={styles.text2}>We will help you to grow your business using online server</Text>
            <TouchableOpacity style={styles.btnLogin}>
                <Text style={styles.textLogin}>LOGIN</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnSignUp}>
                <Text style={styles.textSignUp}>SIGN UP</Text>
            </TouchableOpacity>
            <Text style={styles.text3}>HOW WE WORK?</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width:'360px',
        height:'640px',
        backgroundImage: 'linear-gradient(#C7F4F6 10%,#D1F4F6 25%,#E5F4F5 90%, #00CCF9 100%)'
    },
    img: {
        width: '140px',
        height: '140px',
        top: '105px',
        left: '120px',
        border: '15px',
    },

    text1: {
        width: '189px',
        height: '58px',
        top: '150px',
        left: '95px',
        fontFamily: 'Roboto',
        fontSize: '23.5px',
        fontWeight: '700',
        lineHeight: '29.3px',
        textAlign: 'center'
    },

    text2: {
        width: '302px',
        height: '36px',
        top: '205px',
        left: '45px',
        fontFamilyamily: 'Roboto',
        fontSize: '15px',
        fontWeight: '700',
        lineHeight: '17.58px',
        textAlign: 'center'

    },

    text3: {
        width: '302px',
        height: '53px',
        top: '225px',
        left: '40px',
        fontFamilyamily: 'Roboto',
        fontSize: '18px',
        fontWeight: '700',
        lineHeight: '21.09px',
        textAlign: 'center'
    },

    btnLogin: {
        width: '119px',
        height: '48px',
        top: '250px',
        left: '50px',
        borderRadius: '10px',
        backgroundColor: '#E3C000'
    },
    textLogin: {
        width: '90px',
        height: '21px',
        top: '15px',
        left:'auto',
        fontFamily: 'Roboto',
        fontSize: '18px',
        fontWeight: '700',
        lineHeight: '21.09px',
        textAlign: 'center',
        color: '#000000',
        alignSelf: 'center'

    },

    btnSignUp: {
        width: '119px',
        height: '48px',
        top: '200px',
        left: '220px',
        borderRadius: '10px',
        backgroundColor: '#E3C000'
    },

    textSignUp: {
        width: '90px',
        height: '23px',
        top: '15px',
        fontFamily: 'Roboto',
        fontSize: '18px',
        fontWeight: '700',
        lineHeight: '21.09px',
        textAlign: 'center',
        color: '#000000',
        alignSelf: 'center'

    }
});