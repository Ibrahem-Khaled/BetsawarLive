import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Titel = ({ name }) => {
    return (
        <View style={styles.main}>
            <Text style={styles.txt}>{name}</Text>
        </View>
    )
}

export default Titel

const styles = StyleSheet.create({
    main: {
        width: "90%",
        height: 35,
        borderRadius: 10,
        backgroundColor: '#921800',
        alignSelf: "center",
        alignItems: "center",
        justifyContent: "center",
        margin:10
    },
    txt: {
        color: "#fff",
        fontSize: 15,
        fontFamily: "Cairo-bold"
    },
})