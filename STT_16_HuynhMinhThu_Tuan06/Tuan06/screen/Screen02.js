
import React from 'react';
import { StyleSheet, TouchableOpacity, Text, View, Image, FlatList } from 'react-native';


const Data = [
    {
        id: 1,
        image: require("../assets/giacchuyen 1.png"),
        name: "Cáp chuyển từ Cổng USB sang PS2...",
        imageStar: require("../assets/Star.png"),
        numberRate: 15,
        price: 69900,
        discount: 39,
    },
    {
        id: 2,
        image: require("../assets/daynguon 1.png"),
        name: "Cáp chuyển từ Cổng USB sang PS2...",
        imageStar: require("../assets/Star.png"),
        numberRate: 15,
        price: 69900,
        discount: 39,
    },
    {
        id: 3,
        image: require("../assets/dauchuyendoipsps2 1.png"),
        name: "Cáp chuyển từ Cổng USB sang PS2...",
        imageStar: require("../assets/Star.png"),
        numberRate: 15,
        price: 69900,
        discount: 39,
    },
    {
        id: 4,
        image: require("../assets/dauchuyendoi 1.png"),
        name: "Cáp chuyển từ Cổng USB sang PS2...",
        imageStar: require("../assets/Star.png"),
        numberRate: 15,
        price: 69900,
        discount: 39,
    },
    {
        id: 5,
        image: require("../assets/carbusbtops2 1.png"),
        name: "Cáp chuyển từ Cổng USB sang PS2...",
        imageStar: require("../assets/Star.png"),
        numberRate: 15,
        price: 69900,
        discount: 39,
    },
    {
        id: 6,
        image: require("../assets/daucam 1.png"),
        name: "Cáp chuyển từ Cổng USB sang PS2...",
        imageStar: require("../assets/Star.png"),
        numberRate: 15,
        price: 69900,
        discount: 39,
    },
    {
        id: 7,
        image: require("../assets/giacchuyen 1.png"),
        name: "Cáp chuyển từ Cổng USB sang PS2...",
        imageStar: require("../assets/Star.png"),
        numberRate: 15,
        price: 69900,
        discount: 39,
    },
    {
        id: 8,
        image: require("../assets/daynguon 1.png"),
        name: "Cáp chuyển từ Cổng USB sang PS2...",
        imageStar: require("../assets/Star.png"),
        numberRate: 15,
        price: 69900,
        discount: 39,
    },
    {
        id: 9,
        image: require("../assets/dauchuyendoipsps2 1.png"),
        name: "Cáp chuyển từ Cổng USB sang PS2...",
        imageStar: require("../assets/Star.png"),
        numberRate: 15,
        price: 69900,
        discount: 39,
    },
    {
        id: 10,
        image: require("../assets/dauchuyendoi 1.png"),
        name: "Cáp chuyển từ Cổng USB sang PS2...",
        imageStar: require("../assets/Star.png"),
        numberRate: 15,
        price: 69900,
        discount: 39,
    },
    {
        id: 11,
        image: require("../assets/carbusbtops2 1.png"),
        name: "Cáp chuyển từ Cổng USB sang PS2...",
        imageStar: require("../assets/Star.png"),
        numberRate: 15,
        price: 69900,
        discount: 39,
    },
    {
        id: 12,
        image: require("../assets/daucam 1.png"),
        name: "Cáp chuyển từ Cổng USB sang PS2...",
        imageStar: require("../assets/Star.png"),
        numberRate: 15,
        price: 69900,
        discount: 39,
    },
];

const Item = ({ item }) => (
    <View style={styles.viewItems1}>
        <Image source={item.image}
            style={styles.imgItems} />
        <Text style={styles.textName}>{item.name}</Text>
        <View style={styles.viewEvaluate}>
            <View style={styles.viewStar}>
                <Image source={item.imageStar}
                    style={styles.imgStar}
                />
                <Image source={item.imageStar}
                    style={styles.imgStar}
                />
                <Image source={item.imageStar}
                    style={styles.imgStar}
                />
                <Image source={item.imageStar}
                    style={styles.imgStar}
                />
                <Image source={item.imageStar}
                    style={styles.imgStar}
                />
            </View>
            <Text style={styles.textNumberRate}>({item.numberRate})</Text>
            
        </View>
        <View style={styles.viewPrice}>
                <Text style={styles.textPrice}> {item.price}đ </Text>
                <Text style={styles.textDiscount}>-{item.discount}%</Text>
            </View>
    </View>
);


