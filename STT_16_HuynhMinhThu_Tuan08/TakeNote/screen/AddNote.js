import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Image, Text, TextInput, TouchableOpacity, View, Animated } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useEffect, useState } from 'react';

export default function AddNote({ navigation }) {
    const [newItemNote, setNewItemNote] = useState("");
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("https://654063d245bedb25bfc1d9d5.mockapi.io/tuan07/id");
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
            if (newItemNote !== "") {
                const newItem = {
                    job: newItemNote,
                };
                // Thêm mục vào API
                const response = await fetch("https://654063d245bedb25bfc1d9d5.mockapi.io/tuan07/id",
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
                setNewItemNote("");

                // Chuyển hướng sau khi cập nhật dữ liệu
            }
        } catch (error) {
            console.error("Lỗi khi thêm tài khoản:", error);
        }
        navigation.navigate("DisplayNote");
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.headerLeft}>
                    <TouchableOpacity style={styles.btnBack}
                        onPress={() => navigation.navigate("DisplayNote")}
                    >
                        <Image source={require('../assets/back.png')}
                            style={styles.imgBack}
                        />
                    </TouchableOpacity>
                </View>
                <View style={styles.headerRight}>
                    <View style={styles.viewAvata}>
                        <Image source={require('../assets/avata.png')}
                            style={styles.imgAvata}
                        />
                    </View>
                    <View style={styles.viewTextRight}>
                        <Text style={styles.textHiName}>Hi Thủ</Text>
                        <Text style={styles.textHave}>Have agrate day a head</Text>
                    </View>
                </View>
            </View>
            <View style={styles.body}>
                <View style={styles.viewTitle}>
                    <Text style={styles.textTitle}>ADD YOUR NOTE</Text>
                </View>
                <View style={styles.viewInputJob}>
                    <Image source={require('../assets/job.png')}
                        style={styles.imgJob}
                    />
                    <TextInput style={styles.inputJob} placeholder='Input your note'
                        onChangeText={(text) => setNewItemNote(text)}
                        value={newItemNote}>
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

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    header: {
        flexDirection: 'row-reverse',
        alignItems: 'flex-start',
        justifyContent: 'center',
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
    headerRight: {
        width: '90%',
        flexDirection: 'row',
        justifyContent: 'center',
        marginLeft: 15
    },
    viewAvata: {
        height: 50,
        width: 50
    },
    imgAvata: {
        height: 50,
        width: 50

    },
    viewTextRight: {
        paddingHorizontal: 20
    },
    textHiName: {
        fontSize: 20,
        fontWeight: '700',
        fontStyle: 'Epilogue',
        alignSelf: 'center'
    },
    textHave: {
        fontSize: 14,
        fontWeight: '700',
        fontStyle: 'Epilogue',
        color: 'gray'
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
        fontSize: 32,
        fontWeight: '700',
        fontStyle: 'Epilogue',
        color: '#171A1F'
    },
    viewInputJob: {
        width: '90%',
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: '#9095A0',
        borderWidth: 1,
        borderRadius: 10
    },
    inputJob: {
        width: '90%',
        padding: '4%',
        fontSize: 16,
        fontWeight: '400',
        fontStyle: 'Inter',
        color: '#BCC1CA'
    },
    imgJob: {
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