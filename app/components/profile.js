import {
    StyleSheet,
    Text,
    View,
    Dimensions,
    PixelRatio,
    ImageBackground,
} from "react-native";
import { Profiles, Themes } from "../../assets/Themes";
import { palette } from "../../assets/Themes/palette";

const { height, width } = Dimensions.get('window');

export default function Profile() {

    return (
        <View 
            style={styles.profileCard}
        >
            <ImageBackground
                style={styles.imageBackSize}
                imageStyle={styles.imageBackRadius}
                source={Profiles.mtl.image}
            >
                <Text style={styles.profileName}>{Profiles.mtl.name}</Text>
                <Text style={styles.profileCaption}>{Profiles.mtl.caption}</Text>
            </ImageBackground>

        </View>
    );
}


const styles = StyleSheet.create({
    profileCard: {
        marginVertical: height * 0.01,
        // paddingHorizontal: width * 0.05,
        alignContent: 'center',
        alignItems: 'center',
        shadowOffset: Themes.light.shadows.shadowOffset,
        shadowColor: Themes.light.shadows.shadowColor,
        shadowRadius: Themes.light.shadows.shadowRadius,
        shadowOpacity: Themes.light.shadows.shadowOpacity,


    },
    imageBackSize: {
        // height: height * .45,
        width: '100%',
        height: undefined,
        aspectRatio: 1/1.1,

    },
    imageBackRadius: {
        borderRadius: 8,
        // resizeMode: 'cover',
    },
    profileName: {
        fontSize: PixelRatio.getFontScale() * height * 0.04,
        fontFamily: "Sydney",
        color: 'white',
        margin: height * .015
    },
    profileCaption: {
        fontSize: PixelRatio.getFontScale() * height * 0.015,
        fontFamily: "Sydney",
        color: 'white',
        margin: height * .0155555,
        position: 'absolute',
        bottom: 0,
        left: 0,
    },

});