import * as React from 'react';
import { View, StyleSheet, Button, TouchableOpacity, Text } from 'react-native';
import { Video, ResizeMode } from 'expo-av';
import Titel from './Components/Titel';
import * as ScreenOrientation from 'expo-screen-orientation';

const Live = ({ route }) => {
    const video = React.useRef(null);
    const [status, setStatus] = React.useState({});
    const [rotate, setRotate] = React.useState(true);

    async function ChangeScreen() {
        if (rotate == true) {
            ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE)
        } else if (rotate == false) {
            ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT)
        }
    }
    function Toggleme() {
        setRotate(!rotate)
        ChangeScreen()
    }

    const { name, url } = route.params

    return (
        <View style={styles.container}>
            <Titel name={name} />
            <Video
                ref={video}
                style={styles.video}
                source={{
                    uri: url,
                }}
                resizeMode={ResizeMode.CONTAIN}
                useNativeControls
                onPlaybackStatusUpdate={status => setStatus(() => status)}
            />
            <View style={{ width: '100%', flexDirection: "row", justifyContent: "space-around" }}>
                <TouchableOpacity
                    onPress={() =>
                        status.isPlaying ? video.current.pauseAsync() : video.current.playAsync()
                    }
                    style={styles.buttons}>
                    <Text style={{ fontWeight: 'bold', color: "#fff" }}>{status.isPlaying ? 'Pause' : 'Play'}</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => { Toggleme() }}
                    style={styles.buttons}>
                    <Text style={{ fontWeight: 'bold', color: "#fff" }}>{rotate == true ? 'Full' : 'Min'}</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default Live

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000'
    },
    video: {
        flex: 1,
    },
    buttons: {
        width: 60,
        height: 60,
        alignSelf: "center",
        borderRadius: 50,
        backgroundColor: '#921800',
        justifyContent: "center",
        alignItems: "center"
    },
})