import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Image, Text, TextInput, TouchableOpacity, View, Animated } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useEffect, useState } from 'react';

export default function DisplayNote({ navigation }) {
    var [change, setChange] = useState(0);
    useEffect(() => {
        fetch('https://654063d245bedb25bfc1d9d5.mockapi.io/tuan07/id')
            .then((response) => response.json())
            .then((json) => {
                setDT(json);
            });
    }, [change]);
    var [dt, setDT] = useState([]);

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
                <View style={styles.viewSearch}>
                    <Image source={require('../assets/search.png')}
                        style={styles.imgSearch}
                    />
                    <TextInput style={styles.inputSearch} placeholder='Search'>
                    </TextInput>
                </View>

                {
                    dt.map((item) => {
                        return (
                            <View style={styles.viewEdit} key={'id_job'}>
                                <Image source={require('../assets/check.png')}
                                    style={styles.imgCheck}
                                />
                                <Text style={styles.textEdit}>{item.job}</Text>
                                <TouchableOpacity style={styles.btnEdit}
                                    // onPress={() => {
                                    //     console.log(item.id_job)
                                    //     fetch("https://654063d245bedb25bfc1d9d5.mockapi.io/tuan07/id" + item.id_job, { method: 'DELETE' })
                                    //     setChange(change + 1);
                                    //     console.log(change);
                                    // }}
                                >
                                    <Image source={require('../assets/edit.png')}
                                        style={styles.imgEdit}
                                    />
                                </TouchableOpacity>
                            </View>
                        );
                    })
                }
            </View>
            <View style={styles.footer}>
                <TouchableOpacity style={styles.btnInsert}
                    onPress={() => navigation.navigate("AddNote")}
                >
                    <Image source={require('../assets/insert.png')}
                        style={styles.imgInsert}
                    />
                </TouchableOpacity>
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
        justifyContent: 'center',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'center',
        height: '10%',
        width: '90%',
        paddingVertical: 20
    },
    headerLeft: {
        height: '90%',
        width: '20%',
        alignItems: 'flex-start',
        marginLeft: 50
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
        marginRight: 5
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
        height: '70%',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingVertical: 20,
    },
    viewSearch: {
        width: '90%',
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: '#9095A0',
        borderWidth: 1,
        borderRadius: 10,
        margin: 10
    },
    inputSearch: {
        width: '90%',
        padding: '4%',
        fontSize: 14,
        fontWeight: '400',
        fontStyle: 'Inter'
    },
    imgSearch: {
        height: 26,
        width: 26
    },
    viewEdit: {
        width: '90%',
        height: '10%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        margin: 10,
        backgroundColor: '#D9D9D9',
        borderRadius: 20,
    },
    imgCheck: {
        height: 24,
        width: 24,
        marginLeft: 15
    },
    textEdit: {
        fontSize: 16,
        fontStyle: 'Inter',
        fontWeight: '700',
        marginLeft: 10
    },
    btnEdit: {
        height: 24,
        width: 24,
        marginRight: 15
    },
    imgEdit: {
        height: 24,
        width: 24
    },
    footer: {
        width: '90%',
        height: '20%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'fixed',
        bottom: 0
    },
    btnInsert: {
        width: 69,
        height: 69
    },
    imgInsert: {
        width: 69,
        height: 69
    },
});