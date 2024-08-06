import React, { useState } from "react";

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, SafeAreaView, Image, Text, Pressable, TextInput, View, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function Screen01(navigation, route) {
    var image = require("../assets/vs_blue.png");

    return (
        <View style={styles.container}>
            <View style={styles.viewTop}>
                <Image source={image}
                    style={styles.imgPhone} />
            </View>
            <View style={styles.viewBody}>
                <Text style={styles.textPhoneName}> Điện Thoại Vsmart Joy 3 - Hàng chính hãng</Text>
                <View style={styles.viewStar}>
                    <Image source={require("../assets/Star.png")}
                        style={styles.imgStar}
                    />
                    <Image source={require("../assets/Star.png")}
                        style={styles.imgStar}
                    />
                    <Image source={require("../assets/Star.png")}
                        style={styles.imgStar}
                    />
                    <Image source={require("../assets/Star.png")}
                        style={styles.imgStar}
                    />
                    <Image source={require("../assets/Star.png")}
                        style={styles.imgStar}
                    />
                    <Text style={styles.textCmt}>  (Xem 828 đánh giá)</Text>
                </View>
                <Text style={styles.textPrice}> 1.790.000 đ
                    <Text style={[styles.textTuberPrice, { paddingHorizontal: 40 }]}> 2.000.000 đ </Text>
                </Text>
                <View style={styles.viewQuestion}></View>
                <Text style={styles.textQuestion}>  Ở ĐÂU RẺ HƠN HOÀN TIỀN { }
                    <Image source={require("../assets/Group.png")}
                        style={styles.imgQuestion}
                    />
                </Text>
                <View style={styles.viewButton}>
                    <TouchableOpacity style={styles.button}
                        onPress={() =>
                            navigation.navigate('Screen02')
                        }>
                        <Text style={styles.textButton}> 4 MÀU - CHỌN MÀU { }
                            <Image source={require("../assets/Vector.png")} style={styles.imgVector} />
                        </Text>
                    </TouchableOpacity>

                </View>
            </View>
            <View style={styles.viewFooter}>
                <TouchableOpacity style={styles.button2}>
                    <Text style={styles.textButton2}>CHỌN MUA</Text>
                </TouchableOpacity>
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
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        padding: 20
    },
    imgPhone: {
        width: "301px",
        height: "361px",
    },
    viewBody: {
        width: "100%",
        padding: 20,
    },
    textPhoneName: {
        fontFamily: "Roboto",
        fontWeight: "400",
        fontSize: "15px",
        lineHeight: "17.58px",
    },
    viewStar: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '75%',
        paddingVertical: 5,
    },
    imgStar: {
        width: "25px",
        height: "25px",
    },
    textCmt: {
        fontFamily: "Roboto",
        fontWeight: "400",
        fontSize: "15px",
        lineHeight: "17.58px",
    },
    textPrice: {
        fontFamily: "Roboto",
        fontWeight: "700",
        fontSize: "18px",
    },
    textTuberPrice: {
        fontFamily: "Roboto",
        color: "gray",
        textDecorationLine: "line-through",
        fontWeight: "700",
        fontSize: "15px"
    },
    viewQuestion: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '75%',
        paddingVertical: 5,
    },
    textQuestion: {
        fontFamily: "Roboto",
        fontWeight: "700",
        fontSize: "12px",
        color: "red",
    },
    imgQuestion: {
        width: "15px",
        height: "15px",
    },
    viewButton: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        paddingVertical: 15,
    },
    button: {
        backgroundColor: "white",
        width: "100%",
        height: "30px",
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: '10px',
        borderWidth: "1px",
        borderColor: "gray",

    },
    textButton: {
        fontFamily: "Roboto",
        fontWeight: "400",
        fontSize: "15px",
    },
    imgVector: {
        width: "11.5px",
        height: "12px",
    },
    viewFooter: {
        width: "100%",
        padding: 20,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#ffffff"
    },
    button2: {
        backgroundColor: "red",
        width: "100%",
        height: "30px",
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: '10px',
        borderWidth: "1px",
        borderColor: "gray",

    },
    textButton2: {
        fontFamily: "Roboto",
        fontWeight: "700",
        fontSize: "20px",
        color: "white"
    },
});