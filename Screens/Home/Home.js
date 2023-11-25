import { StyleSheet, Text, View, Pressable, Image, Linking, ScrollView } from 'react-native'
import React, { useState, useEffect } from 'react'
import Header from '../Components/Header'
import { moreinfo } from './Data'
import { AntDesign } from '@expo/vector-icons';
import Socialbtn from '../Components/Socialbtn';
import { useNavigation } from '@react-navigation/native';
import { ActivityIndicator } from 'react-native';

const Home = () => {

    const navigation = useNavigation()

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchData = async () => {
        const resp = await fetch("https://control.betsawarlive.com/api/categories");
        const data = await resp.json();
        setData(data.categories);
        setLoading(false);
    };
    useEffect(() => {
        fetchData();
    }, []);

    return (
        <View style={styles.main}>
            <Header />
            <ScrollView>
                <View style={styles.boxtv}>
                    {loading ? <ActivityIndicator></ActivityIndicator> :
                        data.map((item) => (
                            <Pressable
                                onPress={() => {
                                    navigation.navigate('channels', {
                                        name: item.name,
                                        id: item.id,
                                    })
                                }}
                                style={styles.btn} key={item.id}>

                                <Image
                                    source={{ uri: `${item.image}` }}
                                    style={{
                                        width: 40,
                                        height: 40,
                                        borderRadius: 10,
                                        backgroundColor: "#202F5B"
                                    }}
                                />
                                <View style={styles.txtview}>
                                    <Text style={styles.txt}>{item.name}</Text>
                                    <AntDesign name="right" size={24} color="gray" />
                                </View>

                            </Pressable>
                        ))}
                </View>

                <Pressable 
                onPress={()=>{Linking.openURL('https://play.google.com/store/apps/details?id=com.ebrahem_khaled3.BetsawarPlayer')}}
                style={[styles.btn, { backgroundColor: "#D3D3D3", padding: 5, borderRadius: 10 }]}>
                    <Image
                        source={require('../../Icons/player.png')}
                        style={{ width: 40, height: 40 }}
                        resizeMode='contain'
                    />
                    <View style={[styles.txtview, { borderBottomWidth: 0 }]}>
                        <Text style={styles.txt}>حمل المشغل الخاص بنا</Text>
                        <AntDesign name="right" size={24} color="gray" />
                    </View>
                </Pressable>

                <View style={styles.boxtv}>
                    {moreinfo.map((item) => (
                        <Pressable
                            onPress={() => { item.navigation ? alert('نحن لان في صدد معالجة بعض البيانات') : Linking.openURL(item.link) }}
                            style={styles.btn} key={item.id}>
                            <Image
                                source={item.logo}
                                style={{
                                    width: 40,
                                    height: 40,
                                    borderRadius: 10,
                                    backgroundColor: "#202F5B"
                                }}
                            />

                            <View style={styles.txtview}>
                                <Text style={styles.txt}>{item.name}</Text>
                                <AntDesign name="right" size={24} color="gray" />
                            </View>
                        </Pressable>
                    ))}
                </View>
                <Socialbtn />
            </ScrollView>
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    main: {
        backgroundColor: "#EAEAEA",
        flex: 1
    },
    txt: {
        color: "#202F5B",
        fontSize: 20,
        fontFamily: "Cairo-bold",
        textAlign: "left"
    },
    txtview: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        width: "85%",
        borderBottomWidth: 1,
        borderColor: "gray",
        padding: 5
    },
    boxtv: {
        width: "95%",
        backgroundColor: "#fff",
        alignSelf: "center",
        borderRadius: 10,
        margin: 10
    },
    btn: {
        margin: 10,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
})