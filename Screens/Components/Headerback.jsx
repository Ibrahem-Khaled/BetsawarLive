import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Ionicons, FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';


const HeaderBack = ({ ico }) => {
    
    const navigation = useNavigation()

    return (
        <View style={styles.main}>
            <Ionicons
                onPress={() => { navigation.goBack() }}
                name="arrow-back" size={26} color="#fff" />
            <Text style={styles.txt}>بتصور لايف</Text>

            {ico !== null ? <FontAwesome
                onPress={() => { navigation.navigate('search') }}
                name="search" size={24} color="#fff" /> : <View></View>}

        </View>
    )
}

export default HeaderBack

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