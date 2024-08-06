import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';
import increment from './redux/actions';

const Counter = ({ count, increment }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.textTitle}>This is count Number: {count}</Text>
            <Pressable style={styles.btnAdd}
                onPress={increment}>
                <Text style={styles.textbtn}>+</Text>
            </Pressable>
        </View>
    );
};
var mapStateToProps = (state) => ({
    count: state.count
})
var mapDispatchToPorps = (dispatch) => ({
    increment: () => {
        dispatch(increment)
    }
})

export default connect(mapStateToProps, mapDispatchToPorps)(Counter);


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    btnAdd: {
        height: 100,
        width: 100,
        backgroundColor: 'blue',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius:10
    },
    textTitle: {
        fontStyle: 20,
    },
    textbtn: {
        fontSize: 30, 
        color: '#ffffff'
    },
});
