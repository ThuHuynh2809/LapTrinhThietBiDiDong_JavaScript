import { StatusBar } from 'expo-status-bar';
import { Component } from 'react';
import { StyleSheet, Text, View, Image, Button, TouchableOpacity } from 'react-native';

export default function twoA() {
    return (
        <View style={styles.container}>
            <Image
                source={require('./Image/lock-152879 1.png')}
                style={styles.img}
            />
            <Text style={styles.text1}>FORGET{'\n'}PASSWORD</Text>
            <Text style={styles.text2}>Provide your account’s email for which you want to reset your password</Text>
            <View style={styles.boxEmail}>
                <View>
                    <Image source={require('./Image/mail-2935365 1.png')}
                        style={styles.imgEmail}
                    />
                </View>
            </View>
            <TouchableOpacity style={styles.btnNext}>
              <Text style = {styles.textNext}>NEXT</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '360px',
        height: '640px',
        backgroundImage: 'linear-gradient(#C7F4F6 10%,#D1F4F6 25%,#E5F4F5 90%, #00CCF9 100%)'
    },
    img: {
        width: '104.94px',
        height: '116.95px',
        top: '105px',
        left: '135px',
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
        height: '53px',
        top: '190px',
        left: '45px',
        fontFamilyamily: 'Roboto',
        fontSize: '16px',
        fontWeight: '700',
        lineHeight: '19px',
        textAlign: 'center'

    },
    
    boxEmail: {
        width: '305px',
        height: '45px',
        top: '210px',
        left: '40px',
        backgroundColor: '#C4C4C4'
    },

    txtEmail: {
        fontFamily: 'Roboto',
        fontSize: '20px',
        textAlign: 'left',
        padding: '10px',
        marginTop: '-45px',
        marginLeft: '40px'
    },

    imgEmail: {
        width: '48px',
        height: '45px'
    },

    btnNext: {
        width: '305px',
        height: '45px',
        top: '250px',
        left: '40px',
        borderRadius: '10px',
        backgroundColor: '#E3C000'
    },
    textNext: {
        width: '90px',
        height: '21px',
        top: '15px',
        left: 'auto',
        fontFamily: 'Roboto',
        fontSize: '18px',
        fontWeight: '700',
        lineHeight: '21.09px',
        textAlign: 'center',
        color: '#000000',
        alignSelf: 'center'

    }
});