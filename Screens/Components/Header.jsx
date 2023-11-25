import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';


const Header = () => {
    const navigation = useNavigation()

    return (
        <View style={styles.main}>
            <Image
                source={require('../../Icons/setting.png')}
                style={{ width: 25, height: 25 }}
                resizeMode='contain'
            />
            <Text style={styles.txt}>بتصور لايف</Text>
            <FontAwesome
                onPress={() => { navigation.navigate('search') }}
                name="search" size={24} color="#fff" />
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    main: {
        width: "95%",
        backgroundColor: "#202F5B",
        height: 50,
        alignSelf: "center",
        borderRadius: 10,
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "space-around",
        margin: 5
    },
    txt: {
        color: "#fff",
        fontSize: 20,
        fontFamily: "Cairo-bold"
    },
})