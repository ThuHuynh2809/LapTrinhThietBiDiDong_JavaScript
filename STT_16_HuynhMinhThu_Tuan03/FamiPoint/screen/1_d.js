import { StatusBar } from 'expo-status-bar';
import { Component } from 'react';
import { StyleSheet, Text, View, Image, Button, TouchableOpacity } from 'react-native';

export default function oneD() {
    return (
        <View style={styles.container}>
            <Text style={styles.text1}>LOGIN</Text>
            <View style={styles.boxEmail}>
                <Text style={styles.txtEmail}>Email</Text>
            </View>
            <View style={styles.boxPass}>
                <Text style={styles.txtPass}>Password</Text>
                <Image source={require('./Image/eye 1.png')}
                    style={styles.imgPass}
                />
            </View>
            <TouchableOpacity style={styles.btnLogin}>
                <Text style={styles.textLogin}>LOGIN</Text>
            </TouchableOpacity>
            <Text style={styles.text2}>When you agree to terms and conditions</Text>
            <Text style={styles.text3}>For got your password?</Text>
            <Text style={styles.text4}>Or login with</Text>
        
            <View style={styles.boxFB}>
                <Image source={require('./Image/icofacebook-1924510 1.png')}
                    style={styles.imgFB}
                />
            </View>
            <View style={styles.boxZL}>
                <Image source={require('./Image/icozalo.png')}
                    style={styles.imgZL}
                />
            </View>
            <View style={styles.boxGG}>
                <Image source={require('./Image/icogoogle 1.png')}
                    style={styles.imgGG}
                />
            </View>
        
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '360px',
        height: '640px',
        backgroundColor: 'rgba(49, 170, 82, 0.19)'
    },

    text1: {
        width: '189px',
        height: '58px',
        top: '40px',
        left: '95px',
        fontFamily: 'Roboto',
        fontSize: '23.5px',
        fontWeight: '700',
        lineHeight: '29.3px',
        textAlign: 'center'
    },

    text2:{
        width:'260px',
        height: '20px',
        top: '190px',
        left: '60px',
        fontFamilyamily: 'Roboto',
        fontSize: '14px',
        fontWeight: '400',
        lineHeight: '16.41px',
        textAlign: 'center'
    },

    text3:{
        width:'260px',
        height: '20px',
        top: '200px',
        left: '60px',
        fontFamilyamily: 'Roboto',
        fontSize: '14px',
        fontWeight: '400',
        lineHeight: '16.41px',
        textAlign: 'center',
        color: '#5D25FA'
    },
    text4:{
        width:'260px',
        height: '20px',
        top: '210px',
        left: '60px',
        fontFamilyamily: 'Roboto',
        fontSize: '14px',
        fontWeight: '400',
        lineHeight: '16.41px',
        textAlign: 'center'
    },

    boxEmail: {
        width: '305px',
        height: '45px',
        top: '70px',
        left: '40px',
        backgroundColor: '#C4C4C4'
    },

    txtEmail: {
        fontFamily: 'Roboto',
        fontSize: '20px',
        textAlign: 'left',
        padding: '10px',
        marginTop: '0px',
        marginLeft: '15px'
    },

    boxPass: {
        width: '305px',
        height: '45px',
        top: '100px',
        left: '40px',
        backgroundColor: '#C4C4C4'
    },

    txtPass: {
        fontFamily: 'Roboto',
        fontSize: '20px',
        textAlign: 'left',
        padding: '10px',
        marginTop: '0px',
        marginLeft: '15px'
    },

    imgPass: {
        width: '38px',
        height: '36px',
        top: '-40px',
        left: '250px'
    },

    btnLogin: {
        width: '305px',
        height: '45px',
        top: '170px',
        left: '40px',
        borderRadius: '10px',
        backgroundColor: '#E53935'
    },
    textLogin: {
        width: '70px',
        height: '23px',
        top: '15px',
        left: 'auto',
        fontFamily: 'Roboto',
        fontSize: '20px',
        fontWeight: '700',
        lineHeight: '23.44px',
        textAlign: 'center',
        color: '#FFFFFF',
        alignSelf: 'center'

    },
    boxFB: {
        width: '100px',
        height: '45px',
        top: '270px',
        left: '45px',
        backgroundColor: '#25479B'

    },
    imgFB:{
        width: '32px',
        height: '32px',
        top: '5px',
        left: '30px'
    },
    boxZL:{
        width: '100px',
        height: '45px',
        top: '225px',
        left: '145px',
        backgroundColor: '#0F8EE0'
    },
    imgZL:{
        width: '30px',
        height: '30px',
        top: '7px',
        left: '30px'
    },
    boxGG:{
        width: '100px',
        height: '45px',
        top: '180px',
        left: '245px',
        backgroundColor: 'rgba(49, 170, 82, 0.19)'
    },
    imgGG:{
        width: '30px',
        height: '30px',
        top: '7px',
        left: '30px'
    }
});