import { View, TouchableOpacity, StyleSheet, StatusBar, Text, ActivityIndicator } from "react-native";
import { useState } from "react";
import { CustomTouchable } from "../../components/CustomTouchable/customTouchable";

export const MainScreen = () => {

    const [isActive, setIsActive] = useState(false);
    const [counter, setCounter] = useState(0);
    const [isEven, setIsEven] = useState(false);
    //const handlerActive = (isActive) = setIsActive(isActive)

    const handlerStates = (isActive) => {
        setIsActive(isActive);
        setCounter(counter + 1);
        const even = counter & 2 ? true : false;
        console.log("even:", even);
        console.log("Counter: ", counter);
        console.log("Status: ", isActive);
    }

    const handlerActive = () => console.log("Dentro del boton");
    return (
        <View>
            {/* <Text>Open up App.js to start working on your app!</Text> */}
            <StatusBar style="auto" />

            <View>
                <TouchableOpacity onPress={() => handlerStates(!isActive)}>
                    <Text>Activar</Text>
                </TouchableOpacity>
            </View>

            <View>
                <Text>
                    {isActive ? 'Hola mundo' : ''}
                </Text>
            </View>
            <View>
                <CustomTouchable onPress={() => handlerActive()} title='Presionar'></CustomTouchable>
                <ActivityIndicator color='orange' size='large'></ActivityIndicator>
            </View>
        </View>
    )
}