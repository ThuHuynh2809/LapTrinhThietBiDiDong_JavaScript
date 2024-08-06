
import { StyleSheet, Text, View, Image, Button, TextInput } from 'react-native';
import React from 'react';
export default function twoA() {

    return (

        <View style={styles.container}>
            <View style={styles.Login}>
                <Text style={styles.textLogin}>LOGIN</Text>
            </View>
            <View style={styles.btnName}>
                <TextInput style={styles.input} placeholder='Name' >
                </TextInput>
                <Image source={require('./Image/avatar_user.png')} style={styles.impUser_Password}></Image>
            </View>
            <View style={styles.btnPassword}>
                <TextInput style={styles.input} placeholder='Password' secureTextEntry={true}/>
                <Image source={require('./Image/lock.png')} style={styles.impUser_Password}/>
                <Image source={require('./Image/eye.png')} style={styles.impEye} />
            </View>
            <View style={styles.btnLogin}>
                <Button title='LOGIN' color='black' />
                <Text style={styles.textForgot}>
                    Forgot your password?
                </Text>
            </View>


        </View>
    )

}

var styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FBCB00'
    },
    Login: {
        width: '100px',
        height: '35px',
        top: '75px',
        left: '3px',
        justifyContent: 'space-between',
        alignContent: 'center'

    },
    textLogin: {
        fontFamily: 'Roboto',
        width: '700',
        fontSize: '30px',
        lineHeight: '36.15px',
        color: '#000000'
    },
    btnName: {
        width: '360px',
        height: '54px',
        top: '150px',
        left: '12px',
        backgroundColor: '#C4C4C4 30%',
        borderColor: '#F2F2F2',
        borderWidth: 1
    },
    impUser_Password: {
        width: '24.34px',
        height: '30px',
        top: '-40px',
        left: '10px'
    },
    impEye: {
        width: '30px',
        height: '30px',
        top: '-70px',
        left: '310px',

    },
    input: {
        marginLeft: '40px',
        padding: '4%',
        width: '90%',
        fontSize: '20',
        fontFamily: 'Roboto',
        fontWeight: '400',
        fontSize: '18px',
        lineHeight: '21.09px'

    },
    btnPassword: {
        width: '360px',
        height: '54px',
        top: '170px',
        left: '12px',
        backgroundColor: '#C4C4C4 30%',
        borderColor: '#F2F2F2',
        borderWidth: 1
    },
    btnLogin: {
        marginTop: '230px',
        width: '370px',
        marginLeft: '10px'
    },
    textForgot: {
        width: '239px',
        height: '27px',
        top: '50px',
        left: '61px',
        fontSize: '20px',
        fontFamily: 'Roboto',
        textAlign: 'center'
    }

})