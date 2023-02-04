import AppLoading from "expo-app-loading";
import {
    StyleSheet,
    Text,
    View,
    StatusBar,
    SafeAreaView,
    Platform,
    Image,
    Dimensions,
} from "react-native";
import { useFonts } from "expo-font";
import { Themes, Icons } from "./assets/Themes";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Footer, Header, Profile, Audio } from "./app/components";
import * as SplashScreen from "expo-splash-screen";
import { useCallback } from "react";

/* Keep the splash screen visible while we fetch resources */
SplashScreen.preventAutoHideAsync();

/* This is the home screen used for the navigation system, we'll
 * learn more about in the coming weeks!
 */
function HomeScreen() {
    /* TODO: insert your code here */

    return (
        <View style={styles.mainAppContainter}>
            <Header/>
            <View style={styles.profileAndAudio}>
                <Profile/>
                <Audio/>
            </View> 
        </View>
    );
}

const Tab = createBottomTabNavigator();
const { height, width } = Dimensions.get('window');
console.log(height/width);
const screen_ratio = height/width;
if (screen_ratio > 1.6) {
   var margin_mult = 0.05;
} else {
    var margin_mult = 0.2;
}

export default function App() {
    const [fontsLoaded] = useFonts({
        Sydney: require("./assets/Fonts/Sydney-Serial-Regular.ttf"),
        "Sydney-Bold": require("./assets/Fonts/Sydney-Serial-Bold.ttf"),
    });

    const onLayoutRootView = useCallback(async () => {
        if (fontsLoaded) {
            await SplashScreen.hideAsync();
        }
    }, [fontsLoaded]);

    if (!fontsLoaded) return null;
    /* ^Don't mind/edit the code above, it's there to load the font for you! */
    StatusBar.setBarStyle(Themes.light.statusBar);
    /* ^Don't mind/edit this one either unless you decide to do the dark theme one, in that case, you will have to change it accordingly*/

    // Set header icons and fonts
    const menuIcon = Icons.menu.light;
    const sunIcon = Icons.sun;

    return (
        <View style={styles.mainAppContainter} onLayout={onLayoutRootView}>
            <NavigationContainer>
                <Tab.Navigator
                    tabBar={Footer}
                    screenOptions={{
                        headerShown: false,
                    }}
                >
                    <Tab.Screen name="Home" component={HomeScreen} />
                </Tab.Navigator>
            </NavigationContainer>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Themes.light.bg,
        alignItems: "center",
        justifyContent: "center",
    },
    mainAppContainter: {
        flex: 1,
        backgroundColor: Themes.light.bg,
    },
    profileAndAudio: {
        marginHorizontal: width * margin_mult,
        flex: 1,
    },
});
