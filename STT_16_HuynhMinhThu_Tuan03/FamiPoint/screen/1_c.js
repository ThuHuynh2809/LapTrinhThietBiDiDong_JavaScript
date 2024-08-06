import { StatusBar } from 'expo-status-bar';
import { Component } from 'react';
import { StyleSheet, Text, View, Image, Button, TouchableOpacity } from 'react-native';

export default function oneC() {
    return (
        <View style={styles.container}>
            <Text style={styles.text1}>CODE</Text>
            <Text style={styles.text2}>VERIFICATION</Text>
            <Text style={styles.text3}>Enter ontime password sent on ++849092605798</Text>
            <View style={styles.boxOTP}>
                <View>
                    <Image source={require('./Image/Rectangle 1.png')}
                        style={styles.imgOTP1}
                    />
                    <Image source={require('./Image/Rectangle 1.png')}
                        style={styles.imgOTP2}
                    />
                    <Image source={require('./Image/Rectangle 1.png')}
                        style={styles.imgOTP3}
                    />
                    <Image source={require('./Image/Rectangle 1.png')}
                        style={styles.imgOTP4}
                    /><Image source={require('./Image/Rectangle 1.png')}
                        style={styles.imgOTP5}
                    /><Image source={require('./Image/Rectangle 1.png')}
                        style={styles.imgOTP6}
                    />
                </View>
            </View>
            <TouchableOpacity style={styles.btnNext}>
                <Text style={styles.textNext}>VERIFY CODE</Text>
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
        width: '220px',
        height: '70px',
        top: '100px',
        left: '85px',
        fontFamily: 'Roboto',
        fontSize: '70px',
        fontWeight: '700',
        lineHeight: '70.31px',
        textAlign: 'center'
    },
    text2: {
        width: '302px',
        height: '53px',
        top: '150px',
        left: '45px',
        fontFamily: 'Roboto',
        fontSize: '25px',
        fontWeight: '700',
        lineHeight: '23.44px',
        textAlign: 'center'
    },


    text3: {
        width: '302px',
        height: '53px',
        top: '190px',
        left: '45px',
        fontFamilyamily: 'Roboto',
        fontSize: '20px',
        fontWeight: '700',
        lineHeight: '23.44px',
        textAlign: 'center'

    },
    boxOTP: {
        width: '300px',
        height: '50px',
        top: '210px',
        left: '40px',
        justifyContent: 'space-around',
        alignItems: 'flex-start',
    },
    imgOTP1: {
        width: '50px',
        height: '50px',
        top: '120px',
        left: '20px'

    },
    imgOTP2: {
        width: '50px',
        height: '50px',
        top: '70px',
        left: '64px'

    },
    imgOTP3: {
        width: '50px',
        height: '50px',
        top: '20px',
        left: '108px'

    },
    imgOTP4: {
        width: '50px',
        height: '50px',
        top: '-30px',
        left: '151px'

    },
    imgOTP5: {
        width: '50px',
        height: '50px',
        top: '-80px',
        left: '194px'

    },
    imgOTP6: {
        width: '50px',
        height: '50px',
        top: '-130px',
        left: '237px'

    },

    btnNext: {
        width: '339px',
        height: '50px',
        top: '270px',
        left: '30px',
        borderRadius: '10px',
        backgroundColor: '#E3C000'
    },
    textNext: {
        width: '200px',
        height: '22px',
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