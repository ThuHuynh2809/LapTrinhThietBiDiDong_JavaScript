import { StatusBar } from 'expo-status-bar';
import { Component } from 'react';
import { StyleSheet, Text, View, Image, Button, TouchableOpacity } from 'react-native';

export default function oneE() {
    return (
        <View style={styles.container}>
            <Text style={styles.text1}>REGISTER</Text>
            <View style={styles.boxName}>
                <Text style={styles.txtName}>Name</Text>
            </View>
            <View style={styles.boxPhone}>
                <Text style={styles.txtPhone}>Phone</Text>
            </View>

            <View style={styles.boxEmail}>
                <Text style={styles.txtEmail}>Email</Text>
            </View>
            <View style={styles.boxPass}>
                <Text style={styles.txtPass}>Password</Text>
                <Image source={require('./Image/eye 1.png')}
                    style={styles.imgPass}
                />
            </View>
            <View style={styles.boxBirthday}>
                <Text style={styles.txtBirthday}>Birthday</Text>
            </View>
            <Image 
                source={require('./Image/rdbFvsM.png')}
                style={styles.imgrbd}
            />
            <Text style={styles.txtMale}>Male</Text>
            <Image 
                source={require('./Image/rdbFvsM.png')}
                style={styles.imgrbd2}
            />
            <Text style={styles.txtFemele}>Femele</Text>
            <TouchableOpacity style={styles.btnRegister}>
                <Text style={styles.txtRegister}>REGISTER</Text>
            </TouchableOpacity>

            <Text style={styles.text2}>When you agree to terms and conditions</Text>

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

    text2: {
        width: '260px',
        height: '20px',
        top: '130px',
        left: '60px',
        fontFamilyamily: 'Roboto',
        fontSize: '14px',
        fontWeight: '400',
        lineHeight: '16.41px',
        textAlign: 'center'
    },
    boxName: {
        width: '305px',
        height: '55px',
        top: '70px',
        left: '40px',
        backgroundColor: '#C4C4C4'
    },
    txtName: {
        fontFamily: 'Roboto',
        fontSize: '20px',
        textAlign: 'left',
        padding: '10px',
        marginTop: '5px',
        marginLeft: '5px'
    },
    boxPhone: {
        width: '305px',
        height: '55px',
        top: '85px',
        left: '40px',
        backgroundColor: '#C4C4C4'
    },
    txtPhone: {
        fontFamily: 'Roboto',
        fontSize: '20px',
        textAlign: 'left',
        padding: '10px',
        marginTop: '5px',
        marginLeft: '5px'
    },

    boxEmail: {
        width: '305px',
        height: '55px',
        top: '100px',
        left: '40px',
        backgroundColor: '#C4C4C4'
    },

    txtEmail: {
        fontFamily: 'Roboto',
        fontSize: '20px',
        textAlign: 'left',
        padding: '10px',
        marginTop: '5px',
        marginLeft: '5px'
    },

    boxPass: {
        width: '305px',
        height: '55px',
        top: '115px',
        left: '40px',
        backgroundColor: '#C4C4C4'
    },

    txtPass: {
        fontFamily: 'Roboto',
        fontSize: '20px',
        textAlign: 'left',
        padding: '10px',
        marginTop: '5px',
        marginLeft: '5px'
    },

    imgPass: {
        width: '38px',
        height: '36px',
        top: '-40px',
        left: '250px'
    },
    boxBirthday: {
        width: '305px',
        height: '55px',
        top: '130px',
        left: '40px',
        backgroundColor: '#C4C4C4'
    },
    txtBirthday: {
        fontFamily: 'Roboto',
        fontSize: '20px',
        textAlign: 'left',
        padding: '10px',
        marginTop: '5px',
        marginLeft: '5px'
    },
    imgrbd:{
        width: '23px',
        height: '23px',
        top: '148px',
        left: '65px'
    },
    txtMale:{
        width: '40px',
        height: '21px',
        top: '125px',
        left: '100px',
        fontFamilyamily: 'Roboto',
        fontSize: '18px',
        fontWeight: '400',
        lineHeight: '21.09px',
        textAlign: 'center'
    },
    imgrbd2:{
        width: '23px',
        height: '23px',
        top: '104.5px',
        left: '180px'
    },
    txtFemele:{
        width: '59px',
        height: '21px',
        top: '82px',
        left: '215px',
        fontFamilyamily: 'Roboto',
        fontSize: '18px',
        fontWeight: '400',
        lineHeight: '21.09px',
        textAlign: 'center'
    },

    btnRegister: {
        width: '305px',
        height: '45px',
        top: '120px',
        left: '40px',
        borderRadius: '10px',
        backgroundColor: '#E53935'
    },
    txtRegister: {
        width: '150px',
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

    }
});