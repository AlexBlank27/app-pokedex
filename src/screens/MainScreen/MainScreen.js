import { View, TouchableOpacity, StyleSheet, StatusBar, Text, ActivityIndicator,Image,TextInput } from "react-native";
import { useState } from "react";
import { CustomTouchable } from "../../components/CustomTouchable/customTouchable";

export const MainScreen = () => {

   
    
    return (
       <View style={styles.container}>
            <Image style={styles.backgroundimage} source={require('../../../assets/pokemonfondo.jpg')}/>
            <Image style={styles.backgroundimage2} source={require('../../../assets/pokedex.png')}/>
            <TextInput
            placeholder="Ingresa el nombre del Pokemon"
            style={styles.input}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
    },
    backgroundimage: {
        width: 550,
        height: 200,
        position: 'absolute',
        top: 30,
        left: 'auto',
    },
    backgroundimage2: {
        width: 300,
        height: 100,
        position: 'absolute',
        top: 80,
        left: 'auto',
    },
    input: {
        borderWidth: 1,
        borderColor: 'gray',
        padding: 10,
        paddingStart: 30,
        width: '80%',
        height: 50,
        marginTop: 20,
        borderRadius: 30,
        backgroundColor: 'white',
        position: 'absolute',
        top: 180,
        left: 'auto',
    },
})

