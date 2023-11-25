import { StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react'
import HeaderBack from './Components/Headerback'
import { FontAwesome } from '@expo/vector-icons';

const Search = () => {
    let va = null;
    return (
        <View style={{
            backgroundColor: "#ededeb",
            flex: 1
        }}>
            <HeaderBack ico={va} />
            <View style={styles.Searchbar}>
                <TextInput
                    placeholder='بحث'
                    style={styles.inbt}
                />
                <FontAwesome name="search" size={24} color="gray" />
            </View>

        </View>
    )
}

export default Search

const styles = StyleSheet.create({
    Searchbar: {
        width: "90%",
        height: 50,
        backgroundColor: "#fff",
        alignSelf: "center",
        alignItems: "center",
        borderRadius: 10,
        margin: 10,
        flexDirection: "row",
        justifyContent: "space-evenly"
    },
    inbt: {
        width: "80%",
        fontFamily: "Cairo-bold",
        fontSize: 18,
    },
})