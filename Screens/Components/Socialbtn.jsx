import { View, Image, Linking, TouchableOpacity } from 'react-native'
import React from 'react'

const Socialbtn = () => {
    return (
        <View style={{
            flexDirection: "row",
            alignSelf: "center",
            width: "45%",
            justifyContent: "space-around",
        }}>
            <TouchableOpacity onPress={() => { Linking.openURL('https://www.facebook.com/betsawarlive') }}>
                <Image source={require('../../Icons/facebook.png')} style={{ width: 55, height: 55 }} resizeMode='contain' />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => { Linking.openURL('https://www.twitter.com/') }}>
                <Image source={require('../../Icons/twitter.png')} style={{ width: 55, height: 55 }} resizeMode='contain' />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => { Linking.openURL('https://instagram.com/betsawarlive') }}>
                <Image source={require('../../Icons/instagram.png')} style={{ width: 55, height: 55 }} resizeMode='contain' />
            </TouchableOpacity>
        </View>

    )
}

export default Socialbtn