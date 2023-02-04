import {
    StyleSheet,
    Text,
    View,
    Dimensions,
    PixelRatio,
    ImageBackground,
    Image,
} from "react-native";
import { Profiles, Themes, Icons } from "../../assets/Themes";
import { palette } from "../../assets/Themes/palette";

const { height, width } = Dimensions.get('window');
const playIcon = Icons.player.light;
const waveIcon = Icons.audioWave.light;

const screen_ratio = height/width;
if (screen_ratio > 1.6) {
    var play_h_mult = 0.1;
    var play_w_mult = 0.12;
    var wave_h_mult = 0.05;
    var wave_w_mult = 0.7;
    var margin_L_R = 0.05;


 } else {
    var play_h_mult = 0.2;
    var play_w_mult = 0.1;
    var wave_h_mult = 0.2;
    var wave_w_mult = 0.4; 
    var margin_L_R = 0.01;
}

export default function Audio() {
    return(
        <View style={styles.container}>
            <Text style={styles.text}>My hottest take</Text>
            <View style={styles.playAndWave}>
                <Image style={styles.playIconStyle} source={playIcon}></Image>
                <Image style={styles.waveIconStyle} source={waveIcon}></Image>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        // alignItems: 'center',
        // justifyContent: 'center',
        backgroundColor: Themes.light.bgSecondary,
        borderRadius: 15,
        aspectRatio: 1/.5,
        shadowOffset: Themes.light.shadows.shadowOffset,
        shadowColor: Themes.light.shadows.shadowColor,
        shadowRadius: Themes.light.shadows.shadowRadius,
        shadowOpacity: Themes.light.shadows.shadowOpacity,

        
        // width: width * .80, 
        // marginTop: height * .01,
        // marginLeft: width * .06,
        // marginRight: width * .06,
    },
    playAndWave: {
        flexDirection: 'row',
        alignItems: 'center',    
        justifyContent: 'space-evenly',
        aspectRatio: 1/.35,
        margin: 0,
        padding: 0,
    },
    waveIconStyle: {
        height: height * wave_h_mult,
        width: width * wave_w_mult,
        resizeMode: 'contain',
        marginRight: width * margin_L_R,
        // alignSelf: 'flex-start',
    },
    playIconStyle: {
        height: height * play_h_mult,
        width: width * play_w_mult,
        resizeMode: 'contain',
        marginLeft: width * margin_L_R,
    },
    text: {
        fontFamily: "Sydney",
        fontSize: PixelRatio.getFontScale() * height * 0.025,
        marginTop: width * .035,
        marginLeft: width * .035,
    },
});