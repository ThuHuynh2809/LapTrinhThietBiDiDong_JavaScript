import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Image, Text, TextInput, TouchableOpacity, View, Animated } from 'react-native';

export default function Screen03({navigation}) {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.headerLeft}>
                    <TouchableOpacity style={styles.btnBack}
                        onPress={() => navigation.navigate("screen02")}
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
                    <Text style={styles.textTitle}>ADD YOUR JOB</Text>
                </View>
                <View style={styles.viewInputJob}>
                    <Image source={require('../assets/job.png')}
                        style={styles.imgJob}
                    />
                    <TextInput style={styles.inputJob} placeholder='Input your job'>
                    </TextInput>
                </View>
                <TouchableOpacity style={styles.btnFinish}
                    onPress={() => navigation.navigate("screen02")}
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