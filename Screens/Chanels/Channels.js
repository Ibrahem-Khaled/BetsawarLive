import { StyleSheet, ActivityIndicator, View, FlatList, Image, Pressable, ToastAndroid } from 'react-native'
import React, { useState, useEffect } from 'react'
import HeaderBack from '../Components/Headerback'
import Titel from '../Components/Titel'
import Socialbtn from '../Components/Socialbtn'
import { useNavigation } from '@react-navigation/native'

const Channels = ({ route }) => {
    const nav = useNavigation()
    const { name, id } = route.params;

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchData = async () => {
        const resp = await fetch(`https://control.betsawarlive.com/api/channels/${id}`);
        const data = await resp.json();
        setData(data.categories);
        setLoading(false);
    };
    useEffect(() => {
        fetchData();
    }, []);

    return (
        <View style={{ backgroundColor: "#EAEAEA", flex: 1 }}>
            <HeaderBack />
            <Titel name={`${name}`} />
            {loading ? <ActivityIndicator></ActivityIndicator>
                :
                <FlatList
                    data={data}
                    contentContainerStyle={{ alignItems: "center", alignSelf: "center" }}
                    numColumns={3}
                    key={"_"}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) =>
                        <Pressable
                            onPress={() => {
                                nav.navigate('live', {
                                    name: item.name,
                                    url: item.link,
                                })
                            }}>
                            <Image
                                source={{ uri: `${item.image}` }}
                                style={styles.image}
                            />
                        </Pressable>
                    }
                />
            }

            < Socialbtn />

        </View >
    )
}

export default Channels

const styles = StyleSheet.create({
    image: {
        width: 100,
        height: 100,
        margin: 10,
        borderRadius: 10,
        backgroundColor: "#fff",
        resizeMode: "contain",
    },
})