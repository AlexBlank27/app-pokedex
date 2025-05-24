import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

import { MainScreen } from "../screens/MainScreen/MainScreen";
import { View,Text, Image } from "react-native";
// import { styles } from "../components/CustomTouchable/style";

const Tab = createMaterialTopTabNavigator();
const Stack = createNativeStackNavigator();
const ImageUrl='https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/SCR/SCR_115_R_EN.png';


function MyTabs() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="MainScreen" component={MainScreen}
            ScreenOptions={{headerShown:false}}>
            </Tab.Screen>
            {/* <Tab.Screen name="MainScreen2" component={MainScreen}>
            </Tab.Screen> */}
        </Tab.Navigator>
    )
};

export function StackNavigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Pokedex" component={MyTabs}
                

                >

                </Stack.Screen>
            </Stack.Navigator>
        </NavigationContainer>
    )
}