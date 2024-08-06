import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect, useCallback } from "react";
import { StyleSheet, Image, Text, TextInput, TouchableOpacity, View, Animated } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function DangKy({ navigation }) {
    const [newItemName, setNewItemName] = useState("");
    const [newItemEmail, setNewItemEmail] = useState("");
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("https://654063d245bedb25bfc1d9d5.mockapi.io/tuan07/TakeNote");
                if (!response.ok) {
                    throw new Error("Failed to fetch data");
                }
                const json = await response.json();
                setData(json);
            } catch (error) {
                console.error("Lỗi khi tải dữ liệu:", error);
            }
        };

        fetchData();
    }, []);

    const addItem = async () => {
        try {
            if (newItemName !== "" && newItemEmail !== "") {
                const newItem = {
                    name: newItemName,
                    email: newItemEmail,
                };
                // Thêm mục vào API
                const response = await fetch("https://654063d245bedb25bfc1d9d5.mockapi.io/tuan07/TakeNote",
                    {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify(newItem),
                    }
                );
                if (!response.ok) {
                    throw new Error("Failed to add item");
                }
                const responseData = await response.json();
                // Cập nhật trạng thái dữ liệu sau khi thêm thành công
                setData((prevData) => [...prevData, responseData]);
                setNewItemName("");
                setNewItemEmail("");
                // Chuyển hướng sau khi cập nhật dữ liệu
            }
        } catch (error) {
            console.error("Lỗi khi thêm tài khoản:", error);
        }
        navigation.navigate("Login");
    };
    return (

        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.headerLeft}>
                    <TouchableOpacity style={styles.btnBack}
                        onPress={() => navigation.navigate("Login")}
                    >
                        <Image source={require('../assets/back.png')}
                            style={styles.imgBack}
                        />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.body}>
                <View style={styles.viewTitle}>
                    <Text style={styles.textTitle}>REGISTER AN ACCOUNT</Text>
                </View>
                <View style={styles.viewInput}>
                    <Image source={require('../assets/avatar_user.png')}
                        style={styles.imgUser}
                    />
                    <TextInput style={styles.input} placeholder='Input your name'
                        onChangeText={(text) => setNewItemName(text)}
                        value={newItemName}>
                    </TextInput>
                </View>
                <View style={styles.viewInput}>
                    <Image source={require('../assets/email.png')}
                        style={styles.imgEmail}
                    />
                    <TextInput style={styles.input} placeholder='Input your email'
                        onChangeText={(text) => setNewItemEmail(text)}
                        value={newItemEmail}>
                    </TextInput>
                </View>
                <TouchableOpacity style={styles.btnFinish}
                    onPress={addItem}
                >
                    <Text style={styles.textFinish}>FINISH {"->"}</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.footer}>
                <Image source={require('../assets/nodebook.png')}
                    style={styles.imgNodeBook}
                />
            </View>
        </View>
    );
}

var styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        height: '10%',
        width: '90%',
        paddingVertical: 10,

    },
    headerLeft: {
        height: '90%',
        width: '20%',
        alignItems: 'flex-start',
        marginRight: 20
    },
    btnBack: {
        height: 36,
        width: 36

    },
    imgBack: {
        height: 36,
        width: 36
    },

    body: {
        width: '90%',
        height: '50%',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-around',
        paddingVertical: 20,

    },
    viewTitle: {
        width: '90%',
        height: '30%',
        alignItems: 'center',
        justifyContent: 'center',

    },
    textTitle: {
        fontSize: 26,
        fontWeight: '700',
        fontStyle: 'Epilogue',
        color: '#8353E2'
    },
    viewInput: {
        width: '90%',
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: '#9095A0',
        borderWidth: 1,
        borderRadius: 10
    },
    input: {
        width: '90%',
        padding: '4%',
        fontSize: 16,
        fontWeight: '400',
        fontStyle: 'Inter',
        color: '#BCC1CA'
    },
    imgUser: {
        height: 24,
        width: 24,
        marginLeft: 10
    },
    imgEmail: {
        height: 24,
        width: 24,
        marginLeft: 10
    },
    btnFinish: {
        width: '60%',
        height: '15%',
        borderRadius: 12,
        backgroundColor: '#00BDD6',
        alignItems: 'center',
        justifyContent: 'center'
    },
    textFinish: {
        fontSize: 16,
        fontWeight: '400',
        fontStyle: 'Inter',
        color: '#FFFFFF'
    },
    footer: {
        width: '90%',
        height: '40%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    imgNodeBook: {
        height: 190,
        width: 190
    }
})