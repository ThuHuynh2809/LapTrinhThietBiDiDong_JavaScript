
import { StyleSheet, Text, View, Image, Button, TextInput } from 'react-native';
import React from 'react';

export default function twoB() {

    return (

        <View style={styles.container}>
            <View style={styles.viewUsb}>
                <Image source={require('./Image/usb.png')}
                    style={styles.imgUsb}
                />
                <Text style={styles.textUsb}> USB Bluetooth Music Receiver
                    HJX - 001 - Biến loa thường thành loa bluetooth </Text>
            </View>
            <Text style={styles.textStar}>Cực kỳ hài lòng</Text>
            <View style={styles.viewStar}>
                <Image source={require("./Image/Star.png")}
                    style={styles.imgStar}
                />
                <Image source={require("./Image/Star.png")}
                    style={styles.imgStar}
                />
                <Image source={require("./Image/Star.png")}
                    style={styles.imgStar}
                />
                <Image source={require("./Image/Star.png")}
                    style={styles.imgStar}
                />
                <Image source={require("./Image/Star.png")}
                    style={styles.imgStar}
                />
            </View>
            <View style={styles.viewPicture}>
                <Image source={require("./Image/camera.png")}
                    style={styles.imgPicture}
                />
                <Text style={styles.textUpPicture}>Thêm hình ảnh</Text>
            </View>
            <View style={styles.viewCmt}>
                <TextInput
                    style={styles.textCmt}
                    placeholder="Hãy chi sẻ những điều mà bạn thích về sản phẩm"
                    multiline={true}
                />
                <Text style={styles.textHttps}>
                    https://meet.google.com/nsj-ojwi-xpp
                </Text>
            </View>
            <View style={styles.btnGui}>
                <Button title='Gửi' color='blue'/>
            </View>
        </View>
    )

}

var styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF'
    },
    viewUsb: {
        padding: '10px',
        flexDirection: 'row'
    },
    imgUsb: {
        width: '70px',
        height: '70px',
    },
    textUsb: {
        marginLeft: '5px',
        marginTop: '10px',
        fontFamily: 'Roboto',
        width: '700',
        fontSize: '20px',
        lineHeight: '20px'
    },
    viewStar: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '75%',
        justifyContent: 'space-around'
    },
    textStar: {
        fontFamily: 'Roboto',
        fontWeight: '700',
        fontSize: '18px',
        lineHeight: '21.09px',
        textAlign: 'center',
        top: '50px'
    },
    imgStar: {
        width: '39px',
        height: '39px',
        top: '80px',
        left: '50px',
    },
    viewPicture: {
        width: '320px',
        height: '68px',
        top: '100px',
        left: '35px',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        borderColor: '#1511EB',
        borderWidth: 1,
        borderRadius: 10
    },
    imgPicture: {
        width: '39px',
        height: '39px',
    },
    textUpPicture: {
        fontFamily: 'Roboto',
        fontWeight: '700',
        fontSize: '18px',
        lineHeight: '21.09px',
    },
    viewCmt: {
        flex:1,
        height: '200px',
        width: '320px',
        left:'35px',
        top:'120px',
        borderColor: "gray",
        borderWidth: 1,
        borderRadius: 10,
        paddingHorizontal: 20,
    },
    textCmt: {
        fontFamily: 'Roboto',
        fontWeight: '700',
        fontSize: '18px',
        lineHeight: '21.09px',
        color:'gray',
       
    },
    textHttps: {
        top:'130px',
        fontWeight: "bold",
        textAlign: "right"
    },
    btnGui: {
        marginTop: 150,
        borderRadius: 1,
        width:'320px',
        left:'30px',
        fontWeight: '300px',
        borderRadius: 10,
        marginLeft: 5,
        
        
    }
})