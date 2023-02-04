import {
    StyleSheet,
    Text,
    Image,
    SafeAreaView,
    Dimensions,
    PixelRatio,
} from "react-native";
import { Icons } from "../../assets/Themes";

const { height, width } = Dimensions.get('window');

export default function Header() {

    // Set header icons and fonts
    const menuIcon = Icons.menu.light;
    const sunIcon = Icons.sun;

    return (
        <SafeAreaView style={[styles.header, styles.headerPositions]}>
            <Image style={styles.headerIcons} source={menuIcon} />
            <Text style={styles.headerTitle}>ensom</Text>
            <Image style={styles.headerIcons} source={sunIcon} />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    headerIcons: {
        height: height * 0.05,
        width: width * .1,
        resizeMode: 'contain',
    },
    headerTitle: {
        // fontSize: 32,
        fontSize: PixelRatio.getFontScale() * height * 0.04,
        fontFamily: "Sydney-Bold",
    },
    headerPositions: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        margin: '5%',
    },
});
