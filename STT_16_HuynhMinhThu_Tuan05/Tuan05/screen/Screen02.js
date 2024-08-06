import { StatusBar } from 'expo-status-bar';
import React, { useState } from "react";
import { StyleSheet, Image, Text, View, Pressable, TouchableOpacity } from 'react-native';

export default function Screen02(navigation) {
    var [image, setImage] = useState(require("../assets/vs_blue.png"));
    return (
        <View style={styles.container}>
            <View style={styles.viewTop}>
                <View style={styles.viewPhone}>
                    <Image source={image} style={styles.imgPhone} />
                    <View style={styles.viewRight}>
                        <Text style={styles.textTitle}>Điện Thoại Vsmart Joy 3</Text>
                        <Text style={styles.textTitle}>Hàng chính hãng</Text>
                    </View>
                </View>
            </View>
            <View style={styles.viewBody}>
                <Text style={styles.textTitle2}>Chọn một màu bên dưới</Text>
                <View style={styles.viewColor}>
                    <TouchableOpacity style={styles.imgPhoneSilver}
                        onPress={() => { setImage(require("../assets/vs_silver.png")) }}>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.imgPhoneRed}
                        onPress={() => { setImage(require("../assets/vs_red.png")) }}>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.imgPhoneBlack}
                        onPress={() => { setImage(require("../assets/vs_black.png")) }}>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.imgPhoneBlue}
                        onPress={() => { setImage(require("../assets/vs_blue.png")) }}>
                    </TouchableOpacity>
                </View>
                <View style={styles.viewFooter}>
                    <TouchableOpacity style={styles.button}
                        onPress={() => { navigator.navigate("Screen01", { imageSource: image }) }}>
                        <Text style={styles.textButton}>XONG</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

var styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    viewTop: {
        backgroundColor: "#fff",
        width: "100%",
        alignItems: "center",
        justifyContent: "flex-start",
        padding: 20,

    },
    viewRight: {
        height: "100px",
        padding: 10,
    },
    viewPhone: {
        width: "100%",
        flexDirection: "row",
        alignItems: "flex-start",
        justifyContent: "space-evenly",
    },
    imgPhone: {
        width: "104px",
        height: "127px",
    },
    textTitle: {
        fontWeight: "400",
        fontSize: "15px",
        textAlign: 'left',
        paddingHorizontal: 1,
    },
    textTitle2: {
        fontWeight: "400",
        fontSize: "17px",
        textAlign: 'left',
        paddingHorizontal: 1,
    },
    viewBody: {
        border: '1px',
        width: '100%',
        height: '100%',
        display: 'flex',
        backgroundColor: '#C4C4C4'
    },
    viewColor: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '10px',
        marginTop: '10px'
    },
    imgPhoneBlue: {
        backgroundColor: '#234896',
        width: '85px',
        height: '80px'
    },
    imgPhoneBlack: {
        backgroundColor: '#000000',
        width: '85px',
        height: '80px'
    },
    imgPhoneRed: {
        backgroundColor: '#F30D0D',
        width: '85px',
        height: '80px'
    },
    imgPhoneSilver: {
        backgroundColor: '#C5F1FB',
        width: '85px',
        height: '80px'

    },
    viewFooter: {
        display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '40px',
          width: '332px',
          marginTop: '40px',
          
    },
    button: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        width: '100%',
        borderRadius: '10px',
        flexDirection: 'row',
        flex: '1',
        marginLeft: '50px',
        backgroundColor: '#234896'
    },
    textButton: {
        fontFamily: "Roboto",
        fontWeight: "700",
        fontSize: "20px",
        color: "white"
    },
});