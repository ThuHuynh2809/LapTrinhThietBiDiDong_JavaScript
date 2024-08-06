
import React from 'react';
import { StyleSheet, TouchableOpacity, Text, View, Image, FlatList } from 'react-native';

const Data = [
    {
        id: '1',
        title: 'Ca nấu lẩu, nấu mì mini...',
        shopName: 'Shop Devang',
        image: require('../assets/ca_nau_lau.png'),
    },
    {
        id: '2',
        title: '1KG KHÔ GÀ BƠ TỎI...',
        shopName: 'Shop LTD Food',
        image: require('../assets/ga_bo_toi.png'),
    },
    {
        id: '3',
        title: 'Xe cần cẩu đa năng',
        shopName: 'Shop Thế giới đồ chơi',
        image: require('../assets/xa_can_cau.png'),
    },
    {
        id: '4',
        title: 'Đồ chơi dạng mô hình',
        shopName: 'Shop Thế giới đồ chơi',
        image: require('../assets/do_choi_dang_mo_hinh.png'),
    },
    {
        id: '5',
        title: 'Lãnh đạo giản đơn',
        shopName: 'Shop Minh Long Book',
        image: require('../assets/lanh_dao_gian_don.png'),
    },
    {
        id: '6',
        title: 'Hiểu lòng con trẻ',
        shopName: 'Shop Minh Long Book',
        image: require('../assets/hieu_long_con_tre.png'),
    },
];

const Item = ({ item }) => (
    <View style={styles.viewItems}>
        <Image source={item.image}
            style={styles.imgItems} />
        <View style={styles.textRight}>
            <Text style={styles.textTitle}>{item.title}</Text>
            <Text style={styles.textShop}>{item.shopName}</Text>
        </View>
        <TouchableOpacity style={styles.btnChat}>
            <Text style={styles.textChat}>Chat</Text>
        </TouchableOpacity>
    </View>
);
export default function Screen01() {
    return (
        <View style={styles.container}>
            <Header />
            <View style={styles.body}>
                <Text style={styles.textFeedback}>Bạn có thắc mắc với sản phẩm vừa xem đừng ngại chát với shop!</Text>
                <View style={styles.viewItems}>
                    <FlatList
                        data={Data}
                        renderItem={({ item }) => <Item item={item} />}
                        keyExtractor={item => item.id} />
                </View>
            </View>
            <Footer />
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
        //position: 'fixed',
        //top:0,
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        padding: 15,
        backgroundColor: '#1BA9FF',
        
    },
    btnArrow: {
        width: 24,
        height: 24,
    },
    imgArrow: {
        width: '24px',
        height: '24px'
    },
    btnCart: {
        width: 24,
        height: 24,
    },
    imgCart: {
        width: '24px',
        height: '24px'
    },
    textChat: {
        fontSize: '18px',
        color: '#FFFFFF',
    },
    btnChat: {
        width: '88px',
        height: '38px',
        backgroundColor: '#F31111',
        alignItems: 'center',
        justifyContent: 'space-around'
    },

    body: {
        width: '100%',
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center',
        padding: 5,
        backgroundColor: '#C4C4C4'

    },
    textFeedback: {
        fontSize: '14px',
        color: '#000000',
        width: '80%',
        fontWeight: '600',
        paddingVertical: 10
    },
    viewItems: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        padding: 10,
        backgroundColor: '#FFFFFF',
        borderWidth: "1px",
        borderColor: "gray",
    },
    imgItems: {
        width: '74px',
        height: '74px'
    },
    textRight: {
        flex: 1,
        padding: 10,
    },
    textTitle: {
        fontSize: '14px',
        color: '#000000',
        fontWeight: '600'
    },
    textShop: {
        fontSize: '14px',
        color: '#E83030',
        fontWeight: '600'
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
