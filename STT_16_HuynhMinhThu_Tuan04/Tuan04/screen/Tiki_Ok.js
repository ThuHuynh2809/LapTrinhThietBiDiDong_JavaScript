
import { StyleSheet, Text, View, Image, Button, TextInput, TouchableOpacity } from 'react-native';
import React, { useState } from 'react'
import { color } from '@rneui/base'

export default function tiki_Ok() {
    var [quantity, setQuantity] = useState(0);
    return (

        <View style={styles.container}>
            <View style={styles.viewTop}>
                <View style={styles.viewBook}>
                    <Image source={require('./Image/book.png')} style={styles.imgBook} />
                    <View style={styles.viewRight}>
                        <Text style={styles.textTitle}>Nguyên hàm tích phân và ứng dụng</Text>
                        <Text style={styles.textTitle}>Cung cấp bởi Tiki Trading</Text>
                        <Text style={styles.textPrice}>141.800 đ</Text>
                        <Text style={styles.textOldPrice}>200.000 đ</Text>
                        <View style={styles.viewRight2}>
                            <View style={styles.viewQuantity}>
                                <TouchableOpacity style={styles.button}
                                    onPress={() => setQuantity(quantity - 1)}
                                    disabled={quantity <= 0}
                                >
                                    <Image
                                        style={styles.imgIcon}
                                        source={require("./Image/btnminus.png")}
                                    ></Image>
                                </TouchableOpacity>
                                <Text style={styles.textQuantity}> {quantity} </Text>
                                <TouchableOpacity style={styles.button}
                                    onPress={() => setQuantity(quantity + 1)}
                                >
                                    <Image
                                        style={styles.imgIcon}
                                        source={require("./Image/btnadd.png")}
                                    ></Image>
                                </TouchableOpacity>
                            </View>
                            <Text style={styles.textBlue}> Mua sau </Text>
                        </View>
                    </View>
                </View>
                <View style={styles.viewVocher}>
                    <View style={styles.viewVocherFirst}>
                        <Text style={styles.textVocher}>
                            Mã giảm giá đã lưu
                        </Text>
                        <Text style={styles.textBlue}>Xem tại đây</Text>
                    </View>
                    <View style={styles.viewVocherSecond}>
                        <View style={styles.viewTableVocher}>
                            <View style={styles.viewTableVocher2} />
                            <Text style={styles.textVocher2}> Mã giảm giá </Text>
                        </View>
                        <TouchableOpacity style={styles.button2}>
                            <Text style={styles.textButton2}> Áp dụng </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <View style={styles.viewBody}>
                <View style={styles.viewBodyFirst}>
                    <Text style={{ fontSize: "12px", fontWeight: "bold", textAlign: "center" }}>Bạn có phiếu quà tặng Tiki/Got it/ Urbox?
                        <Text style={styles.textBlue}>  Nhập tại đây?</Text>
                    </Text>
                </View>
                <View style={styles.viewBodyFirst2}>
                    <Text style={{ fontSize: "18px", fontWeight: "bold", textAlign: "left", top: "-5px" }}>Tạm tính
                        <Text style={[styles.textPrice, { paddingLeft: 170 }]}> {141800 * quantity} đ</Text>
                    </Text>
                </View>
            </View>
            <View style={styles.viewFooter}>
                <View style={styles.viewBodyFirst3}>
                    <Text style={{ fontSize: "18px", fontWeight: "bold", textAlign: "left", top: "-5px", color: "#808080" }}>Thành tiền
                        <Text style={[styles.textPrice, { paddingLeft: 160 }]}>{141800 * quantity} đ</Text>
                    </Text>
                </View>
                <TouchableOpacity style={styles.button3}>
                    <Text style={[styles.textButton, { fontSize: 20 }, { color: "white" }, { fontWeight: "bold" }]}> TIẾN HÀNH ĐẶT HÀNG </Text>
                </TouchableOpacity>
            </View>
        </View>


    )

}

var styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        backgroundColor: '#C4C4C4'
    },
    viewTop: {
        backgroundColor: "#fff",
        width: "100%",
        alignItems: "center",
        justifyContent: "flex-start",
        padding: 20,

    },
    viewBook: {
        width: "100%",
        flexDirection: "row",
        alignItems: "flex-start",
        justifyContent: "space-between",
    },
    imgBook: {
        width: 104,
        height: 127,
    },
    viewRight: {
        flex: 1,
        height: 100,
        padding: 10,
    },
    textTitle: {
        fontWeight: "bold",
        fontSize: 13,
        textAlign: 'left',
        paddingVertical: 3,
    },
    textPrice: {
        fontWeight: "bold",
        fontSize: 20,
        color: "red",
    },
    textOldPrice: {
        color: "gray",
        textDecorationLine: "line-through",
        fontWeight: 'bold'
    },
    viewRight2: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    viewQuantity: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",

    },
    button: {
        width: 30,
        height: 30,
        borderRadius: 15,
        backgroundColor: "#ffffff",
        alignItems: "center",
        justifyContent: "center",
    },
    imgIcon: {
        width: 20,
        height: 20,
    },
    textQuantity: {
        fontSize: 20,
        fontWeight: "bold",
        paddingHorizontal: 5,
    },
    textBlue: {
        fontWeight: 'bold',
        color: '#134FEC',
        fontSize: '12px'
    },
    viewVocher: {
        width: "100%",
        paddingVertical: 15,
        justifyContent: "space-between",
    },
    viewVocherFirst: {
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
    },
    textVocher: {
        fontSize: 12,
        paddingRight: 30,
        fontWeight: "bold",
    },
    viewVocherSecond: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        height: "130%",
        width: "100%"
    },
    viewTableVocher: {
        height: "50px",
        width: "220px",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        borderColor: "#000000",
        borderWidth: 1,
        padding: 10,
    },
    viewTableVocher2: {
        width: "32px",
        height: "16px",
        backgroundColor: "#f2dd1b",
        marginRight: 5,
    },
    textVocher2: {
        fontSize: 18,
        fontWeight: "bold",
    },
    button2: {
        borderRadius: 4,
        height: 50,
        width: 100,
        alignItems: "center",
        justifyContent: "center",
        fontSize: 20,
        fontWeight: "bold",
    },
    textButton2: {
        backgroundColor: "#0A5EB7",
        borderRadius: 2,
        height: "45px",
        width: "100px",
        fontSize: 20,
        textAlign: "center",
        fontWeight: "bold",
        color: "white",
        paddingVertical: 7
    },
    viewBody: {
        flex: 4,
        justifyContent: 'flex-start',
    },
    viewBodyFirst: {
        width: "390px",
        height: "51px",
        top: "15px",
        backgroundColor: '#ffffff',
        padding: 20,
    },
    viewBodyFirst2: {
        width: "390px",
        height: "51px",
        top: "30px",
        backgroundColor: '#ffffff',
        padding: 20,
    },
    viewFooter: {
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#ffffff"
    },
    viewBodyFirst3: {
        width: "390px",
        height: "51px",
        top: "-50px",
        backgroundColor: "#ffffff",
        padding: 20,
    },
    button3: {
        backgroundColor: "#E53935",
        width: "331px",
        height: "50px",
        top: "-30px",
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 2,

    },

})