export default function Screen02() {
    return (
        <View style={styles.container}>
            <Header />
            <View style={styles.body}>
                <View style={styles.viewItems}>
                    <FlatList
                        data={Data}
                        renderItem={({ item }) => <Item item={item} />}
                        keyExtractor={item => item.id}
                        numColumns={2}
                    />
                </View>
            </View>
            <Footer/>
        </View>
    );
}

const Header = () => {
    return (
        <View style={styles.header}>
        <TouchableOpacity style={styles.btnArrow}>
            <Image source={require("../assets/ant-design_arrow-left-outlined.png")}
                style={styles.imgArrow} />
        </TouchableOpacity>
        <Text style={styles.textChat}>Chat</Text>
        <TouchableOpacity style={styles.btnCart}>
            <Image source={require("../assets/bi_cart-check.png")}
                style={styles.imgCart} />
        </TouchableOpacity>
    </View>

        // <View style={styles.header}>
        //     <TouchableOpacity style={styles.btnArrow}>
        //         <Image source={require("../assets/ant-design_arrow-left-outlined.png")}
        //             style={styles.imgArrow} />
        //     </TouchableOpacity>
        //     <View style={styles.viewSearch}>
        //         <Image
        //             style={styles.imgSearch}
        //             source={require("../assets/search.png")}
        //         />
        //         <TextInput
        //             placeholder="Dây cáp usb"
        //             style={styles.textSearch}
        //             placeholderTextColor="#7D5B5B"
        //         />
        //     </View>
        //     <TouchableOpacity>
        //         <Image
        //             style={styles.imgRed}
        //             source={require("../assets/Ellipse 4.png")}
        //         />
        //         <Image source={require("../assets/bi_cart-check.png")}
        //             style={styles.imgCart} />
        //     </TouchableOpacity>
        //     <TouchableOpacity>
        //         <Image
        //             style={styles.imgDost}
        //             source={require("../assets/Group 2.png")}
        //         />
        //     </TouchableOpacity>
        // </View>
    );
}
const Footer = () => {
    return (
        <View style={styles.footer}>
            <TouchableOpacity>
                <Image source={require('../assets/Group 10.png')}
                    style={styles.imgFooter}
                />
            </TouchableOpacity>
            <TouchableOpacity >
                <Image source={require('../assets/home.png')}
                    style={styles.imgFooter}
                />
            </TouchableOpacity>
            <TouchableOpacity>
                <Image source={require('../assets/back.png')}
                    style={styles.imgFooter}
                />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        flexDirection: "column",
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    header: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        padding: 15,
        backgroundColor: '#1BA9FF',
        //position: 'fixed',
        //top:0 
    },
    body: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        padding: 5,
        backgroundColor: '#C4C4C4'
    },
    viewItems1:{
        width:'50%',
        padding: 10,
        backgroundColor: '#FFFFFF',
        borderWidth: "1px",
        borderColor: "gray",
    },

    viewItems: {
        width: '100%',
        flexDirection: 'row',
        justifyContent:'space-around',
        alignItems: 'center',
        padding: 10,
        backgroundColor: '#FFFFFF',
        borderWidth: "1px",
        borderColor: "gray",
    },
    imgItems: {
        width: '155px',
        height: '90px'
    },
    textName: {
        
        fontSize: '12px',
        fontWeight: '400'
    },
    viewEvaluate: {
        flexDirection: 'row'
    },
    viewStar: {
        flexDirection: 'row'
    },
    imgStar: {
        width: '13px',
        height: '13px',
        color: '#FBE41B'
    },
    textNumberRate: {
        fontSize: '10px'
    },
    viewPrice: {
        flexDirection:'row',
        width:'120px'
    },
    textPrice: {
        fontSize: '12px',
        fontWeight: '700',
        paddingRight: 20,
    },
    textDiscount: {
        fontSize: '12px',
        color: "#969daa",
    },
    textChat: {
        fontSize: '18px',
        color: '#FFFFFF',
    },
    btnArrow: {
        width: '24px',
        height: '24px'
    },
    imgArrow: {
        width: '24px',
        height: '24px'
    },
    btnCart: {
        width: '24px',
        height: '24px'
    },
    imgCart: {
        width: '24px',
        height: '24px'
    },
    viewSearch:{

    },
    imgSearch:{
        width: 24,
        height: 24,
        position: "absolute",
        top: 3,
        left: 8,
    },
    textSearch:{
        width: 190,
        height: 30,
        backgroundColor: "#fff",
        paddingLeft: 40,
    },
    imgRed:{
        
    },
    imgDost:{
        width: '18px',
        height: '4.36px',
    },

    footer: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "ceter",
        padding: 15,
        backgroundColor: '#1BA9FF',
        position: 'fixed',
        bottom: 0
    },
    imgFooter: {
        width: '24px',
        height: '24px'
    },

});
